/*
--------Ejercicio Nro. 15------------

Realizar un programa en JavaScript que permita ingresar 
las notas de los trabajos finales de los alumnos de
la diplomatura en “Desarrollo Web Full Stack con JavaScript”
para ello se establecen las siguientes condiciones.

- No está establecido la cantidad de trabajos finales que se evaluarán
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.

    o Si la nota >= 0 y <= 4 serán trabajos desaprobados
    o Si la nota > 4 y <= 7 serán trabajos aprobados
    o Si la nota > 7 y <10 serán trabajos muy buenos
    o Si la nota = 10 serán trabajos excelentes

- Contemplar que el operador podría ingresar notas incorrectas,
es decir podría poner una nota menor a cero o mayor a 10 
con lo que sería claramente un error. 
Contemplar la cantidad de veces que se equivoca.
- Siempre preguntar si desea continuar cargando notas

*/
{
    let notasAlumnos = 0;
    let seguir = `S`;

    let desaprobados = 0;
    let aprobados = 0;
    let muybuenos = 0;
    let excelentes = 0;
    let cantidadError = 0;

    while (seguir === `S` || seguir === `s`) {

        notasAlumnos = Number(prompt(`Ingresar notas de alumnos (0-10):`));


        /*
        o Si la nota >= 0 y <= 4 serán trabajos desaprobados
        o Si la nota > 4 y <= 7 serán trabajos aprobados
        o Si la nota > 7 y <10 serán trabajos muy buenos
        o Si la nota = 10 serán trabajos excelentes
        */


        if ((notasAlumnos >= 0) && (notasAlumnos <= 4)) 
        {
            desaprobados ++;
        }
        else if ((notasAlumnos > 4) && (notasAlumnos <= 7))
        {
            aprobados ++;
        }
        else if ((notasAlumnos > 7) && (notasAlumnos < 10))
        {
            muybuenos ++;
        } 
        else if (notasAlumnos === 10)
        {
            excelentes ++;
        }
        else 
        {
            cantidadError ++;

            console.log(`Ingrese nota válida`);
        }

        seguir = prompt(`Quiere seguir?(S/N)`);
    }

    console.log(`${desaprobados} - Alumnos desaprobados`);
    console.log(`${aprobados} - Alumnos aprobados `);
    console.log(`${muybuenos} - Alumnos con buenos trabajos! `);
    console.log(`${excelentes} - Alumnos con excelentes trabajos!`);

    console.log(`Cantidad de errores: ${cantidadError}`);
}