
/* Estructuras repetivas Básicas
en JavaScript 

    (01) - Ciclo For
    (02) - Ciclo While
    (03) - Ciclo do while

*/
{


    /*
    console.log(`nos eliminaron de la copa `);
    console.log(`nos eliminaron de la copa `);
    console.log(`nos eliminaron de la copa `);
    console.log(`nos eliminaron de la copa `);
    console.log(`nos eliminaron de la copa `);
    */

    /* (01) - ciclo for 
    
        1ra) iterador. variable que me permite decirle quien es
        la variable que tendrá la función de ir contando los pasos

        2do) Condición de permanencia dentro del ciclo repetitivo

        3ro) la Instrucción que permite incrementar el iterador

    */

    /* 
    
        HTML  => VISTA

        CSS => ESTILOS A LA VISTA

        JAVASCRIPT =>
    
    */

    for(let iterador = 0;iterador <= 10;iterador = iterador + 3)
    {
       // console.log(`soy una mensaje por consola ${iterador}`); 

        /* 0,1,2,3,4,5,6,...10 */
        /* 0,2,4,6,8,10 */
        /* 0,3,6,9,*/
    }

    /* contadoras y acumuladoras */

    /* Tomar la Edad de todos los que están 
    en clases en vivo en este momento y 
    obtener la edad promedio */

    let edadAlumno = 0; // variable que me permite leer las edades
    let edadTotal = 0; // variable que me permite acumular las edades
    let contadorTotalDeAlumnos = 0; // variable que me permite contabilizar todos los alumnos

    let acumuladorDeMenoresDe25 = 0; // acumulador de edades
    let contadorDeMenoresDe25 = 0; // contador de edades

    let acumuladorDeMayoresDe25 = 0; // acumulador de edades
    let contadorDeMayoresDe25 = 0; // contador de edades


    for(let iterador = 1;iterador <= 4;iterador = iterador + 1)
    {

        // cada paso generalmente le decimos iteración.
        // (01) Leimos la edad del alumno "n"
        edadAlumno = Number(prompt(`Por favor ingrese la edad del alumno ${iterador}`));

        if((edadAlumno >= 18) && (edadAlumno <= 25))
        {
            // contar de uno en uno los que cumplen la condicion del if
            contadorDeMenoresDe25 = contadorDeMenoresDe25 + 1;

            // acumular las edades de los que cumplen la condicion del if
            acumuladorDeMenoresDe25 = acumuladorDeMenoresDe25 + edadAlumno;
        }
        else
        {
            // estarian entrando los negativos, y los mayores a 25

            if(edadAlumno > 25)
            {
                contadorDeMayoresDe25 = contadorDeMayoresDe25 + 1;
                acumuladorDeMayoresDe25 = acumuladorDeMayoresDe25 + edadAlumno;
            }

        }



        // (02) Mostramos por consola la edad del alumno "n"
        console.log(`La edad ingresada del alumno ${iterador} es ${edadAlumno}`);

        // (03) Antes de perder la edad. acumularla en otra variable
        edadTotal = edadTotal + edadAlumno;  // ACUMULADOR 

        // (04) Mostramos la edad acumulada hasta el momento "n"
        console.log(`La edad acumulada hasta ahora es: ${edadTotal}`);

        /* (05) Realizar contador. es una variable que generalmente se 
        incrementa asi misma de 1 en uno.
        */
        contadorTotalDeAlumnos = contadorTotalDeAlumnos + 1;

        console.log(`Cantidad de alumnos leidos es ${contadorTotalDeAlumnos}`);

    }

    // Esto ocurriría a fuera del ciclo repetitivo */

    // aqui declaro una variable para obtener el promedio general //
    let promedioGeneral = 0;

    // crear una variable para registrar el promedio de menores o iguales a 25
    let promedioDeMenoresoIgualesA25 = 0;
    promedioDeMenoresoIgualesA25 = contadorDeMenoresDe25 > 0 ? acumuladorDeMenoresDe25 / contadorDeMenoresDe25 : 0;
    console.log(`Promedio de Menores o Iguales a 25 ${promedioDeMenoresoIgualesA25}`)

    // crear una variable para registrar el promedio de mayores de 25
    let promedioDeMayoresDe25 = 0;
    promedioDeMayoresDe25 = contadorDeMayoresDe25 > 0 ? acumuladorDeMayoresDe25 / contadorDeMayoresDe25:0;
    console.log(`Promedio de Mayores a 25 ${promedioDeMayoresDe25}`);

    // aqui calculo el promedio general //
    promedioGeneral = edadTotal / contadorTotalDeAlumnos;

    console.log(`Promedio de Edad de todos los alumnos ${promedioGeneral}`);

}

/* RESUMEN

    LA ESTRUCTURA DEL CICLO FOR

    CONTADORES

    ACUMULADORES

    INCORPORAMOS ESTRUCTURAS REPETITIVAS DENTRO DEL BLOQUE REPETITIVO

    PROMEDIOS. ESTADISTICAS.
*/