

/////////////////////////////////////
/////////////////////////////////////

var array = [10, 20, 30]; // 3
for (var i = 0; i < array.length; i += 1) {
    console.log(array[i]);//10 20 30
}


var estudiantes = [
    {
        nombre: 'Estudiante 1',
        nota: 5
    },
    {
        nombre: 'Estudiante 2',
        nota: 8
    },
    {
        nombre: 'Estudiante 3',
        nota: 1
    }
]
// For normal
for (var i = 0; i < estudiantes.length; i += 1) {
    console.log(estudiantes[i].nombre, estudiantes[i].nota);//10 20 30
}
// Resutado:
// Estudiante 1 5
// Estudiante 2 8
// Estudiante 3 1

for (var i = 0; i < estudiantes.length; i += 1) {
    var estudiante = estudiantes[i];
    console.log(estudiante.nombre, estudiante.nota);
}
// Resutado:
// Estudiante 1 5
// Estudiante 2 8
// Estudiante 3 1

// Iterar sobre vectores y objetos
for (var estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
}
// Resutado:
// Estudiante 1 5
// Estudiante 2 8
// Estudiante 3 1

var estudianteAuxiliar = {
    nombre: 'Estudiante 1',
    nota: 5
}
// Jugar con los nombres de los atributos,acceder al valor de los atributos dentro del objeto
// Iterar sobre objetos
for (var key in estudianteAuxiliar) {
    console.log(key, estudianteAuxiliar[key]);
    // Resultado
    //nombre Estudiante 1 
    // nota 5
}
