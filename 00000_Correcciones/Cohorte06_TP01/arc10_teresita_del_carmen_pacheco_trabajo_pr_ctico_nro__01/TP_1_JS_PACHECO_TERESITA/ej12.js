// Ingreso de datos
let dia = prompt("Ingrese día de la compra:");
let compra = parseFloat(prompt("Ingrese importe de la compra:"));

let reintegro = 0;

// Verificar si aplica el beneficio
if (dia === "viernes" || dia === "sabado" || dia === "domingo") {
    
    // Cálculo del reintegro (fórmula)
    reintegro = compra * 0.50;

    // Aplicar tope máximo
    if (reintegro > 80000) {
        reintegro = 80000;
    }

} else {
    console.log("No corresponde el beneficio");
}

// Cálculo del total final (fórmula)
let totalFinal = compra - reintegro;

// Mostrar resultados (lo pide la consigna)
console.log("Día de la compra:", dia);
console.log("Importe de la compra:", compra);
console.log("Reintegro obtenido:", reintegro);
console.log("Importe final a pagar:", totalFinal);