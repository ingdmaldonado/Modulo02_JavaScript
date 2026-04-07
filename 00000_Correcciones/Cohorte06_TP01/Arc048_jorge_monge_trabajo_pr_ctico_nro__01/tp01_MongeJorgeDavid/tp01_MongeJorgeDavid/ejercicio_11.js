// Definir costos de envío por zona
const envioCentro = 2500;
const envioOeste = 3750;
const envioNorte = 4225;
const envioSur = 5222.50;
const envioEste = 4288.50;

// Pedir datos al usuario
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));
let zona = parseInt(prompt("Ingrese la zona del cliente (1=Centro, 2=Oeste, 3=Norte, 4=Sur, 5=Este):"));

// Inicializar costo de envío
let costoEnvio = 0;

// Determinar costo de envío según zona
switch(zona) {
    case 1:
        costoEnvio = envioCentro;
        break;
    case 2:
        costoEnvio = envioOeste;
        break;
    case 3:
        costoEnvio = envioNorte;
        break;
    case 4:
        costoEnvio = envioSur;
        break;
    case 5:
        costoEnvio = envioEste;
        break;
    default:
        console.log("Zona inválida");
}

// Calcular total a pagar si la zona es válida
if (zona >= 1 && zona <= 5) {
    let totalFinal = importe + costoEnvio;
    console.log("Importe de la compra: $" + importe.toFixed(2));
    console.log("Costo de envío: $" + costoEnvio.toFixed(2));
    console.log("Total a pagar: $" + totalFinal.toFixed(2));
}