// Programa para cargar notas de trabajos finales

let nota;
let continuar = "si";

// Contadores por categoría
let desaprobados = 0;
let aprobados = 0;
let muyBuenos = 0;
let excelentes = 0;

// Contador de errores
let errores = 0;

while (continuar.toLowerCase() == "si") {

    nota = parseFloat(prompt("Ingrese la nota del trabajo (0 a 10):"));

    // Validación de nota incorrecta
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert("Nota incorrecta");
        errores = errores + 1;
    } else {

        // Clasificación
        if (nota >= 0 && nota <= 4) {
            desaprobados = desaprobados + 1;
        }

        if (nota > 4 && nota <= 7) {
            aprobados = aprobados + 1;
        }

        if (nota > 7 && nota < 10) {
            muyBuenos = muyBuenos + 1;
        }

        if (nota == 10) {
            excelentes = excelentes + 1;
        }
    }

    // Preguntar si desea continuar
    continuar = prompt("¿Desea seguir cargando notas? (si / no)");
}

// Mostrar resultados
alert(
    "RESULTADOS\n\n" +
    "Desaprobados: " + desaprobados + "\n" +
    "Aprobados: " + aprobados + "\n" +
    "Muy Buenos: " + muyBuenos + "\n" +
    "Excelentes: " + excelentes + "\n\n" +
    "Errores ingresados: " + errores
);