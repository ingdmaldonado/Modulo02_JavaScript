/*Ejercicio Nro. 10: Estructuras Condicionales (if/else)

Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch */


let importeCompra = 0; 
importeCompra = Number(prompt("Ingrese el importe de la compra:"));
let metodo = 0; 
metodo = Number(prompt("Forma de pago: 1) Efectivo 2) Débito 3) Credito"));

let descuento = 0;

switch (metodo) {
    case 1:
        descuento = importeCompra * 0.10;
        break;
    case 2:
        descuento = importeCompra * 0.05;
        break;
    case 3:
        descuento = 0;
        break;
    default:
        console.log("Opción invalida");
}

let totalFinal = importeCompra - descuento;

console.log("Importe total:", importeCompra);
console.log("Descuento:", descuento);
console.log("Total a pagar:", totalFinal);