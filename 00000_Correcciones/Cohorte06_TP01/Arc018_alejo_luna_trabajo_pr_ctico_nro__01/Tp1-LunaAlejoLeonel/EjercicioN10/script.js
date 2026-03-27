let total = Number(prompt("Ingrese el importe de la compra"));
let formaPago = Number(prompt("Forma de pago: 1-Efectivo, 2-Débito, 3-Crédito"));

let descuento = 0;

switch (formaPago) {
    case 1:
        descuento = total * 0.10;
        break;
    case 2:
        descuento = total * 0.05;
        break;
    case 3:
        descuento = 0;
        break;
    default:
        console.log("Forma de pago inválida");
}

let totalFinal = total - descuento;

console.log("Importe: " + total);
console.log("Descuento: " + descuento);
console.log("Total a pagar: " + totalFinal);