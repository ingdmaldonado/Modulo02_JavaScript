/* Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch */

let importeCompra = 0;
importeCompra = Number(prompt("Ingrese el importe de la compra:"));

let formaPago = 0;
formaPago = Number(prompt("Ingrese la forma de pago: 1. Efectivo, 2. Débito, 3. Crédito"));

switch (formaPago) {
    case 1: {
        let descuento = (importeCompra * 10) / 100;
        let totalFinal = importeCompra - descuento;
        console.log(`El total a pagar con descuento del 10% es: ${totalFinal}`);
        break;
    }
    case 2: {
        let descuento = (importeCompra * 5) / 100;
        let totalFinal = importeCompra - descuento;
        console.log(`El total a pagar con descuento del 5% es: ${totalFinal}`);
        break;
    }
    case 3: {
        console.log(`El total a pagar sin descuento es: ${importeCompra}`);
        break;
    }
    default: {
        console.log("Forma de pago no válida");
        break;
    }
}