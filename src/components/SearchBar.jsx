import React, { useState } from 'react';

const SearchBar = ({ allCharacters, onSelectCharacter, alreadyGuessed }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Se ejecuta cada vez que el usuario escribe algo
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const lowerValue = value.toLowerCase();

      // 1. Filtramos los personajes que contengan las letras y que no estén adivinados
      const filtered = allCharacters.filter(char => 
        char.name.toLowerCase().includes(lowerValue) &&
        !alreadyGuessed.includes(char.name)
      );

      // 2. ORDENACIÓN INTELIGENTE: Ordenamos por la posición del texto introducido
      const sorted = filtered.sort((a, b) => {
        const indexA = a.name.toLowerCase().indexOf(lowerValue);
        const indexB = b.name.toLowerCase().indexOf(lowerValue);
        return indexA - indexB;
      });

      setSuggestions(sorted);
    } else {
      setSuggestions([]);
    }
  };

  // Se ejecuta cuando el usuario hace clic en una sugerencia o pulsa Enter
  const handleSelect = (character) => {
    onSelectCharacter(character); // Enviamos el personaje
    setQuery('');                // Limpiamos el buscador
    setSuggestions([]);          // Limpiamos las sugerencias
  };

  // Captura el envío del formulario (cuando el usuario pulsa Enter)
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Si hay sugerencias disponibles, seleccionamos la primera de la lista
    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    }
  };

  return (
    // Envolvemos el input en un form para capturar el Enter de forma nativa
    <form onSubmit={handleSubmit} className="search-container" style={{ position: 'relative', width: '300px', margin: '20px auto' }}>
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
          {suggestions.map((char, index) => (
            <li 
              key={char.id} 
              onClick={() => handleSelect(char)}
              // Opcional: añadimos una clase visual a la primera sugerencia para que el usuario sepa que está pre-seleccionada
              className={index === 0 ? 'first-suggestion-highlight' : ''}
            >
              <img src={char.image} alt="" style={{ width: '30px', marginRight: '10px' }} />
              {char.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;