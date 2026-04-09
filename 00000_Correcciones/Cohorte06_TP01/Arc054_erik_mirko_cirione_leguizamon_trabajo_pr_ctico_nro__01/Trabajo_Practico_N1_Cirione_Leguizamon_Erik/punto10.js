/*
Un comercio aplica descuentos sobre el importe de compra según forma de pago: 

1) Efectivo → 10% descuento 
2) Débito → 5% descuento 
3) Crédito → Sin descuento 

Calcular el descuento y Mostrar total final. Utilizar estructura switch 

*/

let totalCompra = 0;
let descuento = 0;
let totalFinal = 0;
let formaPago = 0;

totalCompra = Number(prompt(`Ingrese el monto total de la compra:`));
formaPago = Number(prompt(`Ingrese la forma de pago: 1 (Efectivo), 2(Debito), 3(Credito)`));


switch (formaPago) {
    case 1:
        descuento = (totalCompra * 10) / 100;
        totalFinal = totalCompra - descuento;
        console.log (`Su compra es de: $${totalCompra}`)
        console.log(`Ha recibido un descuento del 10% resultante en: $${descuento}`);
        console.log(`El importe Final es: $${totalFinal}`);
        break

    case 2:
        descuento = (totalCompra * 5) / 100;
        totalFinal = totalCompra - descuento;
        console.log (`Su compra es de: $${totalCompra}`)
        console.log(`Ha recibido un descuento del 5% resultante en: $${descuento}`);
        console.log(`El importe Final es: $${totalFinal}`);
        break

    case 3:
        console.log (`Su compra es de: $${totalCompra}`)
        console.log(`No es posible aplicarle un descuento`);
        console.log(`El importe Final es: $${totalCompra}`);
        break

    default:
        alert ("Forma de pago no admitida");
}


