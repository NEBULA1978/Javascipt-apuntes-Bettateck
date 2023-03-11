var array = ["aa", "bb", 3, [1, 2], { nombre: 'Nombre', apellido: 'Apellido' }];
var objeto = {
    nombre: 'Martin',
    apellido: 'Cristobal',
    edad: 26,
    // Atributo de objeto
    coches: ['Ferrari', 'Lamborghini'],
    direccion: {
        // Atributos de la direccion
        calle: 'texto de la calle',
        numero: 4
    }
}
// Accedemos al indice cero
var item0 = array[0];
// Accedemos al indice uno
var item1 = array[1];

// BUscamos el indice por su valor
var indice = 4;
// Accedemos al indice 4 del array
var item4 = array[indice];
var item4 = array[indice].nombre;

// Sacamos la variable nombre dentro de este objeto
var nombreObjeto = objeto.nombre;
// Sacamos la variable nombre dentro de este array
var textoCalle = objeto.coches[0];


var item50 = array[50];
console.log(item50);

var piso = objeto.piso[1];
console.log(piso);

var longitud = array.length
// Si secumple queestaelindice puedoentrar siempre -1 empieza por 0
var isValidPosition = 50 >= 0 && 50 < array.length