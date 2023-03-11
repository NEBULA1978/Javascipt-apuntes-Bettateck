// assignacion
var a = 1;
var b = 2;

//suma
var suma = a + b;
// resta
var resta = a - b;
// multiplicacion
var mult = a * b;
// division
var divi = a / b;
// modulo o resto
var resto = a % b;
// exponenciacion
var expo = a ** b;
// Incrementamos de 1 en 1 a
// Incrementamos el valor de a 1
a = a + 1;
// Lo mismo que lin 19
// a++
// a--
// Solo funciona con las sumas y las restas
a = 1;
console.log(a);

// Incrementamos el valor de a de 2 en 2
a = a + 2;
a += 2;
a -= 2;
a *= 2;
a /= 2;
// El resto
a %= 2;
// Exponenciacion
a **= 2;


console.log(a);

// texto
var nombre = 'Martin';
var apellido = 'Cristobal';
var nomberCompleto = nombre + apellido;
console.log(nomberCompleto);//MartinCristobal

var nomberCompleto = nombre + ' ' + apellido;
console.log(nomberCompleto);//Martin Cristobal

// Al nombre le doy un espacio y luego pongo apellido
nombre += ' ';
nombre += apellido;
console.log(nombre);

// combinar operaciones con diferentes tipos
var numero = 2;
var texto = 'Hola';
// Convierte nº 2 a string
var sumaCombinada = texto + numero;
console.log(sumaCombinada);//Hola2

//Ejercicio: Programa que nos diga los buenos dias
// Resultado: 'Buenos dias NOMBRE'