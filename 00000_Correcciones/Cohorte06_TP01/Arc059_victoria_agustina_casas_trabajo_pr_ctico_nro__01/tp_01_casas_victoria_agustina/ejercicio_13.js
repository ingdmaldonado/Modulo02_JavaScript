let rubro = 0;
rubro = Number(prompt("Indique el Rubro: 1=Vestimenta 2=Perfumería 3=Librería 4=Electrodomésticos 5=Calzado"));

let importeCompra = 0;
importeCompra = Number(prompt("Indique el importe de la compra: $"));

let descuentoAplicado = 0;
 
let porcentajeDescuento = 0;
let topeDescuento = 0;
let tipoRubro = 0;
 
switch (rubro) {
  //Vestimenta
  case 1:
    tipoRubro = "Vestimenta";
    porcentajeDescuento = 0.20;
    topeDescuento = 80000;
    break;
  //Perfumería
  case 2:
    tipoRubro = "Perfumería";
    porcentajeDescuento = 0.20;
    topeDescuento = 80000;
    break;
  //Librería
  case 3:
    tipoRubro  = "Librería";
    porcentajeDescuento = 0.30;
    topeDescuento = 90000;
    break;
  //Electrodomésticos
  case 4:
    tipoRubro = "Electrodomésticos";
    porcentajeDescuento = 0.15;
    topeDescuento = 70000;
    break;
  //Calzado
  case 5:
    tipoRubro = "Calzado";
    porcentajeDescuento = 0.20;
    topeDescuento = 80000;
    break;
  default:
    console.log("Rubro no válido.");
}
 
let descuentoCalculado = importeCompra * porcentajeDescuento;
let descuentoFinal= descuentoCalculado > topeDescuento ? topeDescuento : descuentoCalculado;
let importeFinal = importeCompra - descuentoFinal;
 
console.log("Rubro:", tipoRubro);
console.log("Importe de la compra: $", importeCompra);
console.log("Descuento aplicado: $" + descuentoFinal);
console.log("Importe final a pagar: $" + importeFinal);

