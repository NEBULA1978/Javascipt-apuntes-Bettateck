// Se debe realizar un programa que, dados dos números, imprima por pantalla si el primer número es múltiplo del segundo.

// Por ejemplo, con las siguientes variables:

// var primer = 20;

// var segundo = 2;



// Se debería imprimir:
// 20 es múltiplo de 2.



// Con las siguientes variables:

// var primer = 23;

// var segundo = 2;



// Se debería imprimir:
// 23 no es múltiplo de 2.



// SOLUCION
// Puedes usar el operador de módulo( % ) para determinar si un número es múltiplo de otro.El operador de módulo devuelve el resto de una división.Si el resto es cero, entonces el primer número es múltiplo del segundo.

// Aqui te dejo un ejemplo de cómo podría ser el programa en JavaScript:

var primer = 20;
var segundo = 2;

if (primer % segundo === 0) {
  console.log(primer + " es múltiplo de " + segundo + ".");
} else {
  console.log(primer + " no es múltiplo de " + segundo + ".");
}

// El código anterior comprueba si el primer número es múltiplo del segundo número.Si es así, imprime que el primer número es múltiplo del segundo número.Si no, imprime que el primer número no es múltiplo del segundo número.