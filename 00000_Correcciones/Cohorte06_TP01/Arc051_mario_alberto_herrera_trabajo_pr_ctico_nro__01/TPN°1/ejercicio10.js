/*
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch.
*/

let importecompra = Number(prompt("Ingrese el importe de la compra"));
let formapago = Number(prompt("Ingrese forma de pago: 1-Efectivo, 2-Débito, 3-Crédito"));

let descuento = 0;

switch (formapago) {

    case 1:
        descuento = importecompra * 0.10;
        break;

    case 2:
        descuento = importecompra * 0.05;
        break;

    case 3:
        descuento = 0;
        break;

    default:
        console.log("Forma de pago inválida");
}

let total = importecompra - descuento;

console.log("Importe de compra:", importecompra);
console.log("Descuento:", descuento);
console.log("Total a pagar:", total);

