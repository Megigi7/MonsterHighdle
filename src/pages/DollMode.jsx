1. Elegir una Muñeca Aleatoria al iniciar la partida

// Creamos una lista plana con todas las muñecas combinadas con los datos de su línea
const allDolls = linesJson.flatMap(line => 
  line.dolls.map(doll => ({
    ...doll,
    line_id: line.id,
    line_name: line.name
  }))
);

// Elegimos la muñeca de la ronda
const secretDoll = allDolls[Math.floor(Math.random() * allDolls.length)];
// Ya tienes acceso directo a: secretDoll.doll_image, secretDoll.character_id y secretDoll.line_name

2. Fase 1: Validar si ha adivinado el Personaje
const isCorrectCharacter = playerGuess === secretDoll.character_id;

3. Fase 2: Mostrar el desplegable con las Líneas de ese Personaje   
// Filtramos qué líneas contienen una muñeca con el character_id del personaje acertado
const availableLinesForMenu = linesJson
  .filter(line => line.dolls.some(doll => doll.character_id === secretDoll.character_id))
  .map(line => line.name);

// Resultado si el personaje es Clawdeen: ["Signature", "School's Out"]