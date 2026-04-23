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
- Siempre preguntar si desea continuar cargando notas.*/

{
    let cargaAlumno = `S`;
    let nota = 0;
    let desaprobado = 0;
    let aprobado = 0;
    let muyBueno = 0;
    let excelente = 0;
    let contadorErrores = 0;

    while (cargaAlumno === `S` || cargaAlumno === `s`) {


        nota = Number(prompt(`ingrese la nota`));


        console.log(`ver nota`);


        if ((nota >= 0) && (nota <= 4)) {


            desaprobado = desaprobado + 1


        }
        else if ((nota > 4) && (nota <= 7)) {


            aprobado = aprobado + 1


        }
        else if ((nota > 7) && (nota < 10)) {


            muyBueno = muyBueno + 1


        }
        else if (nota === 10) {
            excelente = excelente + 1
        }
        else {
            contadorErrores = contadorErrores + 1;
            console.log(`ingreso un numero equivocado`);
        }
        cargaAlumno = prompt(`Desea cargar otro alumno ?. (S/N) ?`);
    }
    console.log(`desaprobados ${desaprobado}`);
    console.log(`aprobados ${aprobado}`);
    console.log(`muy buenos ${muyBueno}`)
    console.log(`excelente ${excelente}`);
    console.log(`Errores ${contadorErrores}`);


}



