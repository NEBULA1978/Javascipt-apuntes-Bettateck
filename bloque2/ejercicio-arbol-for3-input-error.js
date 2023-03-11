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
// Para pedir al usuario que introduzca el número de asteriscos por línea utilizando un input, puede utilizar la función "prompt()" de JavaScript.Aquí tiene un ejemplo de cómo podría modificar el código anterior para pedir al usuario que introduzca el número de asteriscos por línea antes de dibujar el árbol:

function dibujarArbol() {
  let altura = prompt("Ingresa la altura del arbol:");
  let asteriscosPorLinea = prompt("Ingresa el numero de asteriscos por linea:");
  for (let i = 1; i <= altura; i++) {
    let espacios = " ".repeat((altura - i) + (asteriscosPorLinea / 2));
    let asteriscos = "*".repeat(asteriscosPorLinea);
    console.log(espacios + asteriscos + espacios);
  }
}

dibujarArbol(); // se pedira el numero de asteriscos y la altura del arbol


// Ahora el código utiliza la función "prompt()" para pedir al usuario que introduzca el número de asteriscos por línea y la altura del árbol antes de dibujar el árbol.El valor devuelto por "prompt()" se almacena en las variables "altura" y "asteriscosPorLinea" y se utilizan para dibujar el árbol.

// Ten en cuenta que el valor devuelto por "prompt()" es una cadena, por lo que si quieres trabajar con el valor como un número entero, debes convertirlo a un entero antes de usarlo.Puedes hacer esto utilizando la función "parseInt()" o "Number()"



// El código utiliza dos bucles for anidados para dibujar las líneas del árbol.El primer bucle for itera a través de cada línea del árbol, mientras que el segundo bucle for dibuja los asteriscos en cada línea.El número de espacios y asteriscos en cada línea se calcula utilizando la altura del árbol y la posición actual en el bucle.

// Este código dibujará un árbol de Navidad de la altura dada, utilizando espacios y asteriscos para darle la forma del árbol.

// ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRR
// ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRR
// ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRR

// /home/nebula / Música / Javascipt - apuntes - Bettateck / mastermind - js / bloque2 / ejercicio - arbol - for3 - input.js: 31
// let altura = prompt("Ingresa la altura del arbol:");
//                ^

//   ReferenceError: prompt is not defined
//     at dibujarArbol(/home/nebula / Música / Javascipt - apuntes - Bettateck / mastermind - js / bloque2 / ejercicio - arbol - for3 - input.js: 31: 16)
//     at Object.< anonymous > (/home/nebula / Música / Javascipt - apuntes - Bettateck / mastermind - js / bloque2 / ejercicio - arbol - for3 - input.js: 40: 1)
//     at Module._compile(node: internal / modules / cjs / loader: 1218: 14)
//     at Module._extensions..js(node: internal / modules / cjs / loader: 1272: 10)
//     at Module.load(node: internal / modules / cjs / loader: 1081: 32)
//     at Module._load(node: internal / modules / cjs / loader: 922: 12)
//     at Function.executeUserEntryPoint[as runMain](node: internal/modules/run_main: 81: 12)
//     at node: internal / main / run_main_module: 23: 47

// Node.js v18.13.0