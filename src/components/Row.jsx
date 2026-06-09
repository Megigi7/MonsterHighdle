import React from 'react';
import { compareAttributes, GAME_FIELDS } from '../utils/gameLogic';

const Row = ({ guessedCharacter, secretCharacter }) => {
  // Obtenemos los colores de cada celda comparando el intento con el secreto
  const feedback = compareAttributes(guessedCharacter, secretCharacter);

  return (
    <div className="character-row">
      
      {/* Celda de la Imagen y Nombre (Siempre se muestra) */}
      <div className="cell info-cell">
        <img src={guessedCharacter.image} alt={guessedCharacter.name} style={{ width: '50px', height: '50px' }} />
        <span>{guessedCharacter.name}</span>
      </div>

      {/* Celdas de atributos */}
      {GAME_FIELDS.map((field) => {
        const value = guessedCharacter[field.id];
        const cellStatus = feedback[field.id] || 'incorrect';

        return (
          <div key={field.id} className={`cell ${cellStatus}`} >
            {value}
          </div>
        );


      })}

    </div>
  );
};

export default Row;