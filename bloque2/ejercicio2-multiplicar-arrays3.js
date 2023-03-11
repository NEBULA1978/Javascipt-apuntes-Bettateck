// En éste ejercicio se debe escribir una función que reciba dos parámetros.
// Por un lado, debe recibir un primer parámetro que debe ser un vector de números.El segundo parámetro ha de ser un número.

// La función debe multiplicar todos y cada uno de los números del array por el valor del segundo parámetro, haciendo que el array resultante sea un array como el original pero por cada número multiplicado.
// COn javascript un ejemplo de codigo
//  Añadir una funcion mas para hacer lo mismo

function multiplyArray(arr, num) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * num);
  }
  return result;
}

let array = [1, 2, 3, 4];
let result = multiplyArray(array, 2);
console.log(result); // [2, 4, 6, 8]

// En esta función se crea un array vacío llamado result y se utiliza un ciclo for para recorrer cada elemento del array original.Cada elemento se multiplica por el segundo parámetro(num) y se agrega al array result mediante el método push.Finalmente, se retorna el array result con los números multiplicados.