/**
 * Compara el personaje arriesgado por el usuario con el personaje secreto del día.
 * @param {Object} guessedChar - Personaje que introdujo el jugador.
 * @param {Object} secretChar - El personaje oculto que hay que adivinar.
 * @returns {Object} Un objeto con el estado de cada atributo (correct, partial, incorrect).
 */

export const compareAttributes = (guessedChar, secretChar) => {
  const result = {};

  // Recorremos todas las propiedades del personaje
  Object.keys(secretChar).forEach((key) => {
    if (key === 'id' || key === 'name' || key === 'image') return;

    if (guessedChar[key] === secretChar[key]) {
      result[key] = 'correct'; // Se pintará de verde
    } else {
      // Lógica especial para atributos con múltiples valores (ej: "Rosa/Negro" vs "Marrón/Morado")
      const guessedColors = guessedChar[key].split('/');
      const secretColors = secretChar[key].split('/');
      
      const hasPartialMatch = guessedColors.some(color => secretColors.includes(color));

      if (hasPartialMatch) {
        result[key] = 'partial'; // Se pintará de amarillo (ej: comparte el color negro de pelo)
      } else {
        result[key] = 'incorrect'; // Se pintará de rojo
      }
    }
  });

  return result;
};