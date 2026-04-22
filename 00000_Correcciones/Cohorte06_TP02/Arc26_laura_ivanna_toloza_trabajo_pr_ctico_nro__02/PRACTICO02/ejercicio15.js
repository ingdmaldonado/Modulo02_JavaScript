/* Ejercicio Nro. 15:
Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de
la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.
- No está establecido la cantidad de trabajos finales que se evaluarán
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o Si la nota >= 0 y <= 4 serán trabajos desaprobados
o Si la nota > 4 y <= 7 serán trabajos aprobados
o Si la nota > 7 y <10 serán trabajos muy buenos
o Si la nota = 10 serán trabajos excelentes
- Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor
a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se
equivoca.
- Siempre preguntar si desea continuar cargando notas. */

let notas = 0;
let cantidadDesaprobados = 0;
let cantidadAprobados = 0;
let cantidadMuyBuenos = 0;
let cantidadExcelentes = 0;
let cantidadErrores = 0;
let continua = "s";

while (continua !== "n") {
    notas = Number(prompt(`Ingrese la nota del trabajo final`));
    if (notas >=0 && notas <= 4) {
        cantidadDesaprobados ++;
    } else if (notas > 4 && notas <=7) {
        cantidadAprobados ++;
    } else if (notas > 7 && notas < 10) {
        cantidadMuyBuenos ++;
    } else if (notas === 10) {
        cantidadExcelentes ++;
    } else {
        alert(`Nota ingresada no es valida`);
        cantidadErrores ++;
    }
    continua = (prompt(`Desea continuar s/n))`)).toLowerCase();
}

console.log(`La cantidad de trabajos desaprobados es: ${cantidadDesaprobados}`);
console.log(`La cantidad de trabajos aprobados es: ${cantidadAprobados}`);
console.log(`La cantidad de trabajos muy buenos es: ${cantidadMuyBuenos}`);
console.log(`La cantidad de trabajos excelentes es: ${cantidadExcelentes}`);
console.log(`La cantidad de errores cometidos es: ${cantidadErrores}`);
