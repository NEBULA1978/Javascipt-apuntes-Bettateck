// Este código utiliza una función llamada "createFunction" que crea y devuelve otra función anónima llamada "showName".La función "showName" tiene acceso a la variable "name" declarada en la función "createFunction", lo que se conoce como una "clausura".Cuando se llama a "myFunction", que es igual a la función "showName" devuelta, se imprime el valor de la variable "name" en la consola.En resumen, un closure es una función que tiene acceso a las variables de su entorno de creación incluso después de que la función se haya salido de ese entorno.

function createFunction() {
  var name = "Martin";
  function showName() {
    console.log(name);
  }
  return showName;
}

var myFunction = createFunction();
myFunction();//Martin









// Podemos crear fabricas de funciones
// Programacion funcional

function createSum(x) {
  return function (y) {
    return x + y;
  };
}

let sum4 = createSum(4);
let sum10 = createSum(10);
console.log(sum4(3), sum10(3))//7 13  // Primero suma 4 +3(7) y luego suma 10 +3(13)