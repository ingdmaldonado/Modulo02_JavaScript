// Ejercicio Nro. 10: Descuento por Forma de Pago (switch)

// Ingresar el importe de compra
let importeCompra = parseFloat(prompt("Ingrese el importe total de la compra:"));

// Ingresar la forma de pago
let formaPago = prompt("Ingrese la forma de pago (1: Efectivo, 2: Débito, 3: Crédito):").toLowerCase();

let descuento = 0;
let totalFinal = importeCompra;
let mensajeFormaPago = "";

switch (formaPago) {
    case "1":
    case "efectivo":
        descuento = importeCompra * 0.10; // 10% de descuento
        mensajeFormaPago = "Efectivo";
        break;
    case "2":
    case "debito":
    case "débito":
        descuento = importeCompra * 0.05; // 5% de descuento
        mensajeFormaPago = "Débito";
        break;
    case "3":
    case "credito":
    case "crédito":
        descuento = 0; // Sin descuento
        mensajeFormaPago = "Crédito";
        break;
    default:
        console.log("Forma de pago no reconocida. No se aplicará descuento.");
        mensajeFormaPago = "No reconocida";
}

totalFinal = importeCompra - descuento;

console.log("Importe de la compra:", importeCompra.toFixed(2));
console.log("Forma de pago:", mensajeFormaPago);
console.log("Descuento aplicado:", descuento.toFixed(2));
console.log("Total final a pagar:", totalFinal.toFixed(2));