
// The error message you're seeing is telling you that the await keyword can only be used in an async function.

// You are trying to use await in the global scope of your script, not inside an async function.

// A possible solution to this problem would be to wrap the entire script in an async function and then call it.Here's an example:


const readline = require('readline');

const main = async () => {
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
}
main();

// The code wraps the entire script in an async function main and then call it.This way, the await keyword can be used inside the function.

// It's important to close the readline interface after you're done using it, as shown in the last line of the script.


// El mensaje de error que estás viendo indica que la palabra clave await solo se puede usar en una función async.

// Estás tratando de usar await en el alcance global de tu script, no dentro de una función async.

// Una solución posible a este problema sería envolver todo el script en una función async y luego llamarlo.Aquí te doy un ejemplo:

// const readline = require('readline');

// const main = async () => {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     let numero;

//     const ask = async () => {
//         return new Promise((resolve, reject) => {
//             rl.question("Ingrese un número entero positivo: ", (answer) => {
//                 resolve(answer);
//             });
//         });
//     };

//     do {
//         const answer = await ask();
//         numero = parseInt(answer);
//         if (isNaN(numero) || numero <= 0) {
//             console.log("Por favor ingrese un número entero positivo válido.");
//         }
//     } while (isNaN(numero) || numero <= 0);

//     rl.close();
//     console.log(`El número ingresado es: ${numero}`);
// }
// main();