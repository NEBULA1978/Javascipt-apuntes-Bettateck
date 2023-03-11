
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

// un ejemplo de un programa que utiliza un bucle do -while para pedir al usuario que ingrese un número entero positivo, hasta que el usuario ingrese un número válido:


let numero;

do {
  numero = parseInt(prompt("Ingrese un número entero positivo:"));
} while (isNaN(numero) || numero <= 0);

console.log(`El número ingresado es: ${numero}`);



// En este ejemplo se utiliza la función parseInt() para convertir la entrada del usuario en un número entero, y la función isNaN() para verificar si la entrada es un número válido.El bucle seguirá ejecutándose mientras la entrada del usuario no sea un número entero positivo.Una vez que el usuario ingresa un número válido, se imprime en la consola el número ingresado.

// Este ejemplo es solo una idea, pero se puede usar en muchos casos donde se necesite una validación previa antes de continuar con el flujo del programa.