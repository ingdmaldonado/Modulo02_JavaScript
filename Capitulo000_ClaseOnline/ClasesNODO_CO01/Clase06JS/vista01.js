
/*

Realizar un programa en JavaScript que permita ingresar la edad de todos los estudiantes de la diplomatura 
de la “Diplomatura Universitaria en Desarrollo Web Full Stack con JavaScript” 
y obtener a partir de esos datos los siguientes datos.
Cantidades:

	Cantidad de alumnos mayores a 50 años.
    Cantidad de alumnos cuya edad sea menor o igual a 50 años.

Porcentajes:
	Porcentaje de alumnos mayores a 50 años sobre el Total.
	Porcentaje de alumnos menores o iguales a 50 años sobre el Total


*/

{

    /*(1ro) siempre declaro e inicializo antes de ingresar al ciclo repetitivo */

    let edadAlumno = 0;

    let cantidadGrupo1 = 0;
    let cantidadGrupo2 = 0;
    let cantidadDeErrores = 0;

    /* lo vamos a realizar para 5 alumnos */
    for(let i = 1; i<= 5;i++)
    {
        /* (2do) dentro del ciclo repetitivo pedimos la información que
        necesitamos */
        edadAlumno = Number(prompt(`Por favor ingrese la edad del alumno ${i}`));

        console.log(`La edad Leida del alumno ${i} es ${edadAlumno}`);

        /* (3ra) Determinar y clasificar los datos que leimos en el punto 2 */

        if((edadAlumno <= 0) || (edadAlumno > 100))
        { // que no me ingresen datos negativos o mayores a 100
            console.log(`La edad ingresada no es un número válido para esta aplicación`);
            //cantidadDeErrores = cantidadDeErrores + 1;
            cantidadDeErrores++; // esta es otra forma, alternativa de hacer un contador.
        }
        else
        {
            if((edadAlumno >= 1) && (edadAlumno <= 18))
            {
                console.log(`La edad ingresada corresponde a un menor de edad. dato incorrecto`);
                cantidadDeErrores++;
            }
            else
            {
                if((edadAlumno >= 19) && (edadAlumno <= 50))
                {
                    console.log(`grupo 1 - de 19 a 50 años`);
                    cantidadGrupo1 = cantidadGrupo1 + 1; // contador del grupo 1
                }
                else
                {
                    console.log(`grupo 2 - de 51 a 100 años`);
                    cantidadGrupo2 = cantidadGrupo2 + 1; // contador del grupo 2
                }
            }
        }
    }

    /* (4to) Mostrar los totales obtenidos. */

    console.log(`La cantidad de errores registrados fueron ${cantidadDeErrores}`);
    console.log(`La cantidad de alumnos del grupo 1 (19 a 50 años) ${cantidadGrupo1}`);
    console.log(`La cantidad de alumnos del grupo 2 (51 a 100 años) ${cantidadGrupo2}`);

    /* (5ta. Medida) debería comparar los resultados */

    if(cantidadGrupo1 > cantidadGrupo2)
    {
        console.log(`La cantidad del grupo1 ${cantidadGrupo1} es mayor al grupo2 ${cantidadGrupo2}`);
    }
    else
    {
        if(cantidadGrupo1 < cantidadGrupo2)
        {
            console.log(`La cantidad del grupo1 ${cantidadGrupo1} es menor al grupo2 ${cantidadGrupo2}`);
        }
        else
        {
            console.log(`los dos grupos tienen la misma cantidad`);
        }
    }

   // console.log("todo funcionando");

}