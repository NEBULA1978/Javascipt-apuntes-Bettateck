
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

// Claro, aquí te dejo un ejemplo de un bucle do -while en JavaScript donde la condición no se cumple:


let contador = 10;
const N = 5;

do {
  console.log(`Iteración ${contador}`);
  contador++;
} while (contador < N);


// En este ejemplo, el valor inicial del contador es 10, y la condición es que el contador sea menor a 5. Por lo que el bucle nunca se ejecutara ya que nunca se cumplirá la condición.

// Es importante notar que el cuerpo del bucle se ejecutará una sola vez antes de comprobar la condición, es por ello que se puede ver en la consola "Iteración 10" una vez.