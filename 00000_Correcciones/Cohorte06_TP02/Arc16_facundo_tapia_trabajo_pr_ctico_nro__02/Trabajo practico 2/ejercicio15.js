/*Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de
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
DOM y cargar los datos de entrada por medio de prompt.*/

let continua = `S`;
let contadorErrores = 0;

while (continua === `S` || continua === `s`)
{
    let nota = Number(prompt(`Ingrese la nota del trabajo final del alumno`));


    if (nota >= 0 && nota <=4)
    {
        console.log(`El trabajo final del alumno fue desaprobado`);
    }
    else if (nota > 4 && nota <=7)
    {
        console.log(`El trabajo final del alumno fue aprobado`);
        
    }
    else if (nota > 7 && nota < 10)
    {
        console.log(`El trabajo final del alumno fue muy bueno`);
    }
    else if (nota === 10)
    {
        console.log(`El trabajo final del alumno fue excelente`);
        
    }
    if (nota < 0 || nota > 10)
    {
        console.log(`Error: la nota debe estar entre 0 y 10`);
        contadorErrores++;
    }
    continua = prompt(`Desea continuar cargando notas? (S/N)`);
}