{
    let trabajosDesaprobados = 0;
    let trabajosAprobados = 0;
    let trabajosmuyBuenos = 0;
    let trabajosExcelente = 0;
    let cantidadErrores = 0;
    let nota = 0;
    let fin = 's';

    while (fin != 'n') {
        nota = Number(prompt("Ingrese la nota del trabajo (0-10):"));

        while (nota < 0 || nota > 10) {            
            nota = Number(prompt("Nota no válida. Ingrese la nota del trabajo (0-10):"));
            cantidadErrores++;
        }
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

    console.log(`Cantidad de trabajos desaprobados: ${trabajosDesaprobados}`);
    console.log(`Cantidad de trabajos aprobados: ${trabajosAprobados}`);
    console.log(`Cantidad de trabajos muy buenos: ${trabajosmuyBuenos}`);
    console.log(`Cantidad de trabajos excelentes: ${trabajosExcelente}`);
    console.log(`Cantidad de errores cometidos: ${cantidadErrores}`);
    
    
}