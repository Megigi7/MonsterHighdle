import React, { useState, useEffect } from 'react';
import charactersData from '../data/characters.json';
import SearchBar from '../components/SearchBar';
import ModalResult from '../components/ModalResult';
import GuessesList from '../components/GuessesList';
import { getRandomElement } from '../utils/gameLogic';
import { Link } from 'react-router-dom';

const SilhouetteMode = () => {
  const [secretCharacter, setSecretCharacter] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' o 'won'
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('center'); // Borde del zoom

  // Lista de posiciones de los bordes para obligar al zoom a mostrar contorno
  const borderPositions = ['top left', 'top right', 'bottom left', 'bottom right', 'top center', 'bottom center', 'center left', 'center right'];

  useEffect(() => {
    // 1. Elegir personaje secreto usando nuestro reutilizable
    const randomCharacter = getRandomElement(charactersData);
    setSecretCharacter(randomCharacter);

    // 2. Elegir un borde aleatorio para el origen del zoom
    const randomPosition = getRandomElement(borderPositions);
    setZoomOrigin(randomPosition);
  }, []);

  const handleSelectCharacter = (character) => {
    if (gameStatus !== 'playing') return;

    const updatedGuesses = [...guesses, character];
    setGuesses(updatedGuesses);

    // Comparamos por ID igual que en Skullete
    if (character.id === secretCharacter.id) {
      setGameStatus('won');
      setIsResultOpen(true);
    }
  };

  if (!secretCharacter) return <div style={{ color: 'white', textAlign: 'center' }}>Loading Silhouette...</div>;

  const isWon = gameStatus === 'won';
  const currentZoom = isWon ? 1 : Math.max(1.5, 4.0 - guesses.length * 0.5);


  return (
    <div className="game-container">
      <h2 className="game-title">Silhouette</h2>
      <p style={{ color: '#aaa' }}>Guess the character by their silhouette</p>

      {/* Contenedor de la Silueta */}
      <div className="silhouette-display-container">
        <img 
          src={secretCharacter.silhouetteImage} // Usamos la imagen de la silueta del personaje
          alt="Silhouette Secret" 
          className={`silhouette-image ${isWon ? 'revealed' : 'zoomed-hidden'}`}
          style={{ 
            // Aplicamos dinámicamente el origen del zoom elegido en el useEffect
            transformOrigin: isWon ? 'center' : zoomOrigin,
            transform: `scale(${currentZoom})` // El zoom se reduce a medida que se hacen intentos fallidos 
          }}
        />
      </div>

      {/* Buscador de personajes */}
      {gameStatus === 'playing' ? (
        <SearchBar 
          allCharacters={charactersData} 
          onSelectCharacter={handleSelectCharacter} 
          alreadyGuessed={guesses.map(g => g.name)}
        />
      ) : (
        <button className="view-results-button" style={{ margin: '20px 0' }} onClick={() => setIsResultOpen(true)}>
          View Results 🏆
        </button>
      )}

      {/* Lista de intentos (Exactamente igual a la de Skullete Mode) */}
      <GuessesList guesses={guesses} secretCharacterId={secretCharacter.id} />

      {/* Ventana de Victoria */}
      <ModalResult 
        isOpen={isResultOpen} 
        isWon={isWon} 
        secretCharacter={secretCharacter} 
        guesses={guesses}
        onClose={() => setIsResultOpen(false)}
      />
    </div>
  );
};

export default SilhouetteMode;