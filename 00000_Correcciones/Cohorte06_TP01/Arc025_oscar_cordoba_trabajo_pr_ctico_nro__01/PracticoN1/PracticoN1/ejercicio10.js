{

let importeAPagar =Number(prompt(`Ingrese el importe a pagaar`));
let pago =Number(prompt(`Ingrese un Forma de  pago del 1 al 3`));
let descuento  = 0;

switch (pago) {
  case 1:
    descuento =(importeAPagar *10)/100;
    importeAPagar =importeAPagar-descuento;
     console.log("Su pago fue en Efectivo");
     console.log(`El total a pagar es:$${importeAPagar}`);

    break;
  case 2:
    descuento =(importeAPagar *5)/100;
    importeAPagar =importeAPagar-descuento;
     console.log("Su pago fue en Debito");
     console.log(`El total a pagar es:$${importeAPagar}`);
    break;
  case 3:
    descuento =0;
    importeAPagar =importeAPagar-descuento;
    console.log("Su pago es en credito.");
    console.log(`El total a pagar es:$${importeAPagar}`);
    break;
  
  default:
    console.log("Forma de pago  invalida");
}
}