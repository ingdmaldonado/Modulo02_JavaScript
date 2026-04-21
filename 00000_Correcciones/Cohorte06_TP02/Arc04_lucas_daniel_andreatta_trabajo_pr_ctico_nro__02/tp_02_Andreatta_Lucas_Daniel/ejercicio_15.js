/* 

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

    let continuarCargando = `si`;

    let notaTrabajoFinal = 0;

    let cantidadNotasIncorrectas = 0;
    let cantidadTrabajosDesaprobados = 0;
    let cantidadTrabajosAprobados = 0;
    let cantidadTrabajosMuyBuenos = 0;
    let cantidadTrabajosExelentes = 0;


    while ((continuarCargando === `si`) || (continuarCargando === `SI`)) {


         // preguntamos la nota del trabajo final
        notaTrabajoFinal = Number(prompt(`Ingrese la nota del trabajo final:`));

        if ((notaTrabajoFinal >= 0) && (notaTrabajoFinal <= 4)) {
            cantidadTrabajosDesaprobados++;  // Desaprobados
        } else {
            if ((notaTrabajoFinal > 4) && (notaTrabajoFinal <= 7)) {
                cantidadTrabajosAprobados++; // Aprobados
            } else {
                if ((notaTrabajoFinal > 7) && (notaTrabajoFinal < 10)) {
                    cantidadTrabajosMuyBuenos++; // Muy buenos
                } else {
                    if (notaTrabajoFinal === 10) {
                        cantidadTrabajosExelentes++; // Exelente
                    } else {
                        cantidadNotasIncorrectas++; // nota mal ingresada
                    }
                }
            }
        }

        // preguntamos si quiere seguir cargando notas
        continuarCargando = prompt(`Desea seguir cargando notas? (SI/NO)`);
    }



    console.log(`Cantidad de trabajos finales DESAPROBADOS: ${cantidadTrabajosDesaprobados}`);
    console.log(`Cantidad de trabajos finales APROBADOS: ${cantidadTrabajosAprobados}`);
    console.log(`Cantidad de trabajos finales APORBAODS MUY BUENOS: ${cantidadTrabajosMuyBuenos}`);
    console.log(`Cantidad de trabajos finales APROBADOS EXELENTES: ${cantidadTrabajosExelentes}`);
    console.log(`Cantidad de veces que ingreso una nota incorrecta: ${cantidadNotasIncorrectas}`);


} // FIN BLOQUE CÓDIGO