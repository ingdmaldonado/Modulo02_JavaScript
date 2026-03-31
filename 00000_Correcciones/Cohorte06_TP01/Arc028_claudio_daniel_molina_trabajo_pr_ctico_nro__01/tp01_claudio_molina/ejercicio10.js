
let formaPago = Number(prompt(`Ingrese la forma de pago: 1 = Efectivo, 2 = Débito, 3 = Crédito`));
let importeCompra = Number(prompt(`Ingrese el importe de la compra:`));
console.log(`Forma de pago: ${formaPago}`);
console.log(`Importe de la compra: ${importeCompra}`);
let descuento = 0;

switch (formaPago) 
    {
    case 1:
        descuento = (importeCompra * 10) / 100;
        console.log(`Se aplica un descuento del 10%, cuyo importe es: ${descuento}`);
        break;
    case 2:
        descuento = (importeCompra * 5) / 100;
        console.log(`Se aplica un descuento del 5%, cuyo importe es: ${descuento}`);
        break;
    case 3:
        console.log(`No se aplica ningún descuento.`);
        break;
    default:
        console.log(`Forma de pago no válida.`);
    }

let totalaPagar = importeCompra - descuento;
console.log(`El total a pagar de la compra es: ${totalaPagar}`);

