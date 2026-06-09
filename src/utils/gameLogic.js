/**
 * Compara el personaje arriesgado por el usuario con el personaje secreto del día.
 * @param {Object} guessedChar - Personaje que introdujo el jugador.
 * @param {Object} secretChar - El personaje oculto que hay que adivinar.
 * @returns {Object} Un objeto con el estado de cada atributo (correct, partial, incorrect).
 */

/**
 * Selecciona un elemento aleatorio de cualquier array que le pases.
 */
export const getRandomElement = (array) => {
  if (!array || array.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const compareAttributes = (guessedChar, secretChar) => {
  const result = {};

  // Recorremos todas las propiedades del personaje
  Object.keys(secretChar).forEach((key) => {
    // Ignora las propiedades únicas
    if (key === 'id' || key === 'name' || key === 'image') return;

    // Compara propiedades entre personajes
    if (guessedChar[key] === secretChar[key]) {
      result[key] = 'correct';
    } else {
      // Logica para multiples valores
      const guessedColors = guessedChar[key].split(' / ');
      const secretColors = secretChar[key].split(' / ');
      
      const hasPartialMatch = guessedColors.some(color => secretColors.includes(color));

      if (hasPartialMatch) {
        result[key] = 'partial';
      } else {
        result[key] = 'incorrect';
      }
    }
  });

  // Correct -> Verde
  // Partial -> Amarillo
  // Incorrect -> Red
  // Devuelve un array de los resultados por casilla
  return result;
};


