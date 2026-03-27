// 1. Definir costos de envío (como recomienda el ejercicio)
let envioCentro = 2500;
let envioOeste = 3750;
let envioNorte = 4225;
let envioSur = 5222.50;
let envioEste = 4288.50;

// 2. Solicitar datos
let zona = prompt("Ingrese su zona (Centro, Oeste, Norte, Sur, Este):").toLowerCase();
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

// Variable para envío
let costoEnvio = 0;

// 3. Determinar costo según zona
if (zona === "centro") 
    {
    costoEnvio = envioCentro;
} 
else if (zona === "oeste") 
    {
    costoEnvio = envioOeste;
} 
else if (zona === "norte") 
    {
    costoEnvio = envioNorte;
} 
else if (zona === "sur") 
    {
    costoEnvio = envioSur;
} 
else if (zona === "este") 
    {
    costoEnvio = envioEste;
} 
else 
    {
    console.loge("Zona inválida");
}

// 4. Calcular total
let total = importe + costoEnvio;

// 5. Mostrar resultados
console.log(
    "Zona: " + zona +
    "\nImporte de la compra: $" + importe +
    "\nCosto de envío: $" + costoEnvio +
    "\nTotal a pagar: $" + total
);