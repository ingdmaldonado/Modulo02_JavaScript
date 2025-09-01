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

    50 hasta 100
    18 hasta 50



*/

/* 
    utilizo ciclo for => cuando conozco con exactitud la cantidad 
    de iteraciones que tengo que hacer. cuando conozco 
    la cantidad de alumnos.

    utilizo ciclo while => cuando no conozco cuando terminaría mi 
    ciclo repetitivo. es decir, cuando no se en este caso la
    cantidad de alumnos que leere en el proceso.
*/

{
    console.log(`la aplicación esta corriendo !!!`);

    /* variable que se inicializa en SI, para que
    el ciclo repetitivo al menos ingrese una vez */

    let continuaCargando = 'SI'; // declaro e inicializo


    /* mientras la variable continua cargando sea igual a si 
    voy a permanecer dentro del ciclo
    */

    /* 
        contadores => variables que se acumulan así misma => contador = contador + 1
        acumuladores => variable que se acumula así misma => acumulador = acumulador + edad
    */

    let cantidadAlumnos = 0;

    let cantidadMayores50 = 0; // aqui voy a llevar el contador
    let acumuladorMayores50 = 0; // aqui voy a llevar el acumulador de edades
    let edadPromedioMayores50 = 0; // aqui voy a calcular la edad promedio

    let cantidadMenores50 = 0;
    let acumuladorMenores50 = 0;
    let edadPromedioMenores50 = 0;

    while(continuaCargando === 'SI') 
    {

        // aqui voy contando los alumnos que voy registrando
        cantidadAlumnos = cantidadAlumnos + 1;

        // declaro la edad y la leo por teclado //
        let edadAlumno = 0;
        edadAlumno = Number(prompt(`Ingrese la edad del alumno ${cantidadAlumnos}`));

        // aqui voy a registrar y contabilizar en función de la edad ingresad

        if((edadAlumno > 50) && (edadAlumno <= 100)) // aqui estaria contabilizando el grupo 1
        {
            cantidadMayores50 = cantidadMayores50 + 1; // aqui voy contando
            acumuladorMayores50 = acumuladorMayores50 + edadAlumno; // aqui voy acumulando las edades
        }
        else
        {
            if((edadAlumno >= 18)&&(edadAlumno <=50)) // aqui estaría contabilizando el grupo 2
            {
                cantidadMenores50++; // es otra forma de poner un contador
                acumuladorMenores50 = acumuladorMenores50 + edadAlumno; 
            }
            else
            {
                // por aqui estaría contabilizando los errores
            }
        }

        // muestro la edad ingresada por consola 
        console.log(`Alumno Nro. ${cantidadAlumnos} Edad Ingresada ${edadAlumno}`);

        // le pregunto al usuario si desea continuar cargando
        continuaCargando = prompt(`Continua Ingresando edades ? (SI/NO)`);
    }

    // aqui estoy calculando el promedio (dividir el acumulador / contador)

    /* NO SE PUEDE DIVIDIR POR CERO */

    // aqui calculo el promedio del grupo1
    edadPromedioMayores50 = (cantidadMayores50 !== 0) ? acumuladorMayores50 / cantidadMayores50:0;

    // aqui calculo el promedio del grupo 2
    edadPromedioMenores50 = (cantidadMenores50 !== 0) ? acumuladorMenores50 / cantidadMenores50:0;


    console.log(`Grupo 1: Cantidad ${cantidadMayores50} y Edad Total : ${acumuladorMayores50} Promedio: ${edadPromedioMayores50}`);

    

    console.log(`Esto ya está fuera del ciclo repetitivo`);

}