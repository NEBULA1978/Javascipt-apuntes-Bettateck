// En javascript no hay distincion entre numeros y decimales son numeros
// Qué son los tipos
var suma = 2 + '2'; //'22'

// Los tipos de javascript:
var numero = 2;
var string = 'Soy un texto';
var booleano = true;

// Agupamos diferentes tipos dee valores
// Arrays viene definidos por indices empiezan en cero
var array = ["aa", "bb", 3, [1, 2]];
// Acedemos al elemento con el nombre del objeto
var objeto = {
    nombre: 'Martin',
    apellido: 'Cristobal',
    edad: 26
}


var nombreFuncion = function () { }
// Hablaremos de las funciones mas adelante
// El tipado en javascript es dinamico:
//  dependiendo del valor de la variable mas abajo toma como valor
// En c o c++ si definimos es un entero no podemos reeclarar otro valor
// null y undefined
// Si accedemos a indices de un array que no exxisten o a propiedades de un objeto que no existen:
// null o undefined

// null NO tengo definido un valor
// Es un tipo de objeto
var valorNulo = null;
var valorUndefined;//undefined
console.log(typeof valorNulo == typeof valorUndefined);//true
console.log(typeof valorNulo === typeof valorUndefined);//false
console.log(typeof valorNulo, typeof valorUndefined);//object undefined

valorUndefined = 5;
// los tipos son dinamicos

// Vemos el tipo de variable que es
// typeof
// La variable booleano es un string?
console.log(typeof booleano == 'string')//false

booleano = 'Hello'
console.log(typeof booleano)//string




// El primer bloque de código crea un arreglo vacío llamado "vector" y luego utiliza el método push() para agregar los valores 3 y 4 al arreglo.El método pop() luego se utiliza para eliminar el último elemento(en este caso 4) del arreglo, por lo que el arreglo ahora solo contiene el valor 3. Cuando se llama a la función console.log() y se le pasa la variable "vector", se mostrará en consola el arreglo que contiene el valor 3.

var vector = [];
vector.push(3);
vector.push(4);
vector.pop();

console.log(vector);

// El segundo bloque de código crea un objeto llamado "objetoParaProbar" con una propiedad "nombre" y un valor "Martin".Luego intenta agregar una propiedad llamada "apellido" con el valor "Cristobal" pero esta utilizando una variable que no esta definida, por lo que generara un error ReferenceError.

var objetoParaProbar = { nombre: 'Martin' };
objetoParaProbar[apellido] = 'Cristobal';









