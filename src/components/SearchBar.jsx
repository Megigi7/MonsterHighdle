import React, { useState } from 'react';

const SearchBar = ({ allCharacters, onSelectCharacter, alreadyGuessed }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Se ejecuta cada vez que el usuario escribe algo
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      // Filtramos personajes que coincidan con la búsqueda
      // y que NO hayan sido adivinados ya
      const filtered = allCharacters.filter(char => 
        char.name.toLowerCase().includes(value.toLowerCase()) &&
        !alreadyGuessed.includes(char.name)
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Se ejecuta cuando el usuario hace clic en una sugerencia
  const handleSelect = (character) => {
    onSelectCharacter(character); // Enviamos el personaje al App.js
    setQuery('');                // Limpiamos el buscador
    setSuggestions([]);          // Limpiamos las sugerencias
  };

  return (
    <div className="search-container" style={{ position: 'relative', width: '300px', margin: '20px auto' }}>
      <input
        type="text"
        placeholder="Search Ghoul or Manster..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />

      {/* Lista de sugerencias */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((char) => (
            <li key={char.id} onClick={() => handleSelect(char)}>
              <img src={char.image} alt="" style={{ width: '30px', marginRight: '10px' }} />
              {char.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
