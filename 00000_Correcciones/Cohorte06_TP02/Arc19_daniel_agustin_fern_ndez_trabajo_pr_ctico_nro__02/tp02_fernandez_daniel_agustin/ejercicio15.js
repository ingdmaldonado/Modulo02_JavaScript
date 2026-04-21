/*

Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.

-No está establecido la cantidad de trabajos finales que se evaluarán

-Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.

* Si la nota >= 0 y <= 4 serán trabajos desaprobados
* Si la nota > 4 y <= 7 serán trabajos aprobados
* Si la nota > 7 y <10 serán trabajos muy buenos
* Si la nota = 10 serán trabajos excelentes

-Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se equivoca.

-Siempre preguntar si desea continuar cargando notas.

*/

{
    let trabajosDesaprobados = 0;
    let trabajosAprobados = 0;
    let trabajosMuyBuenos = 0;
    let trabajosExcelentes = 0;
    let cantidadDeErrores = 0;

    let continua = 'S';

    while (continua === 'S' || continua === 's')
    {
        
        let notaIngresada = Number(prompt(`Ingrese la nota del trabajo final (0 al 10):`));

        if ((notaIngresada >= 0) && (notaIngresada <= 4))
        {
            console.log(`La nota ${notaIngresada} es DESAPROBADO.`);
            trabajosDesaprobados = trabajosDesaprobados + 1;
        }
        else
        {
            if ((notaIngresada > 4) && (notaIngresada <= 7))
            {
                console.log(`La nota ${notaIngresada} es APROBADO.`);
                trabajosAprobados = trabajosAprobados + 1;
            }
            else
            {
                if ((notaIngresada > 7) && (notaIngresada < 10))
                {
                    console.log(`La nota ${notaIngresada} es MUY BUENO.`);
                    trabajosMuyBuenos = trabajosMuyBuenos + 1;
                }
                else
                {
                    if (notaIngresada === 10)
                    {
                        console.log(`La nota ${notaIngresada} es EXCELENTE.`);
                        trabajosExcelentes = trabajosExcelentes + 1;
                    }
                    else
                    {
                        console.log(`La nota ingresada es incorrecta.`);
                        cantidadDeErrores = cantidadDeErrores + 1;
                    }
                }
            }
        }

        continua = prompt(`Quiere registrar otra nota? (S/N)`);
    }

    console.log(`Trabajos Desaprobados: ${trabajosDesaprobados}`);
    console.log(`Trabajos Aprobados: ${trabajosAprobados}`);
    console.log(`Trabajos Muy Buenos: ${trabajosMuyBuenos}`);
    console.log(`Trabajos Excelentes: ${trabajosExcelentes}`);
    console.log(`Cantidad de Errores: ${cantidadDeErrores}`);
}