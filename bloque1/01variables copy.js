var cajaA = 3;
cajaA = 5;
var cajaB = 5;
var cajaC = cajaA + cajaB;

console.log(cajaA, cajaB, cajaC);

var x = 2;
var y = 3;
// Me da error cuando pongo:
// console.log(`El valor de x es: ${x}`)
// console.log(`El valor de y es: ${y}`)
// console.log("El valor de x es:x")
// console.log("El valor de y es:y")
// console.log(y)


// intercambiar los valores de x e y
// x: 2, y: 3
// resultado: x: 3, y: 2

// funcion de swap
// Creamos variable auxilar para intercambiar variables
// var z = y;
// y = x;
// x = z;

// deestructuring
// Intercambiamos variables sin la variable auxilir
[x, y] = [y, x]

console.log('Resultado ejercicio: x es', x, 'y de y es', y);
console.log(`Resultado ejercicio: El valor de x es ${x},El valor de y es ${y} `);