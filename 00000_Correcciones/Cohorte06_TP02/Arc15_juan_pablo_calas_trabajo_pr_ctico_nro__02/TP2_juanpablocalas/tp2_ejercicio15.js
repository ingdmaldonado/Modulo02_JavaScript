/*

Ejercicio Nro. 15:
Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.
- No está establecido la cantidad de trabajos finales que se evaluarán
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o Si la nota >= 0 y <= 4 serán trabajos desaprobados
o Si la nota > 4 y <= 7 serán trabajos aprobados
o Si la nota > 7 y <10 serán trabajos muy buenos
o Si la nota = 10 serán trabajos excelentes
- Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se equivoca.
- Siempre preguntar si desea continuar cargando notas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.

*/
{
    let NotaTrabajoFinal = 0;

    let CantDesaprobados = 0;
    let CantAprobados = 0;
    let CantMuyBuenos = 0;
    let CantExcelentes = 0;
    let CantNotasErroneas = 0;

    let CantAlumnosCalif = 0;

    let SigueIngresandoNotas = 'S';

    

    while(SigueIngresandoNotas === 'S' || SigueIngresandoNotas === 's') 
    {
        NotaTrabajoFinal = Number(prompt(`Ingrese la Nota del Trabajo Final`));
        if ((NotaTrabajoFinal >=0) && (NotaTrabajoFinal <= 4))
        {
            CantDesaprobados++;
        }
        if ((NotaTrabajoFinal > 4) && (NotaTrabajoFinal <= 7))
        {
            CantAprobados++;
        }        
        if ((NotaTrabajoFinal > 7) && (NotaTrabajoFinal < 10))
        {
            CantMuyBuenos++;
        }    
        if (NotaTrabajoFinal === 10)
        {
            CantExcelentes++;
        } 
        if ((NotaTrabajoFinal < 0) || (NotaTrabajoFinal > 10))
        {
            CantNotasErroneas++
        }
        SigueIngresandoNotas = prompt(`Continua ingresando Calificaciones? (S/N)`);
    }
    console.log(`La cantidad de DESAPROBADOS es: ${CantDesaprobados}`);
    console.log(`La cantidad de APROBADOS es: ${CantAprobados}`);
    console.log(`La cantidad de MUY BUENOS es: ${CantMuyBuenos}`);
    console.log(`La cantidad de EXCELENTES es: ${CantExcelentes}`);
    console.log(`La cantidad de NOTAS ERRONEAS es: ${CantNotasErroneas}`);
    CantAlumnosCalif = CantAprobados+CantDesaprobados+CantExcelentes+CantMuyBuenos+CantNotasErroneas;
    console.log(`La cantidad de ALUMNOS CALIFICADOS es: ${CantAlumnosCalif}`);
}