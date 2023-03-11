// Puedes utilizar la función fs.unlinkSync() de Node.js para eliminar un archivo en particular utilizando su ruta.Esta función toma un solo argumento, que es la ruta del archivo que deseas eliminar.

// Para borrar los archivos creados en el ejemplo anterior, puedes utilizar un ciclo for para iterar sobre los nombres de los archivos y eliminarlos uno por uno.


// const fs = require('fs');

// for (let i = 1; i <= 10; i++) {
//   let fileName = `file${i}.txt`;
//   fs.unlinkSync(fileName);
// }

// Ten en cuenta que esta función arrojará un error si el archivo no existe o si no tienes permisos para eliminarlo.

// Ademas de fs.unlinkSync() existen otras funciones como unlink() que son asincronas y no bloquean el event loop.


const fs = require('fs');

for (let i = 1; i <= 10; i++) {
  let fileName = `file${i}.txt`;
  fs.unlink(fileName, (err) => {
    if (err) {
      console.error(err)
      return
    }
    //file removed
  });
}

