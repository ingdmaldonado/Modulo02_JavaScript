

let importeTotal = 0;

importeTotal= Number(prompt('Ingresar importe total de su compra'));

console.log(importeTotal);

let descuento = 0;

descuento = (importeTotal * 15)/100;

let importeFinal = 0;

importeFinal = (importeTotal - descuento);

let textoFinal = `Importe Total: ${importeTotal} descuento: ${descuento} Total a Pagar: ${importeFinal}`;

console.log(textoFinal);

