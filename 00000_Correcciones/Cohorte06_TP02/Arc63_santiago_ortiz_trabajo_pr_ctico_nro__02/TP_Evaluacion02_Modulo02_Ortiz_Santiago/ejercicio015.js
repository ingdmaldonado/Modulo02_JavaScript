/* Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de 
la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones. - 
No está establecido la cantidad de trabajos finales que se evaluarán - - - 
Este será el cuadro con el que se analizará y asignará la clasificación de los mismos. 
o Si la nota >= 0 y <= 4 serán trabajos desaprobados 
o Si la nota > 4 y <= 7 serán trabajos aprobados 
o Si la nota > 7 y <10 serán trabajos muy buenos 
o Si la nota = 10 serán trabajos excelentes 
Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor 
a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se 
equivoca. 
Siempre preguntar si desea continuar cargando notas.  */

let ingresarNotas = "si";
let errores = 0;

do {
    // Consulta nota
let notaAlumno = parseFloat(prompt("Ingrese las notas que desea cargar."));

if (notaAlumno >= 0 && notaAlumno <= 4) {

    console.log ("El trabajo esta desaprobado.");
    
} else if (notaAlumno > 4 && notaAlumno <= 7) {

    console.log ("El trabajo esta aprobado");

} else if (notaAlumno > 7 && notaAlumno <10 ) {

    console.log ("El trabajo es muy bueno.");

} else if (notaAlumno == 10) {

    console.log ("El trabajo sobrepasa la expectativa.");

} else {

    console.log ("Nota invalida.")
    errores++ // Acumulador de errores
}

ingresarNotas = prompt("¿Desea seguir ingresando notas? SI/NO").toLowerCase();
} while (ingresarNotas === "si"); // Continua mientras el usuario siga escribiendo la opcion "Si"

console.log (notaAlumno); // Muestra en la consola la nota del alumno
console.log ("Cantidad de errores:" + errores); // Muestra en la consola la cantidad de Errores