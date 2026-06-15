import React from 'react';
import { compareAttributes, GAME_FIELDS, GAME_URL } from '../utils/gameLogic';

const ModalResult = ({ isOpen, isWon, secretCharacter, guesses, onClose }) => {
  if (!isOpen) return null;

  // Función para generar la cuadrícula de emojis y compartirla
  const handleShare = () => {
    let emojiShareText = `MonsterHighdle 💀🎀 Tries: ${isWon ? guesses.length : 'X'}\n\n`;

    guesses.forEach((guess) => {
      const feedback = compareAttributes(guess, secretCharacter);
      let rowEmojis = '';

      // Mapeamos cada atributo a un emoji de color
      GAME_FIELDS.forEach((field) => {
        if (feedback[field.id] === 'correct') rowEmojis += '🟩';
        else if (feedback[field.id] === 'partial') rowEmojis += '🟨';
        else rowEmojis += '🟥';
      });

      emojiShareText += rowEmojis + '\n';
    });

    const gameUrl = GAME_URL;

    emojiShareText += `\nPlay it yourself on MonsterHighdle! 🦇\n👉 ${gameUrl}`;

    // Copiar al portapapeles del usuario
    navigator.clipboard.writeText(emojiShareText);
    alert('Results copied to clipboard! Press paste where you want to share them.');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content result-modal" style={{ textAlign: 'center' }}>
        <button className="close-button" onClick={onClose}>&times;</button>

        {isWon ? (
          <h2 style={{ color: '#00ffcc', textShadow: '0 0 10px rgba(0,255,204,0.5)' }}>
            Spectacular! 🎉
          </h2>
        ) : (
          <h2 style={{ color: '#dc3545' }}>Game Over! 💀</h2>
        )}

        <p>
          {isWon 
            // Usamos un operador ternario para usar "intento" o "intentos" según el número
            ? `You discovered the hidden monster in ${guesses.length} ${guesses.length === 1 ? 'attempt' : 'attempts'}.`
            : 'Don\'t worry, you\'ll do better next time!'}
        </p>

        <div className="secret-reveal">
          <p style={{ color: '#aaa', margin: '0 0 10px 0' }}>The secret character was:</p>
          <img 
            src={secretCharacter.image} 
            alt={secretCharacter.name} 
          />
          <h3 style={{ margin: '10px 0 0 0', fontSize: '22px' }}>{secretCharacter.name}</h3>
        </div>

        <button className="share-button" onClick={handleShare}>
          Share Results 👥
        </button>
      </div>
    </div>
  );
};

export default ModalResult;