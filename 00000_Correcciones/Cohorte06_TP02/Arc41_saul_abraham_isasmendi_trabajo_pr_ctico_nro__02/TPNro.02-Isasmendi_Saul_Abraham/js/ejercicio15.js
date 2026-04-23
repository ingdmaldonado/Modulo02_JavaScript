// Programa que clasifica trabajos según su calificación: desaprobados, aprobados, muy buenos y excelentes
{
    // Variables para contar trabajos por categoría
    let trabajosDesaprobados = 0;
    let trabajosAprobados = 0;
    let trabajosmuyBuenos = 0;
    let trabajosExcelente = 0;
    let cantidadErrores = 0;
    let nota = 0;
    let fin = 's';

    // Ingreso de notas y clasificación
    while (fin != 'n') {
        nota = Number(prompt("Ingrese la nota del trabajo (0-10):"));

        // Validar que la nota esté entre 0 y 10 (agregado isNaN)
        while (isNaN(nota) || nota < 0 || nota > 10) {            
            cantidadErrores++;
            nota = Number(prompt("Nota no válida. Ingrese la nota del trabajo (0-10):"));
        }
        // Clasificar la nota según rango
        if (nota >= 0 && nota <= 4) {
            trabajosDesaprobados++;
        }
        else if (nota > 4 && nota <= 7) {
            trabajosAprobados++;
        }
        else if (nota > 7 && nota < 10) {
            trabajosmuyBuenos++;
        }
        else {
            trabajosExcelente++;
        }
        fin = prompt("¿Desea ingresar otra nota? (s/n): ");
    }

    // Mostrar resultados
    console.log(`Cantidad de trabajos desaprobados: ${trabajosDesaprobados}`);
    console.log(`Cantidad de trabajos aprobados: ${trabajosAprobados}`);
    console.log(`Cantidad de trabajos muy buenos: ${trabajosmuyBuenos}`);
    console.log(`Cantidad de trabajos excelentes: ${trabajosExcelente}`);
    console.log(`Cantidad de errores cometidos: ${cantidadErrores}`);
}