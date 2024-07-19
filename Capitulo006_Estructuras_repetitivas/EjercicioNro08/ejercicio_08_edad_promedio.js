/*
    Ejercicio propuesto Nro. 08: (estructuras repetitivas)
	Realizar un programa en JavaScript que permita ingresar la 
    edad de todos los estudiantes de la diplomatura de la 
    “Diplomatura Universitaria en Desarrollo Web Full Stack con JavaScript” 
    y obtener a partir de esos datos los siguientes datos.

    Cantidades:
    	Cantidad de alumnos mayores a 50 años.
        Cantidad de alumnos cuya edad sea menor o igual a 50 años.
        Cantidad total de alumnos.
    Porcentajes:
    	Porcentaje de alumnos mayores a 50 años sobre el Total.
    	Porcentaje de alumnos menores o iguales a 50 años sobre el Total

    Considere como error aquelos que están por debajo de los 18 años
    y por arriba de los 100.

*/

{

    /* declaro las variables principales */

    
    let cantidadErrores = 0; // para cantidad de errores
    let cantidadMayores50 = 0; // para mayores a 50 años
    let cantidadMenores50 = 0; // para menores a 50 años
    let cantidadTotal = 0; // cantidad total


    for(let i = 1;i <= 5;i = i + 1)
    {

        let edadAlumno = Number(prompt(`Por favor Ingrese la Edad del alumno nro. ${i}`));

        console.log(`Edad leida del alumno ${i} - ${edadAlumno}`);


        if((edadAlumno < 18) || (edadAlumno >= 100))
        {
            console.log("la edad registrada corresponde a un error");
            cantidadErrores = cantidadErrores + 1;
        }
        else
        {
            if((edadAlumno >= 18) && (edadAlumno <= 50))
            {
                console.log("edad registrada entre 18 y 50 años");
                cantidadMenores50 = cantidadMenores50 + 1;
            }
            else
            {
                console.log("edad registrada > 50 y < 100 años");
                cantidadMayores50 = cantidadMayores50 + 1;
            }
        }
    }

    /* Muestro los Totales */
    console.log(`1 - Cantidad de Errores son : ${cantidadErrores}`);
    console.log(`2 - Cantidad de Mayores a 50 años ${cantidadMayores50}`);
    console.log(`3 - Cantidad de Menores o iguales a 50 años ${cantidadMenores50}`);

    /* obtengo la cantidad total */
    cantidadTotal = cantidadErrores + cantidadMayores50 + cantidadMenores50;

    /* declaro variables y las inicializo, alli
    voy a guardar los porcentajes sobre el total */

    let porcentajeErrores = 0;
    let porcentajeMayores50 = 0;
    let porcentajeMenores50 = 0;

    /* si hubo al menos 1 error, obtengo el porcentaje */
    if(cantidadErrores > 0)
    {
        porcentajeErrores = (cantidadErrores/cantidadTotal)*100;
    }

    /* si hubo al menos 1 mayor a 50 años obtengo el porcentaje */
    if(cantidadMayores50 > 0)
    {
        porcentajeMayores50 = (cantidadMayores50/cantidadTotal)*100;
    }

    /* si hubo al menos 1 (una persona) entre 18 y 50 años obtengo el promedio */
    if(cantidadMenores50 > 0)
    {
        porcentajeMenores50 = (cantidadMenores50/cantidadTotal)*100;
    }


    console.log(`El porcentaje de errores es de ${porcentajeErrores} %`);
    console.log(`El porcentaje de mayores a 50 años es de ${porcentajeMayores50} %`);
    console.log(`El porcentaje de menores o iguales a 50 años es de ${porcentajeMenores50} %`);

}