// control de flujo

// // condicionales
// var condicion = false;
// var condicion2 = true;
// if (condicion && condicion2) {
//     // hago esto si se cumple condicion
//     console.log('Estoy en el if');
// } else {
//     // hago esto otro si no se cumple condicion
//     console.log('Estoy en el else');
// }
// // continuo ejecutando


///////////////////////////////////////////
///////////////////////////////////////////
// Si no comento me da errror

// if (condicion1) {
//   if (condicion2) {
//     // Hago algo
//   }
//   else {
//     // Hago otra cosa si la condicion2 no se cumple
//   }
//   // Luego hago otra cosa
// }
// else if (condicion3) {
//   // Hago algo diferente si la condicion1 no se cumple y la condicion3 sí se cumple
// }
// else {
//   // Hago otra cosa distinta si la condicion1 y la condicion3 no se cumplen
// }

///////////////////////////////////////////
///////////////////////////////////////////
// cómo puedes encontrar los alumnos que tienen las mismas asignaturas en común.

// Para hacer esto, puedes utilizar un enfoque similar al que te mostré anteriormente para buscar asignaturas específicas. Primero, debes crear una lista de asignaturas a buscar y luego buscar a través de los alumnos para encontrar aquellos que tienen todas las asignaturas de la lista en común.

// Aquí tienes un ejemplo de cómo podrías hacer esto en JavaScript:


// array de alumnos y asignaturas
var alumnos = [
  'Juan Perez Matemáticas Lenguaje Historia',
  'Maria Gonzalez Lenguaje Ciencias Sociales Inglés',
  'Jose Rodriguez Ciencias Matemáticas Inglés Arte',
  'Ana Fernandez Historia Lenguaje Sociales Música',
  'Pedro Garcia Inglés Matemáticas Arte Educación Física',
  'Laura Ruiz Educación Física Música Sociales Matemáticas',
  'Carlos Sanchez Música Ciencias Inglés Historia',
  'Andres Jimenez Arte Lenguaje Historia Ciencias',
  'Isabel Martinez Computación Inglés Sociales Matemáticas'
];

// función para buscar los alumnos con las mismas asignaturas en común
function buscarAlumnosConMismasAsignaturas(asignaturas) {
  var alumnosEncontrados = [];
  for (var i = 0; i < alumnos.length; i++) {
    var alumno = alumnos[i];
    var tieneAsignaturasComunes = true;
    for (var j = 0; j < asignaturas.length; j++) {
      var asignatura = asignaturas[j];
      if (alumno.indexOf(asignatura) === -1) {
        tieneAsignaturasComunes = false;
        break;
      }
    }
    if (tieneAsignaturasComunes) {
      alumnosEncontrados.push(alumno);
    }
  }
  return alumnosEncontrados;
}

// buscar los alumnos con las mismas asignaturas en común
var asignaturas = ['Historia', 'Lenguaje'];
var alumnosEncontrados = buscarAlumnosConMismasAsignaturas(asignaturas);

// imprimir el resultado en la consola
console.log('Alumnos encontrados:', alumnosEncontrados);


// RESULTADO POR CONSOLA

// next@next-System:~/Documentos/Javascipt-apuntes-Bettateck/mastermind-js/bloque1$ node 06ifelif-else-expresiones-reg2.js
// Alumnos encontrados: [
//   'Juan Perez Matemáticas Lenguaje Historia',
//   'Ana Fernandez Historia Lenguaje Sociales Música',
//   'Andres Jimenez Arte Lenguaje Historia Ciencias'
// ]
// next@next-System:~/Documentos/Javascipt-apuntes-Bettateck/mastermind-js/bloque1$ En este ejemplo, hemos creado una función llamada buscarAlumnosConMismasAsignaturas que recibe un array de asignaturas como parámetro. La función itera sobre cada alumno en el array alumnos y comprueba si el alumno tiene todas las asignaturas de la lista en común. Si un alumno tiene todas las asignaturas de la lista en común, se agrega a un nuevo array llamado alumnosEncontrados.


// Para comprobar si un alumno tiene todas las asignaturas de la lista en común, la función itera sobre cada asignatura en la lista y comprueba si la asignatura está incluida en el string del alumno utilizando el método indexOf(). Si una asignatura no está incluida en el string del alumno, la variable tieneAsignaturasComunes se establece en false y se sale del ciclo utilizando la palabra clave break.

// Finalmente, la función devuelve el array alumnosEncontrados con los alumnos que tienen todas las asignaturas de la lista en común.