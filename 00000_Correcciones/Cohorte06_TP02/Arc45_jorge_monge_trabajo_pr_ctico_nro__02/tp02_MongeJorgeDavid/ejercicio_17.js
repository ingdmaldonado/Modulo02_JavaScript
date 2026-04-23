// Contadores
let countXL = 0;
let countL = 0;
let countM = 0;
let countDescartados = 0;
let errores = 0;

// Control del bucle
let continuar = true;

while (continuar) {

    let peso = parseFloat(prompt("Ingrese el peso del huevo en gramos:"));

    // Validación
    if (isNaN(peso) || peso < 0) {
        console.log("Valor inválido");
        errores++;
    } else {
        // Clasificación
        if (peso >= 73) {
            countXL++;
        } else if (peso >= 63) {
            countL++;
        } else if (peso >= 53) {
            countM++;
        } else {
            countDescartados++;
        }
    }

    // Preguntar si continúa
    let respuesta = prompt("¿Desea ingresar otro huevo? (s/n)").toLowerCase();
    if (respuesta !== "s") {
        continuar = false;
    }
}

// Total general
let totalHuevos = countXL + countL + countM + countDescartados;

// Evitar división por cero
let porcentajeXL = totalHuevos > 0 ? (countXL / totalHuevos) * 100 : 0;
let porcentajeL = totalHuevos > 0 ? (countL / totalHuevos) * 100 : 0;
let porcentajeM = totalHuevos > 0 ? (countM / totalHuevos) * 100 : 0;

// Resultados
console.log("=== RESULTADOS ===");
console.log("Total de huevos: " + totalHuevos);

console.log("Huevos XL: " + countXL + " (" + porcentajeXL.toFixed(2) + "%)");
console.log("Huevos L: " + countL + " (" + porcentajeL.toFixed(2) + "%)");
console.log("Huevos M: " + countM + " (" + porcentajeM.toFixed(2) + "%)");
console.log("Huevos descartados: " + countDescartados);

console.log("Errores de ingreso: " + errores);