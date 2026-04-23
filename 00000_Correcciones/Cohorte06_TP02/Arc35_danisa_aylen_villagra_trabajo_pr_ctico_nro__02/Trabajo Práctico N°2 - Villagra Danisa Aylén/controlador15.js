/*Ejercicio Nro. 15: 
Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones:
No está establecido la cantidad de trabajos finales que se evaluarán.

Este será el cuadro con el que se analizará y asignará la clasificación de los mismos:
 - Si la nota >= 0 y <= 4 serán trabajos desaprobados 
 - Si la nota > 4 y <= 7 serán trabajos aprobados 
 - Si la nota > 7 y <10 serán trabajos muy buenos 
 - Si la nota = 10 serán trabajos excelentes 

Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se equivoca.
Siempre preguntar si desea continuar cargando notas. 

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.*/

{
    let continuar = "si";

    let desaprobados = 0;
    let aprobados = 0;
    let muyBuenos = 0;
    let excelentes = 0;
    let errores = 0;

    while (continuar === "si")
    {
        let nota = Number(prompt("Ingrese la nota del trabajo final:"));

        //Si la nota es incorrecta:
        if (nota < 0 || nota > 10)
        {
            alert("Error. La nota debe estar entre 0 y 10.");
            errores = errores + 1;
        }
        else
        {
            if (nota >= 0 && nota <= 4)
            {
               desaprobados = desaprobados + 1;
            }
            else
            {
                if (nota > 4 && nota <= 7)
                {
                    aprobados = aprobados + 1;
                }
                else
                {
                    if (nota > 7 && nota < 10)
                    {
                        muyBuenos = muyBuenos + 1;
                    }
                    else
                    {
                        if (nota === 10)
                        {
                            excelentes = excelentes + 1;
                        }
                    }
                }
            }
        }

        //Preguntar si desea seguir ingresando notas:
        continuar = prompt("¿Desea ingresar otra nota? si o no:");
    }

    console.log(`Desaprobados: ${desaprobados}`);
    console.log(`Aprobados: ${aprobados}`);
    console.log(`Muy buenos: ${muyBuenos}`);
    console.log(`Excelentes: ${excelentes}`);
    console.log(`Errores al ingresar notas: ${errores}`);
}