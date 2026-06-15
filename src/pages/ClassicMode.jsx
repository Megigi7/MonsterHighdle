import React, { useState, useEffect } from 'react';
import charactersData from '../data/characters.json';
import SearchBar from '../components/SearchBar';
import Board from '../components/Board';
import InfoModal from '../components/InfoModal';
import ModalResult from '../components/ModalResult';
import { getRandomElement } from '../utils/gameLogic';
import { Link } from 'react-router-dom';

const ClassicMode = () => {
  // --- ESTADOS DEL JUEGO ---
  const [secretCharacter, setSecretCharacter] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' o 'won'
  
  // Control de Modales
  const [isResultOpen, setIsResultOpen] = useState(false);

  // --- PASO INICIAL: Elegir el personaje secreto ---
  useEffect(() => {
    // Por ahora, elige uno al azar cada vez que se recarga la página
    const randomCharacter = getRandomElement(charactersData);
    setSecretCharacter(randomCharacter);
  }, []);

  // --- LÓGICA CUANDO EL USUARIO SELECCIONA UN PERSONAJE ---
  const handleSelectCharacter = (character) => {
    if (gameStatus !== 'playing') return;

    // Añadimos el nuevo intento a la lista
    const updatedGuesses = [...guesses, character];
    setGuesses(updatedGuesses);

    // ¿Ha ganado?
    if (character.id === secretCharacter.id) {
      setGameStatus('won');
      setIsResultOpen(true); // Abrimos el cartel de victoria automáticamente
    }
  };

  // Esperamos a que el personaje secreto esté cargado para no dar errores
  if (!secretCharacter) return <div style={{ color: 'white', textAlign: 'center' }}>Choosing a secret monster...</div>;

  return (
    <div className="game-container">
      <h2 className="game-title">Classic</h2>

      {/* Zona de Juego Activa */}
      {gameStatus === 'playing' ? (
        <SearchBar 
          allCharacters={charactersData} 
          onSelectCharacter={handleSelectCharacter} 
          alreadyGuessed={guesses.map(g => g.name)}
        />
      ) : (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <button className="view-results-button" onClick={() => setIsResultOpen(true)}>
            View Results 🏆
          </button>
        </div>
      )}

      {/* El Tablero con los intentos */}
      <Board guesses={guesses} secretCharacter={secretCharacter} />

      {/* MODAL 2: Fin de Juego / Compartir */}
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

export default ClassicMode;