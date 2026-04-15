let importeCompra = 0;
importeCompra = Number(prompt("Ingrese el importe de su compra: $"));

let formaPago = 0;
formaPago = Number(prompt ("Ingrese la forma de pago: 1=Efectivo 2=Débito 3=Crédito"));

let descuento = 0;

let totalCompra = importeCompra - descuento;
 
switch (formaPago) {
  //"Efectivo"
  case 1: 
    descuento = importeCompra * 0.10;
    break;
  //"Débito"
  case 2:
    descuento = importeCompra * 0.05;
    break;
  //"Crédito"
  case 3: 
    descuento = 0;
    break;
  default:
    console.log("Forma de pago no válida.");
}
 
console.log("Total Final a pagar: $", totalCompra);