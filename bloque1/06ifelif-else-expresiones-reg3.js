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
// array de alumnos para incluir las notas en cada asignatura:
var alumnos = [
  {
    nombre: 'Juan Perez',
    asignaturas: {
      matematicas: 7,
      lenguaje: 6,
      historia: 5,
      ciencias: 4,
      sociales: 8
    }
  },
  {
    nombre: 'Maria Gonzalez',
    asignaturas: {
      matematicas: 6,
      lenguaje: 6,
      historia: 8,
      ciencias: 5,
      sociales: 9
    }
  },
  {
    nombre: 'Jose Rodriguez',
    asignaturas: {
      matematicas: 5,
      lenguaje: 6,
      historia: 7,
      ciencias: 8,
      sociales: 6
    }
  },
  {
    nombre: 'Ana Fernandez',
    asignaturas: {
      matematicas: 8,
      lenguaje: 9,
      historia: 6,
      ciencias: 7,
      sociales: 8
    }
  },
  {
    nombre: 'Pedro Garcia',
    asignaturas: {
      matematicas: 9,
      lenguaje: 6,
      historia: 7,
      ciencias: 6,
      sociales: 5
    }
  }
];

// función para buscar los alumnos con las mismas asignaturas y la misma nota
function buscarAlumnosConMismasAsignaturasYNotas(asignaturas, nota) {
  var alumnosEncontrados = [];

  for (var i = 0; i < alumnos.length; i++) {
    var tieneAsignaturasComunes = true;

    for (var j = 0; j < asignaturas.length; j++) {
      var asignatura = asignaturas[j];
      var notaAlumno = alumnos[i].asignaturas[asignatura];

      if (notaAlumno == nota) { // aquí se corrige la comparación
        tieneAsignaturasComunes = false;
        break;
      }
    }

    if (tieneAsignaturasComunes) {
      alumnosEncontrados.push(alumnos[i].nombre);
    }
  }

  return alumnosEncontrados;
}

// buscar los alumnos con las mismas asignaturas y la misma nota
var asignaturas = ['Historia', 'Lenguaje'];
var nota = 6;
var alumnosEncontrados = buscarAlumnosConMismasAsignaturasYNotas(asignaturas, nota);

// imprimir el resultado en la consola
console.log('Alumnos encontrados:', alumnosEncontrados);

// imprimir las asignaturas encontradas en la consola
console.log('Asignaturas encontradas:', asignaturas);

// ejemplo de acceso a las notas de un alumno
// var alumno = alumnos[0];
// var notaLenguaje = alumno.asignaturas.lenguaje;
// console.log('La nota de Juan Perez en Lenguaje es', notaLenguaje);

// RESULTADO POR CONSOLA

// next@next-System:~/Documentos/Javascipt-apuntes-Bettateck/mastermind-js/bloque1$ node 06ifelif-else-expresiones-reg3.js
// Alumnos encontrados: [
//   'Juan Perez',
//   'Maria Gonzalez',
//   'Jose Rodriguez',
//   'Ana Fernandez',
//   'Pedro Garcia'
// ]
// Asignaturas encontradas: [ 'Historia', 'Lenguaje' ]
// next@next-System:~/Documentos/Javascipt-apuntes-Bettateck/mastermind-js/bloque1$ 
/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// En este ejemplo, cada elemento del array alumnos es un objeto que tiene una propiedad nombre y otra propiedad asignaturas, que es un objeto que contiene las notas del alumno en cada asignatura. Por ejemplo, el objeto del primer alumno se ve así:

// {
//   nombre: 'Juan Perez',
//   asignaturas: {
//     matematicas: 7,
//     lenguaje: 6,
//     historia: 5,
//     ciencias: 4,
//     sociales: 8
//   }
// }

// Para acceder a las notas de un alumno específico, puedes utilizar la sintaxis de punto o la sintaxis de corchetes para acceder a la propiedad asignaturas y luego a la propiedad de la asignatura específica que deseas consultar. En este ejemplo, se ha accedido a la nota del primer alumno en la asignatura de Lenguaje utilizando la sintaxis de punto:

// var alumno = alumnos[0];
// var notaLenguaje = alumno.asignaturas.lenguaje;
// console.log('La nota de Juan Perez en Lenguaje es', notaLenguaje);
