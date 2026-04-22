/*Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de 
la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones. - 
No está establecido la cantidad de trabajos finales que se evaluarán - - - 
Este será el cuadro con el que se analizará y asignará la clasificación de los mismos. 
o Si la nota >= 0 y <= 4 serán trabajos desaprobados 
o Si la nota > 4 y <= 7 serán trabajos aprobados 
o Si la nota > 7 y <10 serán trabajos muy buenos 
o Si la nota = 10 serán trabajos excelentes 
Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor 
a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se 
equivoca. 
Siempre preguntar si desea continuar cargando notas. */
{
    let nota=0;
    let aprobados=0;
    let desaprobados=0;
    let muyBueno=0;
    let excelentes=0;
    let continuar=`s`;
    let notaIncorrecta=0;
  


    while (continuar === `s`){
        nota= Number(prompt(`Ingrese la nota de 0 a 10`));

        if(nota <0  || nota >10){
            console.log(`Opción incorrecta intente nuevamente`);
            notaIncorrecta= notaIncorrecta+1;
        }
        else if (nota >= 0 && nota <= 4) {
            desaprobados=desaprobados+1;
        } 
        else if (nota > 4 && nota <= 7) {
            aprobados=aprobados+1;
        } 
        else if (nota > 7 && nota < 10) {
            muyBueno=muyBueno+1;
        } 
        else if (nota === 10) {
            excelentes=excelentes+1;
        }
        continuar=prompt(`Desea seguir otras notas? (s/n)`)
    }

        
    console.log(`Aprobado ${aprobados}`);
    console.log(`Desaprobado ${desaprobados}`);
    console.log(`Muy bueno ${muyBueno}`);
    console.log(`Excelente ${excelentes}`);
}

    
    
