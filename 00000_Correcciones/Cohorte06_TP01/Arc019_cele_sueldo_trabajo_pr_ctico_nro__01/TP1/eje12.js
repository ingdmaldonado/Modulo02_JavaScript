{
// 1. Pedir datos
let dia = prompt("Ingrese el día de la compra:");
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

let reintegro = 0;

// 2. Verificar si corresponde el beneficio
if (dia === "viernes" || dia === "sabado" || dia === "domingo") {
    
    // 3. Calcular reintegro (50%)
    reintegro = importe * 5/100;

    // Verificar tope máximo
    if (reintegro > 80000) {
        reintegro = 80000;
    }

} else {
    reintegro = 0;
}

// 4. Calcular importe final
let totalFinal = importe - reintegro;

// Mostrar resultados
console.log("Día de la compra:", dia);
console.log("Importe de la compra:", importe);
console.log("Reintegro obtenido:", reintegro);
console.log("Importe final pagado:", totalFinal);

}