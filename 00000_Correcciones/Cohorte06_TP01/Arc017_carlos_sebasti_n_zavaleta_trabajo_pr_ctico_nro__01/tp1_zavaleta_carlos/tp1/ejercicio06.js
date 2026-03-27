let importe = 0;
importe = Number(prompt("Ingrese el importe de la compra"));
let porcentajedescuento = 50;
let descuento = 0;
let totalcompra = 0;
descuento = importe * porcentajedescuento / 100;
if (descuento > 80000){
    descuento = 80000;
}
totalcompra = importe - descuento;
console.log("El importe inicial es: " + importe);
console.log("El descuento total de la compra es: " + descuento);
console.log("Total a pagar = " + totalcompra);
