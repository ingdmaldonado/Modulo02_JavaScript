// CONTADORES
let desaprobados = 0;
let aprobados = 0;
let muyBuenos = 0;
let excelentes = 0;
let errores = 0;

let continuar = true;

while (continuar) {

    let nota = parseFloat(prompt("Ingrese la nota (0 a 10):"));

    // VALIDACIÓN
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        errores++;
        alert("Error: nota inválida");
    } else {

        // CLASIFICACIÓN
        if (nota >= 0 && nota <= 4) {
            desaprobados++;
        } else if (nota > 4 && nota <= 7) {
            aprobados++;
        } else if (nota > 7 && nota < 10) {
            muyBuenos++;
        } else if (nota === 10) {
            excelentes++;
        }
    }

    // PREGUNTAR SI CONTINÚA
    let respuesta = prompt("¿Desea ingresar otra nota? (s/n)");

    if (respuesta.toLowerCase() !== "s") {
        continuar = false;
    }
}

// RESULTADOS
alert(
    "=== RESULTADOS ===\n\n" +
    "Desaprobados: " + desaprobados + "\n" +
    "Aprobados: " + aprobados + "\n" +
    "Muy buenos: " + muyBuenos + "\n" +
    "Excelentes: " + excelentes + "\n\n" +
    "Errores ingresados: " + errores
);
