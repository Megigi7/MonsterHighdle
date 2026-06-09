import React from 'react';

const GuessesList = ({ guesses, secretCharacterId }) => {
  return (
    <div className="character-guesses-list" style={{ marginTop: '30px' }}>
      {guesses.slice(0).reverse().map((guess, index) => {
        const isCorrect = guess.id === secretCharacterId;
        return (
          <div 
            key={index} 
            className={`character-guess-row ${isCorrect ? 'correct' : 'incorrect'}`}
          >
            <img src={guess.image} alt={guess.name} />
            <span>{guess.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default GuessesList;