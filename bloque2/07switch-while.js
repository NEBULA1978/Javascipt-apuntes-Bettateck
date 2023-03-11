//  El prompt() es una función de javascript que se utiliza para pedir al usuario que ingrese un valor, pero esta función no está disponible en Node.js, sólo esta disponible en los navegadores web.

// Para pedir al usuario que ingrese un valor en Node.js, puedes utilizar la librería 'readline-sync'.


const readlineSync = require('readline-sync');
let status = 1;
while (status !== 0) {
    // Mostrar menú
    console.log("Selecciona una opción:");
    console.log("1. Opción A");
    console.log("2. Opción B");
    console.log("3. Opción C");
    console.log("0. Salir");
    status = parseInt(readlineSync.question("Ingresa tu opción: "));
    switch (status) {
        case 1:
            console.log("Opción A seleccionada");
            break;
        case 2:
            console.log("Opción B seleccionada");
            break;
        case 3:
            console.log("Opción C seleccionada");
            break;
        case 0:
            console.log("Saliendo del menú");
            break;
        default:
            console.log("Opción inválida, ingresa una opción válida");
            break;
    }
}

// Aquí se esta importando la librería y se utiliza la función question() para pedir al usuario que ingrese un valor.


// Para instalar 'readline-sync' en tu proyecto, debes abrir una terminal y navegar hasta la carpeta de tu proyecto, luego ejecutar el siguiente comando:

// npm install readline - sync