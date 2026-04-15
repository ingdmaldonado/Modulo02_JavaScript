let importeCompra= 0; 

importeCompra = Number(prompt("Ingrese Importe de Compra"));

let porcentajeDescuento = 0.15;
let descuento = importeCompra * porcentajeDescuento;
let importeFinalTotal = importeCompra - descuento;

console.log("Ingrese Importe de Compra", importeCompra);
console.log("Descuento (15%) :", descuento);
console.log("Importe Final Total:", importeFinalTotal);