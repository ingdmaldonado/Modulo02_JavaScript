/*
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
*/
{
let nota = 0;
let desaprobados = 0;
let aprobados = 0; 
let muyBuenos = 0;
let excelentes = 0;
let errores = 0;
let continua= "s";

while (continua === `S` || continua === `s`)
{
        nota = Number(prompt(`Ingrese la Nota (entre 0 y 10):`));
            if ((nota >= 0)&&(nota<=4)){
                desaprobados += 1;
            }
            else if ((nota > 4)&&(nota<=7)){
                aprobados += 1;
            }
            else if ((nota > 7)&&(nota<10)){ 
                muyBuenos += 1;
            }
            else if (nota === 10 ){
                excelentes += 1;
            }
            else {
                errores +=1;
                alert(`este valor no está permitido, cargue nuevamente`);
            }
    
        continua = prompt(`¿Quiere cargar otro alumno? (S/N))`);
}

console.log(`Cantidad de alumnos desaprobados: ${desaprobados}`);
console.log(`Cantidad de alumnos aprobados: ${aprobados}`);
console.log(`Cantidad de alumnos muy buenos: ${muyBuenos}`);
console.log(`Cantidad de alumnos excelentes: ${excelentes}`);
console.log(`Cantidad de errores ingresados: ${errores}`);
}