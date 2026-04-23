// Contadores
let desaprobados = 0;
let aprobados = 0;
let muyBuenos = 0;
let excelentes = 0;
let errores = 0;

// Control del bucle
let continuar = true;

while (continuar) {
    let nota = parseFloat(prompt("Ingrese la nota (0 a 10):"));

    // Validación de nota
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        console.log("Nota inválida");
        errores++;
    } else {
        // Clasificación
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

    // Preguntar si desea continuar
    let respuesta = prompt("¿Desea ingresar otra nota? (s/n)").toLowerCase();

    if (respuesta !== "s") {
        continuar = false;
    }
}

// Mostrar resultados
console.log("=== RESULTADOS ===");
console.log("Desaprobados: " + desaprobados);
console.log("Aprobados: " + aprobados);
console.log("Muy buenos: " + muyBuenos);
console.log("Excelentes: " + excelentes);
console.log("Errores de ingreso: " + errores);