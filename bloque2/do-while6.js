
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

// You're correct that the code I provided will exit the script quickly without waiting for the user to provide input, and the reason is that the question method is asynchronous, it returns immediately, and doesn't wait for the user input, so the script continues to execute.

// A possible solution to this problem is to use the async / await syntax to make the script wait for the user input before continuing.Here's an example:


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero;

const ask = async () => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese un número entero positivo: ", (answer) => {
      resolve(answer);
    });
  });
};

do {
  const answer = await ask();
  numero = parseInt(answer);
  if (isNaN(numero) || numero <= 0) {
    console.log("Por favor ingrese un número entero positivo válido.");
  }
} while (isNaN(numero) || numero <= 0);

rl.close();
console.log(`El número ingresado es: ${numero}`);


// This code wraps the question method in an async function, ask, that returns a promise that resolves when the user provides input.By awaiting the promise, the script will wait for the user input before continuing.

//   It's also important to close the readline interface after you're done using it, as shown in the last line of the script.