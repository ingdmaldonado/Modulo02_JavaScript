/*
Ejercicio Nro. 15:

Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de la 
diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.

    - No está establecido la cantidad de trabajos finales que se evaluarán
    - Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.

            o Si la nota >= 0 y <= 4 serán trabajos desaprobados
            o Si la nota > 4 y <= 7 serán trabajos aprobados
            o Si la nota > 7 y <10 serán trabajos muy buenos
            o Si la nota = 10 serán trabajos excelentes

    - Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor a cero 
      o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se equivoca.
    - Siempre preguntar si desea continuar cargando notas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.
*/

{
    let salirPrograma = 'S';
    let notaTrabajoFinal = 0;

    let trabajosDesaprobado = 0;
    let trabajosAprobados = 0;
    let trabajosMuyBuenos = 0;
    let trabajosExcelente = 0;
    let notaTrabajoIncorrecto = 0;

    while(salirPrograma.toUpperCase() === 'S')
    {
        notaTrabajoFinal = Number(prompt(`Ingrese la nota del tabajo final a evaluar`));

        if((notaTrabajoFinal) >=0 && (notaTrabajoFinal) <=4)
        {
            trabajosDesaprobado = trabajosDesaprobado + 1;
        }

        if((notaTrabajoFinal) > 4 && (notaTrabajoFinal) <=7)
        {
            trabajosAprobados = trabajosAprobados + 1;
        }

        if((notaTrabajoFinal) > 7 && (notaTrabajoFinal) < 10)
        {
            trabajosMuyBuenos = trabajosMuyBuenos + 1;
        }

        if( notaTrabajoFinal === 10 )
        {
            trabajosExcelente = trabajosExcelente + 1;
        }
        
        if((notaTrabajoFinal) < 0 || (notaTrabajoFinal) > 10)
        {
            notaTrabajoIncorrecto = notaTrabajoIncorrecto + 1;
        }

        salirPrograma = prompt(`DESEA CONTINUAR CON LA CARGA DE NOTA? S/N`);
    }

    console.log(`=======================================================`);
    console.log(`Cantindad de trabajos desaprobados: ${trabajosDesaprobado}`);
    console.log(`Cantindad de trabajos aprobados: ${trabajosAprobados}`);
    console.log(`Cantindad de trabajos muy buenos: ${trabajosMuyBuenos}`);
    console.log(`Cantindad de trabajos excelentes: ${trabajosExcelente}`);
    console.log(`Cantindad de notas ingresadas incorrectas: ${notaTrabajoIncorrecto}`);
}