import React, { useState, useEffect } from 'react';
import charactersData from '../data/characters.json';
import SearchBar from '../components/SearchBar';
import ModalResult from '../components/ModalResult';
import GuessesList from '../components/GuessesList';
import { getRandomElement } from '../utils/gameLogic';

const SkulletteMode = () => {
  const [secretCharacter, setSecretCharacter] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' o 'won'
  const [isResultOpen, setIsResultOpen] = useState(false);
  
  // Controla si el filtro Blanco y Negro está activo (activado por defecto)
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(true);

  // Elegir el Skullette secreto al cargar la página
  useEffect(() => {
    const randomCharacter = getRandomElement(charactersData);
    setSecretCharacter(randomCharacter);
  }, []);

  const handleSelectCharacter = (character) => {
    if (gameStatus !== 'playing') return;

    const updatedGuesses = [...guesses, character];
    setGuesses(updatedGuesses);

    if (character.id === secretCharacter.id) {
      setGameStatus('won');
      setIsResultOpen(true);
      setIsBlackAndWhite(false); // Desactivar el filtro automáticamente al ganar para mostrarlo a color
    }
  };

  if (!secretCharacter) return <div style={{ color: 'white', textAlign: 'center' }}>Loading Skullette...</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2 className="game-title" style={{ fontSize: '32px', marginBottom: '20px' }}>Skullette</h2>
      <p style={{ color: '#aaa' }}>Whos Skullette is this?</p>

      {/* Botón Interruptor para el Filtro de Color */}
      <div style={{ margin: '15px 0' }}>
        <button 
          className={`toggle-filter-btn ${!isBlackAndWhite ? 'color-active' : ''}`}
          onClick={() => setIsBlackAndWhite(!isBlackAndWhite)}
          disabled={gameStatus === 'won'} // Bloqueado si ya ganó
        >
          {isBlackAndWhite ? '🎨 Activate Color' : '🖤 Black and White'}
        </button>
      </div>

      {/* Imagen del Skullette Secreto con Filtro Condicional */}
      <div className="skullette-display-container">
        <img 
          src={secretCharacter.skullette} 
          alt="Skullette Secret" 
          className="skullette-image"
          style={{ 
            // Si isBlackAndWhite es true, aplica el filtro de escala de grises al 100%
            filter: isBlackAndWhite 
              ? 'grayscale(100%) drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))' 
              : 'grayscale(0%) drop-shadow(0 0 12px rgba(255, 0, 127, 0.4))'
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

      {/* Lista de intentos simplificada */}
      <GuessesList guesses={guesses} secretCharacterId={secretCharacter.id} />
      
      {/* Ventana de Victoria */}
      <ModalResult 
        isOpen={isResultOpen} 
        isWon={gameStatus === 'won'} 
        secretCharacter={secretCharacter} 
        guesses={guesses}
        onClose={() => setIsResultOpen(false)}
      />

    </div>
  );
};

export default SkulletteMode;