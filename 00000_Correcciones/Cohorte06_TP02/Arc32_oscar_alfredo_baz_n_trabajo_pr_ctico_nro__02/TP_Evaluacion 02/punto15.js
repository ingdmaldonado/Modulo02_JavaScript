/*Ejercicio Nro. 15:
Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.

- No está establecido la cantidad de trabajos finales que se evaluarán.
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.

o Si la nota >= 0 y <= 4 serán trabajos desaprobados
o Si la nota > 4 y <= 7 serán trabajos aprobados
o Si la nota > 7 y <10 serán trabajos muy buenos
o Si la nota = 10 serán trabajos excelentes

- Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se equivoca.
- Siempre preguntar si desea continuar cargando notas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt. */

{

    let nota = 0;
    let aprobados = 0;
    let desaprobados = 0;
    let muyBuenos = 0;
    let excelente = 0;
    let ingresaNota = `S`;
    let contadorNotaInvalida = 0;

    ingresaNota = prompt(`Desea ingresar notas de los alumnos? S/N.`);

    while (ingresaNota === `S` || ingresaNota === `s`) {
        nota = Number(prompt(`Ingrese nota del 0 al 10.`));


        if (nota === 10) {
            console.log(`¡El trabajo fue excelente!`);
            excelente = excelente + 1;
        }
        else if (nota > 7 && nota < 10) {
            console.log(`¡El trabajo es muy bueno! `);
            muyBuenos = muyBuenos + 1;
        }
        else if (nota > 4 && nota <= 7) {
            console.log(`¡El trabajo fue aprobado!`);
            aprobados = aprobados + 1;
        }
        else if (nota >= 0 && nota <= 4) {
            console.log(`¡Desaprobado!`);
            desaprobados = desaprobados + 1;
        }

        else {
            console.log(`Nota invalida, ingrese la nota nuevamente.`);
            contadorNotaInvalida = contadorNotaInvalida + 1;


        }

        ingresaNota = prompt(`Desea ingresar notas de los alumnos? S/N.`);

    }

    console.log(`La cantidad de trabajos excelentes fueron: ${excelente}`);
    console.log(`La cantidad de trabajos muy buenos fueron: ${muyBuenos}`);
    console.log(`La cantidad de trabajos aprobados fueron: ${aprobados}`);
    console.log(`La cantidad de trabajos desaprobados fueron: ${desaprobados}`);
    console.log(`La cantidad de errores al ingresar notas fueron: ${contadorNotaInvalida}`);



}