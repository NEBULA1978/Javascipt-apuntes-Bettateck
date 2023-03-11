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

// un ejemplo de cómo podrías introducir los nombres de los alumnos y las asignaturas en un array para realizar búsquedas con expresiones regulares en JavaScript:

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

// expresión regular para buscar asignaturas que contengan la palabra "Matemáticas"
var regexAsignaturas = /\bMatemáticas\b/g;

// buscar asignaturas que contengan la palabra "Matemáticas" utilizando el método filter()
var asignaturasEncontradas = alumnos.filter(function(alumno) {
  return alumno.match(regexAsignaturas);
});

// imprimir el resultado en la consola
console.log('Asignaturas encontradas:', asignaturasEncontradas);


// En este ejemplo, se ha creado un array llamado alumnos que contiene los nombres de los alumnos y las asignaturas separados por espacios. Se ha utilizado una expresión regular \bMatemáticas\b para buscar asignaturas que contengan la palabra "Matemáticas" y se ha utilizado el método filter() para buscar en el array alumnos las asignaturas que coinciden con la expresión regular.

// El método filter() recorre cada elemento del array y devuelve un nuevo array con los elementos que cumplen la condición especificada en la función que se pasa como argumento. En este caso, la función comprueba si el elemento del array contiene la palabra "Matemáticas" utilizando el método match() con la expresión regular regexAsignaturas. Si el elemento contiene la palabra "Matemáticas", se devuelve true y se agrega al nuevo array resultante.

// Finalmente, se imprime el resultado en la consola con las asignaturas encontradas. Puedes modificar la expresión regular y la función filter() para buscar dif


// RESULTADO POR CONSOLA

// next@next-System:~/Documentos/Javascipt-apuntes-Bettateck/mastermind-js/bloque1$ node 06ifelif-else.js
// Asignaturas encontradas: [
//   'Juan Perez Matemáticas Lenguaje Historia',
//   'Jose Rodriguez Ciencias Matemáticas Inglés Arte',
//   'Pedro Garcia Inglés Matemáticas Arte Educación Física',
//   'Laura Ruiz Educación Física Música Sociales Matemáticas',
//   'Isabel Martinez Computación Inglés Sociales Matemáticas'
// ]
// next@next-System:~/Documentos/Javascipt-apuntes-Bettateck/mastermind-js/bloque1$ 