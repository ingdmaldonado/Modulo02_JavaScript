let importe = 0;
let descuento =15;
let importerestante= 0;
importe = Number(prompt("Ingrese el importe de la compra"));

descuento = importe * 15 / 100;
importerestante = importe - descuento;

console.log("El importe es: "+ importe);

console.log("el descuento es: " + descuento);

console.log("El importe restante es: " + importerestante);