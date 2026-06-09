import React from 'react';
import Row from './Row';
import { GAME_FIELDS } from '../utils/gameLogic';

const Board = ({ guesses, secretCharacter }) => {
  return (
    <div className="board-container">
      
      {/* Si el usuario ya ha hecho al menos un intento, mostramos los encabezados */}
      {guesses.length > 0 && (
        <div className="board-headers">
          <div className="board-title">Character</div>
          {/* Títulos de las columnas */}
          {GAME_FIELDS.map((field) => (
            <div key={field.id} className="board-title">
              {field.label}
            </div>
          ))}
        </div>
      )}

      {/* Renderizamos las filas de abajo hacia arriba (las más nuevas aparecen arriba) */}
      <div className="board-rows">
        {guesses.slice(0).reverse().map((guessedChar, index) => (
          <Row 
            key={index} 
            guessedCharacter={guessedChar} 
            secretCharacter={secretCharacter} 
          />
        ))}
      </div>
      
    </div>
  );
};

export default Board;