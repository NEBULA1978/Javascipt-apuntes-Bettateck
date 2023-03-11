// Ejercicio:
// Utilizando bucles for, se tiene que dibujar un árbol de navidad en pantalla.

// En una variable, se determinará la altura del árbol, por ejemplo, un árbol de altura 3 sería el siguiente:


//     *

//   ***

// *****


//   Se busca hacer un programa que, dada una altura, sea capaz de dibujar un árbol de navidad utilizando espacios y asteriscos.


//     Ejemplos:
// Árbol de altura 1:

// *


//   Árbols de altura 2:

//   *

// ***

// El error "ReferenceError: prompt is not defined" se produce porque la función "prompt()" solo está disponible en el navegador, no en Node.js.Node.js es un entorno de ejecución de JavaScript que se ejecuta en el servidor en lugar de en el navegador.

// Hay varias maneras de pedir al usuario que introduzca valores en un script de Node.js.Una de las formas más comunes es utilizar la librería "readline" de Node.js.Aquí te muestro un ejemplo de cómo modificar el código anterior para utilizar "readline" en lugar de "prompt":

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function dibujarArbol() {
  rl.question('Ingresa la altura del arbol:', (altura) => {
    rl.question('Ingresa el numero de asteriscos por linea:', (asteriscosPorLinea) => {
      for (let i = 1; i <= altura; i++) {
        let espacios = " ".repeat((altura - i) + (asteriscosPorLinea / 2));
        let asteriscos = "*".repeat(asteriscosPorLinea);
        console.log(espacios + asteriscos + espacios);
      }
      rl.close();
    });
  });
}

dibujarArbol();

// Ahora el código utiliza la librería "readline" para pedir al usuario que introduzca el número de asteriscos por línea y la altura del árbol antes de dibujar el árbol.El valor devuelto por "question" es una cadena, por lo que si quieres trabajar con el valor como un número entero, debes convertirlo a un entero antes de usarlo.Puedes hacer esto utilizando la función "parseInt()" o "Number()"
