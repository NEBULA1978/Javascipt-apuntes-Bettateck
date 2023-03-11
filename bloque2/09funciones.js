// Formas de agrupar lógica
function proceso1() {
    console.log('Hago una cosa');
    console.log('Luego hago otra');
}
// Las podemos llamar
proceso1();
// Repetidamente
proceso1();




// Les podemos enviar datos
// Los parametros se utilizan para poder aprovechar una funcion para diferentes nombres
function generateFullName(nombre, apellido) {
    console.log(nombre + " " + apellido);
    if (nombre === 'Ramon') {
        console.log("Hola " + nombre)
    } else {
        console.log("Hola " + nombre + " " + apellido);
    }
}

generateFullName('Ramon', 'Pascual');
generateFullName('Martin', 'Hernandez');





// Podemos hacer que nos devuelvan datos
function calculateMidpoint(num1, num2) {
    return (num1 + num2) / 2;
}

var firstNumber = 10;
var secondNumber = 4;
var midPoint = calculateMidpoint(firstNumber, secondNumber);
console.log('La media de ' + firstNumber + ' y ' + secondNumber + ' es ' + midPoint);

// Podemos hacer que nos devuelvan datos
// Podemos tener varios return pero solo se va a ejecutar uno
function calculateMidpoint2(num3, num4) {
    if (num1 === 0) {
        return 9
    } else {
        return (num3 + num4) / 2;

    }
}

var firstNumber2 = 0;
var secondNumber2 = 4;
var midPoint2 = calculateMidpoint(firstNumber2, secondNumber2);
console.log('La media de ' + firstNumber2 + ' y ' + secondNumber2 + ' es ' + midPoint2);







// Las funciones son un tipo de dato, por lo que podemos utilizarlo como variable
// Wardamos la funcion en una variable
var logicaSaludar = function (nombre) { console.log('Hola, mi nombre es ' + nombre) };
var logicaSaludarMaleducado = function (nombre) { console.log('Hola, no me gustas pero mi nombre es ' + nombre) };

// En logicaSaludar tenemos la referencia a la funcion
// Podemos hacer algo tan loco como pasar una funciona a otra:
function saludarSuperEducadamente(funcionPasadaPorParametro, nombre) {
    console.log('Disculpe, perdone que le moleste, pero ');
    // Ejecutamos la funcion que hemos recibido
    funcionPasadaPorParametro(nombre);
    console.log('Espero pasar una muy buena velada con usted.');
}

// Si lo ejecutamos todo:
saludarSuperEducadamente(logicaSaludarMaleducado, 'Martin');






// Esto es lo que da pie a poder hacer programacion funcional en JS
// Las funciones son objetos y por lo tanto se pueden comportar como tal

// Se usa mucho en gestion de eventos:

function processClickEvent(event) {
    // Hago algo cuando recibo el click
}

//Quiero que cuando se haga click en el item, se ejecute mi funcion
var itemEnPantalla; // Algun item de la pantalla
// La libreria de frontend me proporciona una forma de ejecutar
// mi funcion cuando se haga click
// Lo que estoy haciendo es pasarle la funcion a ejecutar como parametro
itemEnPantalla.onClick(processClickEvent)