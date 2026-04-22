/**
 Ejercicio Nro. 15:
Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de
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
- Siempre preguntar si desea continuar cargando notas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.

 */
{
   let notaTrabajoFinal = 0;
   let sigueCargandoNotas = `S`;
   let cantidadDeEquivocaciones = 0;

   while(sigueCargandoNotas === `S` || sigueCargandoNotas === `s`)
   {
    notaTrabajoFinal = Number(prompt(`ingrese la nota`));

    if(notaTrabajoFinal >= 0 && notaTrabajoFinal <= 4)
    {
        console.log(`trabajo desaprobado`);
    }
    else if(notaTrabajoFinal > 4 && notaTrabajoFinal <=7)
    {
        console.log(`trabajo aprobado`);

    }
    else if(notaTrabajoFinal > 7 && notaTrabajoFinal < 10)
    {
        console.log(`trabajo muy bueno`);
    }
    else if(notaTrabajoFinal === 10)
    {
        console.log(`trabajo excelente`);
    }
    else
    {
        console.log(`ingrese una nota correcta`);
        cantidadDeEquivocaciones ++;
    }

    sigueCargandoNotas = prompt(`¿ Desea seguir cargando notas ? (S/N)`)
   }

   console.log(`Cantidad De Equivocaciones: ${cantidadDeEquivocaciones}`);
}