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

        // Obtenemos la flecha correspondiente para el número de muñecas, si es necesario
        let arrow = null;
        if (cellStatus === 'higher') arrow = '▲'; // Flecha hacia arriba
        if (cellStatus === 'lower')  arrow = '▼'; // Flecha hacia abajo

        return (
          <div 
            key={field.id} 
            className={`cell ${cellStatus}`} 
          >
            {/* Si hay una flecha, la pintamos en un contenedor especial de fondo */}
            {arrow && <div className="cell-arrow-bg">{arrow}</div>}
            
            {/* El texto queda por encima */}
            <span className="cell-text-value">
              {value}
            </span>
          </div>
        );


      })}

    </div>
  );
};

export default Row;