{
    
    let importeCompra = Number(prompt("Ingrese el importe de la compra:"));
let formaPago = Number(prompt("Forma de pago: 1-Efectivo  2-Débito  3-Crédito"));

let descuento = 0;

switch (formaPago) {
    case 1:
        descuento = importeCompra * 10/100;
        break;

    case 2:
        descuento = importeCompra * 5/100;
        break;

    case 3:
        descuento = 0;
        break;

    default:
        console.log("Forma de pago inválida");
}

let totalFinal = importeCompra - descuento;

console.log("Importe de compra:", importeCompra);
console.log("Descuento:", descuento);
console.log("Total a pagar:", totalFinal);
}