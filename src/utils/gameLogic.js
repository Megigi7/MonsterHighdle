// Configuración de los atributos del juego
export const GAME_FIELDS = [
  { id: 'gender', label: 'Gender' },
  { id: 'species', label: 'Species' },
  { id: 'firstAppearance', label: 'First Appearance' },
  { id: 'nDolls', label: 'Nº of Dolls' },
  { id: 'hairColor', label: 'Hair color' },
  { id: 'hasPet', label: 'Has pet' },
  { id: 'affiliation', label: 'Affiliation' }
];

export const GAME_URL = 'https://megigi7.github.io/monsterhighdle';

/**
 * Selecciona un elemento aleatorio de cualquier array que le pases.
 */
export const getRandomElement = (array) => {
  if (!array || array.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

/**
 * Compara el personaje arriesgado por el usuario con el personaje secreto del día.
 * @param {Object} guessedChar - Personaje que introdujo el jugador.
 * @param {Object} secretChar - El personaje oculto que hay que adivinar.
 * @returns {Object} Un objeto con el estado de cada atributo (correct, partial, incorrect).
 */
export const compareAttributes = (guessedChar, secretChar) => {
  const result = {};

  // Recorremos todas las propiedades del personaje secreto
  Object.keys(secretChar).forEach((key) => {
    // Ignora las propiedades únicas o de imagen
    if (key === 'id' || key === 'name' || key === 'image' || key === 'skullete' || key === 'silhouette') return;

    // Si por alguna razón el personaje arriesgado no tiene esa propiedad, marcamos incorrecto
    if (guessedChar[key] === undefined || guessedChar[key] === null) {
      result[key] = 'incorrect';
      return;
    }

    // Compara propiedades directas (coincidencia exacta)
    if (guessedChar[key] === secretChar[key]) {
      result[key] = 'correct';
    } else {
      // Convertimos los valores a String por si acaso son números (ej: generación o nº de muñecas)
      const guessedStr = String(guessedChar[key]).trim();
      const secretStr = String(secretChar[key]).trim();

      // Lógica para múltiples valores usando tu sistema de separación
      const guessedItems = guessedStr.split(' / ');
      const secretItems = secretStr.split(' / ');
      
      const hasPartialMatch = guessedItems.some(item => secretItems.includes(item));

      if (hasPartialMatch) {
        result[key] = 'partial';
      } else {
        result[key] = 'incorrect';
      }
    }
  });

  return result;
};