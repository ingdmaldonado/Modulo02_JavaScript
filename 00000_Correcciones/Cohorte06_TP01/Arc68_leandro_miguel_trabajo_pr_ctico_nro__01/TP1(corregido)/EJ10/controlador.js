// Ejercicio N10

let importeCompra = Number(prompt("Ingrese el importe de la compra: "));

let FormadePago = Number(prompt("Ingrese su forma de pago: 1 para tarjeta de efectivo, 2 para tarjeta de débito, 3 para credito: "));

switch (FormadePago) {
    case 1:
        console.log("Usted eligió pagar con tarjeta de efectivo, se le aplicará un descuento del 10%.");

        descuento = importeCompra * 0.10;

        importeFinal = importeCompra - descuento;
        console.log("El importe final de su compra es: " + importeFinal);
        break;
    case 2:
        console.log("Usted eligió pagar con tarjeta de débito, se le aplicará un descuento del 5%.");

        descuento = importeCompra * 0.05;

        importeFinal = importeCompra - descuento;
        console.log("El importe final de su compra es: " + importeFinal);
        break;
    case 3:
        console.log("Usted eligió pagar en credito, no se le aplicará ningún descuento.");

        importeFinal = importeCompra;
        console.log("El importe final de su compra es: " + importeFinal);
        break;
    default:
        console.log("Forma de pago no válida.");
}
