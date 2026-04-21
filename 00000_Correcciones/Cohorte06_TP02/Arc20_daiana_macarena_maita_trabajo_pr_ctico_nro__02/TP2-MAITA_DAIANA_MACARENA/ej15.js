// EJERCICIO 15 - NOTAS

let desaprobados = 0,
    aprobados = 0,
    muyBuenos = 0,
    excelentes = 0;
let errores = 0;

let continuar = true;

while (continuar) {

    let nota = parseFloat(prompt("Ingrese nota (0-10)"));

    // Validación
    if (nota < 0 || nota > 10) {
        errores++;
        alert("Nota inválida");
    } else if (nota <= 4) {
        desaprobados++;
    } else if (nota <= 7) {
        aprobados++;
    } else if (nota < 10) {
        muyBuenos++;
    } else {
        excelentes++;
    }

    continuar = confirm("¿Seguir?");
}

// Resultados
alert("Desaprobados: " + desaprobados);
alert("Aprobados: " + aprobados);
alert("Muy buenos: " + muyBuenos);
alert("Excelentes: " + excelentes);
alert("Errores: " + errores);