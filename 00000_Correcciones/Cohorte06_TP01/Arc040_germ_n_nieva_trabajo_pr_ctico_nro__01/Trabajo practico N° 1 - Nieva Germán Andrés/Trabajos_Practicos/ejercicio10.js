/* Ejercicio Nro. 10: Estructuras Condicionales (if/else)

Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento

Calcular el descuento y Mostrar total final. Utilizar estructura switch */



let formaPago= Number(prompt("ingrese la forma de pago: 1. Efectivo, 2. Debito, 3. Credito"));
let importe= Number(prompt("ingrese el importe de compra:"));
let descuento=0;
switch(formaPago){
    case 1:
        descuento= importe*0.10;
        break;
    case 2:
        descuento= importe*0.05;
        break;
    case 3:
        descuento= 0;
        break;
    default:
        console.log("Forma de pago no válida");
}
let totalFinal= importe-descuento;
console.log(`El importe de la compra es ${importe}, el descuento aplicado es ${descuento} y el total a pagar es ${totalFinal}`);