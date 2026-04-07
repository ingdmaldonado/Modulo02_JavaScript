// Pedir datos al usuario
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));
let formaPago = parseInt(prompt("Ingrese la forma de pago (1=Efectivo, 2=Débito, 3=Crédito):"));

// Inicializar descuento
let descuento = 0;

// Determinar descuento según forma de pago
switch (formaPago) {
    case 1: // Efectivo
        descuento = importe * 0.10;
        break;
    case 2: // Débito
        descuento = importe * 0.05;
        break;
    case 3: // Crédito
        descuento = 0;
        break;
    default:
        console.log("Forma de pago inválida");
}

// Calcular total a pagar
let totalFinal = importe - descuento;

// Mostrar resultados si la forma de pago es válida
if (formaPago >= 1 && formaPago <= 3) {
    console.log("Importe inicial: $" + importe.toFixed(2));
    console.log("Descuento aplicado: $" + descuento.toFixed(2));
    console.log("Total a pagar: $" + totalFinal.toFixed(2));
}