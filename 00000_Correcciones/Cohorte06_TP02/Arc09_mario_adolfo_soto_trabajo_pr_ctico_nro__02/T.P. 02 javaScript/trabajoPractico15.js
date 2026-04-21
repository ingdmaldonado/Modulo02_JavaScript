/*Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de
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
    let continua = "S";
    let notaAlumno = 0 ;
    let contadorNotas=0;
    let notasIncorrectas = 0;
    let alumnosDesaprobados = 0;
    let alumnosAprobados = 0;
    let alumnosMuyBuenos = 0;
    let alumnosExcelentes = 0;

    while (continua === "S" || continua === "s") 
    {
              
         notaAlumno=Number(prompt(`ingrese la nota del alumno `));
        // serán trabajos desaprobados 
            if ((notaAlumno < 0) ||  (notaAlumno > 10))
           {
             notasIncorrectas = notasIncorrectas + 1;

           }


            else if ((notaAlumno >= 0) && (notaAlumno <= 4))
            {
                alumnosDesaprobados = alumnosDesaprobados + 1;
            }

            else if((notaAlumno > 4) && (notaAlumno <= 7))
            {
                alumnosAprobados = alumnosAprobados + 1;
            }
            
            else if((notaAlumno >7) && (notaAlumno <10))
             {
                alumnosMuyBuenos = alumnosMuyBuenos + 1; 
             }
            
            else if (notaAlumno === 10)
            {
                alumnosExcelentes = alumnosExcelentes + 1 ;
            }
            else console.log(`Ud ingreso un valor invalido`)

          
    
  
            continua = prompt(`desea continuar S / N.`);
    
    }

            console.log(`notas incorrectas ${notasIncorrectas}`);
            console.log(`cantidad de alumnos desaprobados ${alumnosDesaprobados}`);
            console.log(`cantidad de alumnos aprobados ${alumnosAprobados}`);
            console.log(`cantidad de alumnos muy buenos ${alumnosMuyBuenos}`);
            console.log(`cantidad de alumnos excelentes ${alumnosExcelentes}`);




}




