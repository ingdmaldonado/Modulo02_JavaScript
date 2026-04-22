/*
Ejercicio Nro. 15: 

Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de 
la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones. 

- No está establecido la cantidad de trabajos finales que se evaluarán.
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos. 

    o Si la nota >= 0 y <= 4 serán trabajos desaprobados 
    o Si la nota > 4 y <= 7 serán trabajos aprobados 
    o Si la nota > 7 y <10 serán trabajos muy buenos 
    o Si la nota = 10 serán trabajos excelentes 

- Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor 
a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se 
equivoca. 

- Siempre preguntar si desea continuar cargando notas.

*/

{
    // parte 1 - inicializacion

    let nota = 0;
    let notasIncorrectas = 0;
    let continuar = `S`;

    // parte 2 - cargar notas

    while(continuar === `S` || continuar === `s`){

        nota = Number(prompt(`Ingrese las notas de los trabajos finales de los alumnos:`));
    
        console.log(`Nota: ${nota}`);

        if(nota < 0 || nota > 10){
            console.log(`Nota incorrecta, ingreso una nota menor a 0 o mayor a 10. Porfavor intente nuevamente`);
            notasIncorrectas = notasIncorrectas + 1;
        }
        
        if((nota >= 0) && (nota <= 4)){
            console.log(`Trabajo Final Desaprobado`);
        }

        if((nota > 4) && (nota <= 7)){
            console.log(`Trabajo Final Aprobado`);
        }

        if((nota > 7) && (nota < 10)){
            console.log(`Trabajo Final Muy Bueno`);
        }

        if(nota === 10){
            console.log(`Trabajo Final Excelente`);
        }

        continuar = prompt(`¿Desea seguir cargando notas? (S/N)`);

    }

    console.log(`Notas Incorrectas: ${notasIncorrectas}`);

}