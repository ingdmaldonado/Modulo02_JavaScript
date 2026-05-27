/*
    Ejercicio Nro. 15:
    Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.
    - No está establecido la cantidad de trabajos finales que se evaluarán
    - Este será el cuadro con el que se analizará y asignará la clasificación de los mismos. Si la nota >= 0 y <= 4 serán trabajos desaprobados o Si la nota > 4 y <= 7 serán trabajos aprobados o Si la nota > 7 y <10 serán trabajos muy buenos o Si la nota = 10 serán trabajos excelentes
    - Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se equivoca.
    - Siempre preguntar si desea continuar cargando notas.
    Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{
    let notas = 0;

    let notasInvalidas = 0;

    let contadorNotas = 0;

    let contadorDesaprobados = 0;
    let contadorAprobados = 0;
    let contadorMuyBueno = 0;
    let contadorExcelente = 0;

    continua = `S`;

    while(continua === `S` || continua === `s`)
    {
        notas = Number(prompt(`Ingrese la Nota que Desea Evaluar`));

        // Aquí verifico que la nota sea válida (nota >= 0 y nota <= 10)
        if(notas >= 0 && notas <= 10)
        {
            if(notas >= 0 && notas <= 4) // Desaprobados
            {
                console.log(`Nota: ${notas} | Trabajo DESAPROBADO`);

                contadorDesaprobados = contadorDesaprobados + 1;
            }
            else{
                if(notas > 4 && notas <= 7) // Aprobados
                {
                    console.log(`Nota: ${notas} | Trabajo APROBADO`);

                    contadorAprobados = contadorAprobados + 1;
                }
                else{
                    if(notas > 7 && notas < 10) // Muy Bueno
                    {
                        console.log(`Nota: ${notas} | Trabajo MUY BUENO`);

                        contadorMuyBueno = contadorMuyBueno + 1;
                    }
                    else{ // Excelente
                        console.log(`Nota: ${notas} | Trabajo EXCELENTE`);

                        contadorExcelente = contadorExcelente + 1;
                    }
                }
            }

            // Cuento la cantidad de Notas que ingrese para evaluar
            contadorNotas = contadorNotas + 1;
        }
        else{ // Notas invalidas (notas diferentes a un rango numérico de 0 a 10)
            console.log(`Error, Nota NO Válida.`);

            notasInvalidas = notasInvalidas + 1;
        }

        continua = prompt(`Desea continuar cargando notas? (S/N)`); // Antes de salir pregunto si desea seguir evaluando notas
    }

    // Aquí muestro por consola los datos pedidos
    console.log(`Trabajos Evaluados: ${contadorNotas} | Notas Invalidas Ingresadas: ${notasInvalidas}`);
    console.log(`Trabajos Desaprobados: ${contadorDesaprobados} | Trabajos Aprobados: ${contadorAprobados} | Trabajos Muy Buenos: ${contadorMuyBueno} | Trabajos Excelentes: ${contadorExcelente}`);
}