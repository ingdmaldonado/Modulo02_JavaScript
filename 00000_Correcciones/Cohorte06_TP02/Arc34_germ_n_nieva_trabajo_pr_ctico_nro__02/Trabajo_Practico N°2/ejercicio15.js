/* <!-- Ejercicio Nro. 15:
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
DOM y cargar los datos de entrada por medio de prompt.--> */

let cantidadDesaprobados=0;
let cantidadAprobados=0;
let cantidadMuyBuenos=0;
let cantidadExcelentes=0;
let cantidadErrores=0;
let continua=true;
while(continua){
    let nota=Number(prompt("Ingrese la nota del trabajo final:"));
    if(nota>=0 && nota<=4){
        cantidadDesaprobados++;
    }else if(nota>4 && nota<=7){
        cantidadAprobados++;
    }else if(nota>7 && nota<10){
        cantidadMuyBuenos++;
    }else if(nota==10){
        cantidadExcelentes++;
    }else{
        console.log("Nota ingresada incorrecta, por favor ingrese una nota entre 0 y 10.");
        cantidadErrores++;
    }
    let respuesta=prompt("¿Desea continuar ingresando notas? (1:si/2:no)");
    if(respuesta!=1){
        continua=false;
    }
    }
console.log("Cantidad de notas ingresadas: "+(cantidadDesaprobados+cantidadAprobados+cantidadMuyBuenos+cantidadExcelentes));
console.log("Cantidad de trabajos desaprobados: "+cantidadDesaprobados);
console.log("Cantidad de trabajos aprobados: "+cantidadAprobados);
console.log("Cantidad de trabajos muy buenos: "+cantidadMuyBuenos);
console.log("Cantidad de trabajos excelentes: "+cantidadExcelentes);
console.log("Cantidad de errores cometidos: "+cantidadErrores);