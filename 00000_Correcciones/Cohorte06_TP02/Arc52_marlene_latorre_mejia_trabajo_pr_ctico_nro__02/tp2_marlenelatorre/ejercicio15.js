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
    
    let trabajosDesaprobados = 0;
    let trabajosAprobados = 0;
    let trabajosMuyBuenos = 0;
    let TrabajosExcelentes = 0;
    let erroresIngreso = 0;

    let continuar = "S"

    while(continuar ==="S" || continuar == "s")
    {
        let nota= parseFloat(prompt(`Ingrese la nota del trabajo final`));

        if(isNaN(nota) || nota < 0 || nota > 10)
        {
            console.log(`Error de ingreso nota fuera del rango`);
            erroresIngreso = erroresIngreso +1;
        }
        else
        {
            if((nota >= 0) && (nota <=4))
            {
                trabajosDesaprobados= trabajosDesaprobados + 1;
                console.log(`Clasificacion ${nota}: DESAPROBADO`);
            }
            else
            {
                if((nota >4)&& (nota<=7))
                {
                    trabajosAprobados ++;
                    console.log(`Clasificacion ${nota}: APROBADO`);
                }
                else
                {
                    if((nota > 7)&& (nota<10))
                    {
                        trabajosMuyBuenos++;
                        console.log(`Clasificacion ${nota}: MUY BUENO`);
                    }
                    else
                    {
                        if(nota=10)
                        {
                            TrabajosExcelentes = TrabajosExcelentes+1;
                            console.log(`Clasificacion ${nota}: EXCELENTE`);
                        }
                    }
                }
            }
        }
        
        continuar = prompt(`Desea continuar cargando notas? (si/no)`);
    }

    let totalTrabajos = trabajosDesaprobados + trabajosAprobados + trabajosMuyBuenos + TrabajosExcelentes;

    console.log(`RESUMEN DE CLASIFICACIONES`);
    console.log(`DESAPROBADOS ${trabajosDesaprobados}`);
    console.log(`APROBADOS ${trabajosAprobados}`);
    console.log(`MUY BUENOS ${trabajosMuyBuenos}`);
    console.log(`EXCELENTES ${TrabajosExcelentes}`);
    console.log(`Total de trabajos corregidos: ${totalTrabajos}`);
    console.log(`ERRORES DE CARGA ${erroresIngreso}`);


}