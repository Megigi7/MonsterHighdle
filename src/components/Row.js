import React from 'react';
import { compareAttributes } from '../utils/gameLogic';

const Row = ({ guessedCharacter, secretCharacter }) => {
  // Obtenemos los colores de cada celda comparando el intento con el secreto
  const feedback = compareAttributes(guessedCharacter, secretCharacter);

  return (
    <div className="character-row" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      
      {/* Celda de la Imagen y Nombre (Siempre se muestra) */}
      <div className="cell info-cell">
        <img src={guessedCharacter.image} alt={guessedCharacter.name} style={{ width: '50px', height: '50px' }} />
        <span>{guessedCharacter.name}</span>
      </div>

      {/* Celda: Gender */}
      <div className={`cell ${feedback.gender}`}>
        {guessedCharacter.gender}
      </div>

      {/* Celda: Species */}
      <div className={`cell ${feedback.species}`}>
        {guessedCharacter.species}
      </div>

      {/* Celda: First Appearance */}
      <div className={`cell ${feedback.firstAppearance}`}>
        {guessedCharacter.firstAppearance}
      </div>

      {/* Celda: Nº of dolls (G1) */}
      <div className={`cell ${feedback.nDolls}`}>
        {guessedCharacter.nDolls}
      </div>

      {/* Celda: Hair Color */}
      <div className={`cell ${feedback.hairColor}`}>
        {guessedCharacter.hairColor}
      </div>

      {/* Celda: Has pet */}
      <div className={`cell ${feedback.hasPet}`}>
        Mascota: {guessedCharacter.hasPet}
      </div>

      {/* Celda: Affiliation */}
      <div className={`cell ${feedback.affiliation}`}>
        {guessedCharacter.affiliation}
      </div>

    </div>
  );
};

export default Row;