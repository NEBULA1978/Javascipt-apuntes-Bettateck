// Escribe una función(utilizando SWITCH CASE) que diga cuantos días tiene un mes concreto.

// Por ejemplo, con la siguiente entrada:

// var month = 'Enero'

// el programa debe escribir:

// El mes de Enero tiene 31 días.



// La cantidad de días de cada mes es la siguiente:

// Mes	Días
// Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre	31
// Febrero	28 / 29
// Abril, Junio, Setiembre, Noviembte	30


function daysInMonth(month) {
  switch (month) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
      console.log(`El mes de ${month} tiene 31 días.`);
      break;
    case "Febrero":
      console.log(`El mes de ${month} tiene 28/29 días.`);
      break;
    case "Abril":
    case "Junio":
    case "Setiembre":
    case "Noviembre":
      console.log(`El mes de ${month} tiene 30 días.`);
      break;
    default:
      console.log("Mes no válido.");
  }
}

var month = "Enero";
daysInMonth(month);

// Puedes cambiar el valor de la variable "month" para verificar el número de días de otros meses.