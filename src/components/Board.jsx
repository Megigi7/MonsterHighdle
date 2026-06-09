import React from 'react';
import Row from './Row';
import { GAME_FIELDS } from '../utils/gameLogic';

const Board = ({ guesses, secretCharacter }) => {
  return (
    <div className="board-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '10px' }}>
      
      {/* Si el usuario ya ha hecho al menos un intento, mostramos los encabezados */}
      {guesses.length > 0 && (
        <div className="board-headers" style={{ display: 'flex', gap: '10px', marginBottom: '5px', fontWeight: 'bold', color: '#aaa', fontSize: '12px', textAlign: 'center' }}>
          <div style={{ width: '90px' }}>Character</div>
          {/* Títulos de las columnas */}
          {GAME_FIELDS.map((field) => (
            <div key={field.id} style={{ width: '90px' }}>
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