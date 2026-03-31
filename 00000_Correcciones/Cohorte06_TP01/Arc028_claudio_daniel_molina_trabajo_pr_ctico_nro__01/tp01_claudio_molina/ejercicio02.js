

let importeCompra = Number(prompt("Ingrese el importe total de la compra:"));

let descuento = (importeCompra * 15) / 100;
let importeFinal = importeCompra - descuento;
console.log(`El Importe total de la compra es ${importeCompra}`);
console.log(`El Descunto del 15% es: ${descuento}`);
console.log(`El Importe final a pagar por el cliente es: ${importeFinal}`);



