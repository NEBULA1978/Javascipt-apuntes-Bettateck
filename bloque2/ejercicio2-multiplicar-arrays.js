// En éste ejercicio se debe escribir una función que reciba dos parámetros.
// Por un lado, debe recibir un primer parámetro que debe ser un vector de números.El segundo parámetro ha de ser un número.

// La función debe multiplicar todos y cada uno de los números del array por el valor del segundo parámetro, haciendo que el array resultante sea un array como el original pero por cada número multiplicado.
// COn javascript un ejemplo de codigo


function multiplyArray(arr, num) {
  return arr.map(function (element) {
    return element * num;
  });
}

let array = [1, 2, 3, 4];
let result = multiplyArray(array, 2);
console.log(result); // [2, 4, 6, 8]


// En esta función se utiliza el método map para recorrer cada elemento del array original y multiplicarlo por el segundo parámetro(num).El resultado es un nuevo array con los números multiplicados.