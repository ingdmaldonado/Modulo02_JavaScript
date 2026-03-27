// 1. Solicitar datos
let dia = prompt("Ingrese el día de la compra:").toLowerCase();
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

// Variables
let reintegro = 0;
let tope = 80000;

// 2. Verificar si aplica el beneficio
if (dia === "viernes" || dia === "sábado" || dia === "sabado" || dia === "domingo") 
    {
    
    // 3. Calcular 50% de reintegro
    reintegro = importe * 0.50;

    // Aplicar tope si supera $80.000
    if (reintegro > tope) {
        reintegro = tope;
    }

} 
else 
    {
    reintegro = 0;
    alert("No se aplica el beneficio porque no es un día válido.");
}

// 4. Calcular importe final
let total = importe - reintegro;

// 5. Mostrar resultados
console.log("Día de la compra: " + dia );
console.log("Importe de la compra: $" + importe );
console.log("Reintegro obtenido: $" + reintegro);
console.log("Total pagado: $" + total)