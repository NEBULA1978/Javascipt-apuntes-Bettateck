// Crear un ciclo for para crear varios archivos con nombres consecutivos

// for (let i = 1; i <= 10; i++) {
//   let file = createFile(`file${i}.txt`);
//   file.addContent(`Content of file ${i}`);
//   file.saveFile();
// }

// En este ejemplo, el ciclo for se ejecuta 10 veces, creando un archivo por cada iteración con un nombre diferente, utilizando la variable i para darle un nombre consecutivo a cada archivo.

// Puedes cambiar el nombre del archivo, el contenido y la cantidad de archivos a crear según tus necesidades.

// Espero que esto te ayude a resolver tu problema.Si tienes alguna otra pregunta, no dudes en preguntar.

// Lo siento, cometí un error al no mencionar que debes declarar la función "createFile" antes de utilizarla en el ciclo for.Asegúrate de que la función "createFile" esté declarada y disponible en el contexto de tu código antes de intentar crear los archivos.Puedes hacerlo colocando la declaracion de la funcion antes del ciclo for o en otro archivo y importandola en tu codigo.

const fs = require('fs');

function createFile(fileName) {
  var fileContent = "";
  function addContent(content) {
    fileContent += content;
  }
  function saveFile() {
    fs.writeFileSync(fileName, fileContent);
  }
  return { addContent, saveFile };
}

for (let i = 1; i <= 10; i++) {
  let file = createFile(`file${i}.txt`);
  file.addContent(`Content of file ${i}`);
  file.saveFile();
}


