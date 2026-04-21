/* Ejercicio Nro. 15 */

function evaluarNotas() {

    let nota;
    let continuar;

    // Contadores
    let desaprobados = 0;
    let aprobados = 0;
    let muyBuenos = 0;
    let excelentes = 0;
    let errores = 0;

    do {
        // Ingreso de nota
        nota = Number(prompt("Ingrese la nota (0 a 10)"));

        // Verifico si la nota es válida
        if (nota < 0 || nota > 10) {
            console.log("Nota inválida");
            errores++;

        } else {

            // Clasificación de la nota
            if (nota >= 0 && nota <= 4) {
                console.log("Trabajo desaprobado");
                desaprobados++;

            } else if (nota > 4 && nota <= 7) {
                console.log("Trabajo aprobado");
                aprobados++;

            } else if (nota > 7 && nota < 10) {
                console.log("Trabajo muy bueno");
                muyBuenos++;

            } else if (nota === 10) {
                console.log("Trabajo excelente");
                excelentes++;
            }
        }

        // Pregunto si desea continuar
        continuar = prompt("¿Desea ingresar otra nota? (si/no)");

    } while (continuar === "si");

    // Muestro resultados finales
    console.log(`Desaprobados: ${desaprobados}`);
    console.log(`Aprobados: ${aprobados}`);
    console.log(`Muy buenos: ${muyBuenos}`);
    console.log(`Excelentes: ${excelentes}`);
    console.log(`Errores ingresados: ${errores}`);
}