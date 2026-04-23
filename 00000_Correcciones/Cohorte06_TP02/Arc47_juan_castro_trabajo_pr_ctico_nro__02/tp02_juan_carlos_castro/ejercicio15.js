/*

Ejercicio Nro. 15: 
 
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
 
- Siempre preguntar si desea continuar cargando notas. 
 
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.

*/

{

    let notaAlumno = 0;
    let cantidadAprobado = 0;
    let cantidadDesaprobados = 0;
    let cantidadBuenos = 0;
    let cantidadExelente = 0;
    let cantidadErronea = 0;


    let continua = `S`;

    while (continua === `S` || continua === `s`) {

        notaAlumno = Number(prompt(`Ingrese la nota del alumno:`));

        if (notaAlumno < 0 || notaAlumno > 10) {
            cantidadErronea = cantidadErronea + 1;
        } else if (notaAlumno === 10) {
            cantidadExelente = cantidadExelente + 1;
        } else if (notaAlumno > 7 && notaAlumno < 10) {
            cantidadBuenos = cantidadBuenos + 1;
        } else if (notaAlumno > 4 && notaAlumno <= 7) {
            cantidadAprobado = cantidadAprobado + 1;
        } else if (notaAlumno >= 0 && notaAlumno <= 4) {
            cantidadDesaprobados = cantidadDesaprobados + 1;
        }

        continua = prompt(`Seguir ingresando notas? S/N`);
    }

    console.log(`Trabajos aprobados: ${cantidadAprobado}`);
    console.log(`Trabajos desaprobados: ${cantidadDesaprobados}`);
    console.log(`Trabajos muy buenos: ${cantidadBuenos}`);
    console.log(`Trabajos exelentes: ${cantidadExelente}`);
    console.log(`Cantidad de errores: ${cantidadErronea}`);

}