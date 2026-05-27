// Ejercicio Nro. 11: Costo de Envío por Zona

// Costos de envío (recomendación del ejercicio)
const costosEnvio = {
    "centro": 2500.00,
    "oeste": 3750.00,
    "norte": 4225.00,
    "sur": 5222.50,
    "este": 4288.50
};

// Ingresar importe de la compra
let importeCompra = parseFloat(prompt("Ingrese el importe de la compra:"));

// Ingresar la zona del cliente
let zonaCliente = prompt("Ingrese la zona del cliente (Centro, Oeste, Norte, Sur, Este):").toLowerCase();

let costoEnvio = 0;

// Determinar el costo de envío según la zona
if (costosEnvio[zonaCliente]) {
    costoEnvio = costosEnvio[zonaCliente];
} else {
    console.log("Zona de envío no reconocida. No se aplicará costo de envío.");
}

// Calcular el importe total con envío
let importeTotalConEnvio = importeCompra + costoEnvio;

console.log("Importe de la compra:", importeCompra.toFixed(2));
console.log("Zona del cliente:", zonaCliente.charAt(0).toUpperCase() + zonaCliente.slice(1)); // Capitalizar primera letra
console.log("Costo de envío:", costoEnvio.toFixed(2));
console.log("Importe total a pagar (con envío):", importeTotalConEnvio.toFixed(2));