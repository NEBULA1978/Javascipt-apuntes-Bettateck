// Claro, aquí te muestro un ejemplo de cómo crear un menú en javascript utilizando un while loop y un switch statement, que imprime en la consola las opciones seleccionadas por el usuario:

let status = 1;
while (status !== 0) {
    // Mostrar menú
    console.log("Selecciona una opción:");
    console.log("1. Opción A");
    console.log("2. Opción B");
    console.log("3. Opción C");
    console.log("0. Salir");
    status = parseInt(prompt("Ingresa tu opción"));
    switch (status) {
        case 1:
            console.log("Opción A seleccionada");
            break;
        case 2:
            console.log("Opción B seleccionada");
            break;
        case 3:
            console.log("Opción C seleccionada");
            break;
        case 0:
            console.log("Saliendo del menú");
            break;
        default:
            console.log("Opción inválida, ingresa una opción válida");
            break;
    }
}


// Ten en cuenta que el prompt es una función que no esta disponible en nodejs, si estas trabajando con nodejs deberías de usar una librería como readline - sync para poder usarlo.


// ERROR
// nebula @sytem: ~/Música/Javascipt - apuntes - Bettateck / mastermind - js / bloque2$ node '07switch copy 2.js'
// Selecciona una opción:
// 1. Opción A
// 2. Opción B
// 3. Opción C
// 0. Salir
//     / home / nebula / Música / Javascipt - apuntes - Bettateck / mastermind - js / bloque2 / 07switch copy 2.js: 11
// status = parseInt(prompt("Ingresa tu opción"));
//     ^

//     ReferenceError: prompt is not defined
//     at Object.< anonymous > (/home/nebula / Música / Javascipt - apuntes - Bettateck / mastermind - js / bloque2 / 07switch copy 2.js: 11: 5)
//     at Module._compile(node: internal / modules / cjs / loader: 1218: 14)
//     at Module._extensions..js(node: internal / modules / cjs / loader: 1272: 10)
//     at Module.load(node: internal / modules / cjs / loader: 1081: 32)
//     at Module._load(node: internal / modules / cjs / loader: 922: 12)
//     at Function.executeUserEntryPoint[as runMain](node: internal/modules/run_main: 81: 12)
//     at node: internal / main / run_main_module: 23: 47

// Node.js v18.13.0
// nebula @sytem: ~/Música/Javascipt - apuntes - Bettateck / mastermind - js / bloque2$ 