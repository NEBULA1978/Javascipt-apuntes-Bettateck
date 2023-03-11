// utilizar una clausura para crear un archivo de texto:
const fs = require('fs');

function createFile(fileName) {
  var fileContent = "";
  function addContent(content) {
    fileContent += content;
  }
  function saveFile() {
    // aquí se guarda el archivo con el nombre y contenido especificado
    fs.writeFileSync(fileName, fileContent);
  }
  return { addContent, saveFile };
}

var myFile = createFile("myTextFile.txt");
myFile.addContent("Hello, ");
myFile.addContent("world!");
myFile.saveFile();


// En este ejemplo se crea una función "createFile" que recibe un nombre de archivo como argumento y devuelve un objeto con dos funciones: "addContent" y "saveFile".La función "addContent" tiene acceso a la variable "fileContent" declarada en la función "createFile", lo que permite agregar contenido al archivo.La función "saveFile" también tiene acceso a la variable "fileContent" y el nombre del archivo, lo que permite guardar el archivo con el nombre y contenido especificado.

//   Nota: El código anterior utiliza la funcion fs.writeFileSync de Node.js para escribir el archivo.si no estas utilizando node debes usar otra libreria o metodo para escribir un archivo.