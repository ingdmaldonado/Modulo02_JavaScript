{

let importeCompra = 0;
let descuento = 0;
let totalPagar = 0;
let formaPago = 0;

importeCompra = Number(prompt("¿Cuál es el importe de tu compra?"));
formaPago = prompt(`¿Cuál es la forma de pago? (Efectivo (1), Débito (2), Crédito (3))`);

switch (formaPago) 
{
    case "1":
        descuento = importeCompra * 0.10;
        totalPagar = importeCompra - descuento;        
        break;
    case "2":
        descuento = importeCompra * 0.05;
        totalPagar = importeCompra - descuento;        
        break;
    case "3":
        totalPagar = importeCompra;        
        break;
    default:
        console.log("Forma de pago no válida. No se aplicará ningún descuento.");
        totalPagar = importeCompra;
        break;
}

console.log(`El total a pagar es: ${totalPagar}`);

}