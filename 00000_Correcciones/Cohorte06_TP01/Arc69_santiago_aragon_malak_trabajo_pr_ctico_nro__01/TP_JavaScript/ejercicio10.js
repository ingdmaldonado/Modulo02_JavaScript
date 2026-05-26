// ============================================
// EJERCICIO 10 - Descuento por forma de pago
// ============================================

let importe    = parseFloat(prompt("Ingrese el importe de la compra:"));
let formaPago  = parseInt(prompt("Ingrese la forma de pago:\n1) Efectivo\n2) Débito\n3) Crédito"));

let descuento      = 0;
let descripcionPago;

switch (formaPago) {
    case 1:
        descripcionPago = "Efectivo";
        descuento = importe * 0.10;
        break;
    case 2:
        descripcionPago = "Débito";
        descuento = importe * 0.05;
        break;
    case 3:
        descripcionPago = "Crédito";
        descuento = 0;
        break;
    default:
        console.log("Opción de pago inválida.");
}

if (descripcionPago) {
    let totalFinal = importe - descuento;

    console.log("=== EJERCICIO 10 - FORMA DE PAGO ===");
    console.log("Forma de pago:      ", descripcionPago);
    console.log("Importe original:   $", importe);
    console.log("Descuento:          $", descuento);
    console.log("Total final a pagar:$", totalFinal);
}
