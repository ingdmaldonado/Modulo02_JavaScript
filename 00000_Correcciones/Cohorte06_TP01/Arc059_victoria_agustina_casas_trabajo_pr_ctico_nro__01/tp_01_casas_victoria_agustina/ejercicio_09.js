let cantidadPasajes = 0;
cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes adquiridos:"));

let importePasaje   = 0;
importePasaje = Number(prompt("Ingrese el importe de cada pasaje:"));

let totalCompra = cantidadPasajes * importePasaje;
let descuento = 0;
 
if (cantidadPasajes > 3 && totalCompra > 500000) {
  descuento = totalCompra * 0.15;
} 
else if (cantidadPasajes > 3 && totalCompra > 250000) {
  descuento = totalCompra * 0.11;
}
else {
  console.log("Sin descuento aplicable.");
}

let totalFinal = totalCompra - descuento;
 
console.log("Cantidad de pasajes adquiridos: ", cantidadPasajes);
console.log("Importe por pasaje:  $", importePasaje);
console.log("Total compra: $", totalCompra);
console.log("Total final a pagar: $" + totalFinal);