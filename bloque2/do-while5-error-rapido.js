
// Bucle do while
// while (contador < N) {
//   if (contador === 0) {
//     //primera iteracion

//   } else {
//     //siguientes iteraciones
//   }
// }


// do {
//   // Primera iteracion siempre se ehjecuta
// } while (condicion)

// El mensaje de error que estás viendo indica que la función prompt no está definida.La función prompt se utiliza para mostrar un cuadro de diálogo en el navegador para que el usuario ingrese algún texto.

// Esta función no está definida en Node.js, solo está disponible en el navegador.Para obtener entrada del usuario en un script de Node.js, puedes usar el módulo readline en su lugar.Aquí te muestro un ejemplo:

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero;

do {
  rl.question("Ingrese un número entero positivo: ", (answer) => {
    numero = parseInt(answer);
    if (isNaN(numero) || numero <= 0) {
      console.log("Por favor ingrese un número entero positivo válido.");
    }
  });
} while (isNaN(numero) || numero <= 0);

rl.close();
console.log(`El número ingresado es: ${numero}`);

// Este código crea una interfaz de readline usando readline.createInterface y luego utiliza el método question para preguntar al usuario por la entrada.La entrada proporcionada por el usuario se pasa como un argumento a la función de devolución de llamada, donde luego puedes analizarla como un número y validarla.

// Es importante cerrar la interfaz de readline una vez que hayas terminado de usarla, como se muestra en la última línea del script.

