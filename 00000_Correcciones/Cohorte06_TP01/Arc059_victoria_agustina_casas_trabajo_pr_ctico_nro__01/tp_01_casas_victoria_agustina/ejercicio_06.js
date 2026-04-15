let valorCompra = 0;
valorCompra = Number(prompt("Ingrese el valor de su compra:"));

let descuentoAplicado = valorCompra * 0.50;
let topeDescuento = 80000;
let descuentoFinalTotal= descuentoAplicado >= topeDescuento ? topeDescuento : descuentoAplicado;
let totalFinal = valorCompra - descuentoFinalTotal;
 

console.log("Importe de compra: $", valorCompra);

if (descuentoAplicado < topeDescuento) {
  console.log("Descuento aplicado: $", descuentoAplicado);
} 
else {
  console.log("Descuento aplicado: ", topeDescuento , "Tope Máximo de Descuento aplicado");
}

console.log("Total a pagar: $", totalFinal);


