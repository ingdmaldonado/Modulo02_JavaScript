// Pedimos datos
let importe = parseFloat(prompt("Ingresá el importe de la compra:"));
let formaPago = prompt("Ingresá forma de pago (efectivo, debito, credito):").toLowerCase();

let descuento = 0;

// Evaluamos con switch
switch (formaPago) {
    case "efectivo":
        descuento = importe * 0.10;
        break;
    case "debito":
        descuento = importe * 0.05;
        break;
    case "credito":
        descuento = 0;
        break;
    default:
        console.log("Forma de pago inválida");
}

// Calculamos total final
let totalFinal = importe - descuento;

// Mostramos resultados
console.log("Importe original: $" + importe.toFixed(2));
console.log("Descuento: $" + descuento.toFixed(2));
console.log("Total a pagar: $" + totalFinal.toFixed(2));