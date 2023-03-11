// Claro, aquí tienes un ejemplo de cómo pasar una función como parámetro en JavaScript:

function decirHola() {
    console.log("¡Hola!");
}

function ejecutarFuncion(fn) {
    fn();
}

ejecutarFuncion(decirHola); // Imprime "¡Hola!" en la consola


// En este ejemplo, la función ejecutarFuncion recibe un parámetro fn que es una función.Dentro de la función ejecutarFuncion, llamamos a la función fn usando fn().Entonces, cuando llamamos a ejecutarFuncion(decirHola), se ejecutará la función decirHola y se imprimirá "¡Hola!" en la consola.

// En términos de manejo de eventos, aquí tienes un ejemplo de cómo usar una función como callback cuando se hace clic en un botón:

function manejarClick() {
    console.log("¡Se hizo clic en el botón!");
}

var boton = document.getElementById("miBoton");
boton.addEventListener("click", manejarClick);

// Aquí tenemos una función manejarClick que imprime un mensaje en la consola cuando se llama.Cuando se hace clic en el botón con el id "miBoton", se ejecutará la función manejarClick.

