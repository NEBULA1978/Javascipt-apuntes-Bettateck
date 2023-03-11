var booleanoCierto = true;
var booleanoFalso = false;

var a = 1;
var b = 10;

// Comprobamos que a es mas grande que b false
var aMayorQueb = a > b;//false

var a = '10';
var b = 10;

var aMayorQueb = a > b;//true
// > < >= <= == === 
/*
!=  desigual
!== triple desigualdad
*/

// Mira mismo valor y tipo de variable
console.log(a === b);//false
// Convierte el 10 string a numero y compara
console.log(a == b);//true
console.log(a != b);//false
console.log(a !== b);//true


var rangoInicio = 0;
var rangoFinal = 100;
var numeroAComparar = 101;

var mayorQueInicio = numeroAComparar > rangoInicio;
var menorQueFinal = numeroAComparar < rangoFinal;
// Combinamos para ver si esta en el rango silas dos true es true sino no
var dentroDeRango = mayorQueInicio && menorQueFinal;
console.log(mayorQueInicio, menorQueFinal);//true false

console.log(dentroDeRango);//false
/* AND (&&) Tabla de verdad
1 && 1 : 1
1 && 0 : 0
0 && 1 : 0
0 && 0 : 0
*/

/* OR (||) Tabla de verdad
1 || 1 : 1
1 || 0 : 1
0 || 1 : 1
0 || 0 : 0
*/

/* NOT (!) Tabla de verdad
1 : 0
0 : 1
*/

var haHechoTrabajo = true;
var notaExamenFinal = 10;
var tieneFaltaTécnica = true;
//true              : true                si tiene true no aprueba negamos con !
var aprobadoElCurso = (haHechoTrabajo || notaExamenFinal >= 5) && !tieneFaltaTécnica;
console.log(aprobadoElCurso);//false

// Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// (a, b), (c, d) comprobar que las lineas se solapan o no se solapan
// El primer rango y el final esmas pequeño que el 1º del segundo rango se solapan

var a = 5;
var b = 20;
var c = 10;
var d = 25;
//------a--------c------b------d---------

var haySolape = true;

// SOLUCUION1
if ((c >= a && c <= b) || (d >= a && d <= b) || (a >= c && a <= d) || (b >= c && b <= d)) {
  haySolape = true;
} else {
  haySolape = false;
}
console.log(haySolape);

// La lógica es similar a la propuesta en la primera respuesta.Se comprueba si el inicio o el fin de una línea está dentro de la otra línea, en caso afirmativo se establece la variable haySolape como true, sino se establece como false.

// En este caso especifico se cumplen las condiciones para que haya solape ya que el rango(a, b) = (5, 20) se solapa con el rango(c, d) = (10, 25) ya que el rango(c, d) comienza en un punto dentro del rango(a, b)




// SOLUCUION2

// de cómo se podría implementar este ejercicio sería el siguiente:

// function checkOverlap(a, b, c, d) {
//   if ((c >= a && c <= b) || (d >= a && d <= b) || (a >= c && a <= d) || (b >= c && b <= d)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkOverlap(5, 20, 10, 25)); // Output: true

// La función checkOverlap() recibe cuatro argumentos, que representan los extremos de las dos rectas.Utiliza cuatro comparaciones para determinar si existe solape entre las rectas.Si al menos una de estas comparaciones es verdadera, la función devuelve true, lo que indica que hay solape.Si ninguna de las comparaciones es verdadera, la función devuelve false, lo que indica que no hay solape.