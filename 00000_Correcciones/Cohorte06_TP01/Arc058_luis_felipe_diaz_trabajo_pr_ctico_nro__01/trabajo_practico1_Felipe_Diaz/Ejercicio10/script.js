// Ingreso del importe de la compra
let importe = Number(prompt("Ingrese el importe de la compra"));

// Ingreso de la forma de pago con un pequeño menú para el usuario
let formaPago = Number(prompt("Ingrese la forma de pago:\n1 para Efectivo\n2 para Débito\n3 para Crédito"));

let descuento = 0;

// Evaluamos la forma de pago usando la estructura switch
switch (formaPago) {
    case 1:
        descuento = (importe * 10) / 100;
        console.log("Pago en Efectivo: se aplica un 10% de descuento.");
        break;
        
    case 2:
        descuento = (importe * 5) / 100;
        console.log("Pago con Débito: se aplica un 5% de descuento.");
        break;
        
    case 3:
        descuento = 0;
        console.log("Pago con Crédito: no tiene descuento.");
        break;
        
    default:
        console.log("Error: La forma de pago ingresada no existe.");
        break;
}

// Calculamos el importe final restando el descuento
let totalFinal = importe - descuento;

// Mostramos los resultados
console.log("Importe original: $" + importe);
console.log("Descuento: $" + descuento);
console.log("Total FINAL a pagar: $" + totalFinal);