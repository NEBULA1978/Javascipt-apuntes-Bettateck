// El scope es el contexto donde una variable es visible
// existen 2 scopes principales: global y local

// Para solucionar el error, debes cambiar el uso de "var" a "let" en las declaraciones de variables dentro de los bloques if y for.También debes asegurarte de que no estás intentando acceder a una variable dentro de un ámbito donde no está definida, como intentar imprimir "a" fuera del bloque if donde se define.


let condicion1 = true;
if (condicion1) {
    let a = 1;
    console.log(a);
}
// console.log(a); // This would cause an error because variable a is only defined inside the if block

let condicion2 = true;
if (condicion2) {
    let b = 1;
    console.log(b);
}
console.log(b); // This is fine because variable b is defined in the global scope

// Además, es recomendable usar "let" en lugar de "var" para evitar problemas de ámbito y asegurar una mayor claridad en el código.

// EEROR CODIGO ANTERIOR
// 1
// 1
//     / home / nebula / Música / Javascipt - apuntes - Bettateck / mastermind - js / bloque2 / 10scope2.js: 19
// console.log(b); // This is fine because variable b is defined in the global scope
//             ^

//     ReferenceError: b is not defined
//     at Object.< anonymous > (/home/nebula / Música / Javascipt - apuntes - Bettateck / mastermind - js / bloque2 / 10scope2.js: 19: 13)
//     at Module._compile(node: internal / modules / cjs / loader: 1218: 14)
//     at Module._extensions..js(node: internal / modules / cjs / loader: 1272: 10)
//     at Module.load(node: internal / modules / cjs / loader: 1081: 32)
//     at Module._load(node: internal / modules / cjs / loader: 922: 12)
//     at Function.executeUserEntryPoint[as runMain](node: internal/modules/run_main: 81: 12)
//     at node: internal / main / run_main_module: 23: 47

// Node.js v18.13.0