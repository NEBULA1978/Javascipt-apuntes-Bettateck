// control de flujo

// // condicionales
// var condicion = false;
// var condicion2 = true;
// if (condicion && condicion2) {
//     // hago esto si se cumple condicion
//     console.log('Estoy en el if');
// } else {
//     // hago esto otro si no se cumple condicion
//     console.log('Estoy en el else');
// }
// // continuo ejecutando


// control de flujo

// condicionales
var condicion = false;
var condicion2 = true;

// expresión regular para validar un correo electrónico
var regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (condicion && condicion2) {
    // hago esto si se cumple condicion
    console.log('Estoy en el if');
    
    // validar un correo electrónico con la expresión regular
    var correo = 'ejemplo@correo.com';
    if (regexCorreo.test(correo)) {
        console.log('El correo electrónico es válido');
    } else {
        console.log('El correo electrónico no es válido');
    }
} else {
    // hago esto otro si no se cumple condicion
    console.log('Estoy en el else');
}
// continuo ejecutando



// Se pueden encadenar
if (condicion1) {
    // Entro aqui si cumplo la primera condicion
} else if (condicion2) {
    // Entro aqui si cumplo la segunda
} else if (condicion3) {
    // Entro aqui si cumplo la tercera
} else {
    // Entro aqui si no cumplo ninguna
}


// En este ejemplo, se ha agregado una expresión regular para validar un correo electrónico dentro de la estructura condicional del código. Se utiliza el método test() para verificar si el correo electrónico cumple con el patrón de la expresión regular, y se imprime un mensaje en la consola dependiendo del resultado de la validación.

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


// array de nombres de archivo
var nombresArchivos = [
  'archivo1.txt',
  'archivo2.csv',
  'archivo3.xlsx',
  'archivo4.jpg',
  'archivo5.pdf'
];

// expresión regular para buscar archivos con extensión .txt o .csv
var regexArchivos = /\.(txt|csv)$/;

// utilizar el método find para buscar archivos que cumplan con la expresión regular
var archivoEncontrado = nombresArchivos.find(function(nombreArchivo) {
  return regexArchivos.test(nombreArchivo);
});

// imprimir el resultado de la búsqueda en la consola
if (archivoEncontrado) {
  console.log('Se ha encontrado un archivo que cumple con la expresión regular:', archivoEncontrado);
} else {
  console.log('No se ha encontrado ningún archivo que cumpla con la expresión regular');
}
// En este ejemplo, se ha utilizado el método find() para buscar en el array de nombres de archivo aquellos que cumplan con la expresión regular especificada en la variable regexArchivos. En este caso, la expresión regular busca archivos con extensión .txt o .csv. El método test() se utiliza para verificar si cada nombre de archivo cumple con el patrón de la expresión regular. Si se encuentra algún archivo que cumpla con la expresión regular, se imprime un mensaje en la consola con el nombre del archivo encontrado. Si no se encuentra ningún archivo que cumpla con la expresión regular, se imprime un mensaje indicando que no se ha encontrado ningún archivo.

// Me falta añadir los archivos


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Un ejemplo de cómo buscar palabras dentro de archivos utilizando expresiones regulares y el método match() en JavaScript:

// texto de ejemplo
var texto = 'Este es un texto de ejemplo que contiene varias palabras interesantes. Algunas de las palabras interesantes que se encuentran en este texto son: ejemplo, palabras, interesantes.';

// expresión regular para buscar la palabra "interesantes"
var regexPalabra = /interesantes/g;

// buscar la palabra en el texto utilizando el método match()
var palabrasEncontradas = texto.match(regexPalabra);

// imprimir el resultado de la búsqueda en la consola
if (palabrasEncontradas) {
  console.log('Se han encontrado las siguientes palabras:', palabrasEncontradas);
} else {
  console.log('No se ha encontrado ninguna palabra');
}


// En este ejemplo, se ha utilizado una expresión regular para buscar la palabra "interesantes" dentro del texto de ejemplo. La expresión regular utiliza la flag g para buscar todas las ocurrencias de la palabra en el texto. Se utiliza el método match() para buscar la palabra en el texto y almacenar todas las ocurrencias encontradas en la variable palabrasEncontradas. Si se encuentra alguna ocurrencia de la palabra en el texto, se imprime un mensaje en la consola con las palabras encontradas. Si no se encuentra ninguna ocurrencia de la palabra en el texto, se imprime un mensaje indicando que no se ha encontrado ninguna palabra.


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Un ejemplo de cómo sustituir el carácter ";" por espacios utilizando la función replace() en JavaScript:

// cadena de texto de ejemplo
var texto = 'Esto;es;un;texto;con;puntos;y;coma;';

// utilizar la función replace para sustituir el carácter ";" por un espacio
var textoModificado = texto.replace(/;/g, ' ');

// imprimir el resultado en la consola
console.log('Texto original:', texto);
console.log('Texto modificado:', textoModificado);

// En este ejemplo, se utiliza la función replace() para buscar y sustituir el carácter ";" por un espacio en la cadena de texto de ejemplo. Se utiliza una expresión regular /;/g para buscar todas las ocurrencias del carácter ";" en la cadena de texto. La función replace() devuelve una nueva cadena de texto con las ocurrencias sustituidas. Finalmente, se imprime el resultado en la consola con la cadena de texto original y la cadena de texto modificada.

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//  Un ejemplo de cómo utilizar el operador ternario en lugar de la estructura condicional if...else 


// control de flujo

// condicionales
var condicion = false;
var condicion2 = true;

// utilizar el operador ternario para imprimir un mensaje en la consola
var mensaje = (condicion && condicion2) ? 'Estoy en el if' : 'Estoy en el else';
console.log(mensaje);

// continuar ejecutando
console.log('Continúo ejecutando...');


// En este ejemplo, se ha utilizado el operador ternario para imprimir un mensaje en la consola en lugar de la estructura condicional if...else. El operador ternario evalúa la condición (condicion && condicion2) y devuelve el valor correspondiente al resultado de la evaluación de la condición. Si la condición es verdadera, devuelve el mensaje 'Estoy en el if', y si la condición es falsa, devuelve el mensaje 'Estoy en el else'. El mensaje resultante se almacena en la variable mensaje y se imprime en la consola. Luego, se continúa ejecutando el código con la instrucción console.log('Continúo ejecutando...');.


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Se pueden anidar
if (condicion1) {
    if (condicion2) {
        // Hago algo
    }
    // Luego hago otra cosa
} else {
    // Hago otra cosa distinta
}
