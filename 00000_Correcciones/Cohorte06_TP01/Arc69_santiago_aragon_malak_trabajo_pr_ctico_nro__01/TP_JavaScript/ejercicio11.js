// ============================================
// EJERCICIO 11 - Delivery por zona
// ============================================
// Recomendación aplicada: costos de envío en variables
// constantes para facilitar cambios futuros.

const ENVIO_CENTRO = 2500.00;
const ENVIO_OESTE  = 3750.00;
const ENVIO_NORTE  = 4225.00;
const ENVIO_SUR    = 5222.50;
const ENVIO_ESTE   = 4288.50;

let importeCompra = parseFloat(prompt("Ingrese el importe de la compra:"));
let zona = parseInt(prompt("Ingrese su zona:\n1) Centro\n2) Oeste\n3) Norte\n4) Sur\n5) Este"));

let costoEnvio;
let nombreZona;

switch (zona) {
    case 1:
        nombreZona = "Centro";
        costoEnvio = ENVIO_CENTRO;
        break;
    case 2:
        nombreZona = "Oeste";
        costoEnvio = ENVIO_OESTE;
        break;
    case 3:
        nombreZona = "Norte";
        costoEnvio = ENVIO_NORTE;
        break;
    case 4:
        nombreZona = "Sur";
        costoEnvio = ENVIO_SUR;
        break;
    case 5:
        nombreZona = "Este";
        costoEnvio = ENVIO_ESTE;
        break;
    default:
        console.log("Zona inválida. Debe ingresar un número del 1 al 5.");
}

if (costoEnvio !== undefined) {
    let totalFinal = importeCompra + costoEnvio;

    console.log("=== EJERCICIO 11 - DELIVERY POR ZONA ===");
    console.log("Zona del cliente:   ", nombreZona);
    console.log("Importe de compra:  $", importeCompra);
    console.log("Costo de envío:     $", costoEnvio);
    console.log("Total a pagar:      $", totalFinal);
}
