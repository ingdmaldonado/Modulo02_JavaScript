/* Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

{
let importeCompra = parseFloat(prompt("Ingrese el importe total de la compra:"));
let formaPago = parseInt(prompt("Ingrese la forma de pago (1: Efectivo, 2: Débito, 3: Crédito):"));

let descuento = 0;
let pagoValido = true;

switch (formaPago) {
    case 1:{ // Efectivo
        descuento = importeCompra * 0.10;
        break;
    }
    case 2:{ // Débito
        descuento = importeCompra * 0.05;
        break;
    }
    case 3:{ // Crédito
        descuento = 0;
        break;
    }
    default:{
        console.log("Forma de pago inválida.");
        pagoValido = false;
        break;
    }
}

let importeFinal = importeCompra - descuento;

if (pagoValido) {
    console.log(`Importe de la compra: ${importeCompra}`);
    console.log(`Descuento aplicado: ${descuento}`);
    console.log(`Importe final a pagar: ${importeFinal}`);
}
}