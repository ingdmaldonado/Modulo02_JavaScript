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
alert(
    "Día de la compra: " + dia +
    "\nImporte de la compra: $" + importe +
    "\nReintegro obtenido: $" + reintegro +
    "\nTotal pagado: $" + total
);