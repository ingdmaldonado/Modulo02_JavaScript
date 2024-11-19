
/*

Ejercicio propuesto Nro. 07: (estructura repetitiva while)
	Realizar un programa en JavaScript que permita ingresar 
las notas de los trabajos finales de los alumnos de la diplomatura 
en “Desarrollo Web Full Stack con JavaScript” 
para ello se establecen las siguientes condiciones.

-	No está establecido la cantidad de trabajos finales que se evaluarán
-	Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o	Si la nota >= 0 y <= 4 serán trabajos desaprobados
o	Si la nota > 4 y <= 7 serán trabajos aprobados
o	Si la nota > 7 y <10 serán trabajos muy buenos
o	Si la nota = 10 serán trabajos excelentes
-	Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se equivoca.
-	Siempre preguntar si desea continuar cargando notas ¿?.

``
*/ 

{
    console.log("funcionando");
    let continuaCargandoNotas = "SI";

    /* voy a crear variables e inicializarlas
    para que me permitan ir registrando la 
    cantidad de los datos por cada grupo */

    let contadorDeNotas = 0;
    let cantidadDeErrores = 0;
    let cantidadDeDesaprobados = 0;
    let cantidadDeAprobados = 0;
    let cantidadDeMuyBuenos = 0;
    let cantidadDeExcelentes = 0;

    while (continuaCargandoNotas === "SI")
    {
        contadorDeNotas++;

        // declaro una variable donde leeré la nota del alumno //
        let notaDeAlumno = 0;

        notaDeAlumno = Number(prompt(`Ingrese la nota del alumno ${contadorDeNotas}`));

        // vamos a clasificar la nota e ir registrando cada grupo //
        if((notaDeAlumno >= 0) && (notaDeAlumno <=10))
        {
            // por este lado, la nota ingresada es correcta
            if(notaDeAlumno <= 4)
            {
                cantidadDeDesaprobados++;
            }
            if((notaDeAlumno > 4) && (notaDeAlumno <= 7))
            {
                cantidadDeAprobados ++;
            }
            if((notaDeAlumno > 7) && (notaDeAlumno <= 9))
            {
                cantidadDeMuyBuenos++;
            }
            if(notaDeAlumno === 10)
            {
                cantidadDeExcelentes++;
            }
        }
        else
        {
            // por este lado, la nota ingresa es incorrecta

            //cantidadDeErrores = cantidadDeErrores + 1;
            cantidadDeErrores++;
        }

        console.log("estamos dentro del ciclo");
        continuaCargandoNotas = prompt("Continua cargando ?(SI/NO)");   
    }

    console.log(`La Cantidad de Desaprobados es: ${cantidadDeDesaprobados}`);
    console.log(`La Cantidad de Aprobados es: ${cantidadDeAprobados}`);
    console.log(`La Cantidad de Muy Buenos es: ${cantidadDeMuyBuenos}`);
    console.log(`La Cantidad de Excelente es: ${cantidadDeExcelentes}`);
    console.log(`La Cantidad de Errores ingresados es: ${cantidadDeErrores}`);

}