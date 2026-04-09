/*
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que 
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando 
de promover las ventas.
-) Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, 
se aplicará un descuento del 11% sobre el total de la compra.
-) Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, 
se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
-) cantidad de pasajes
-) importe pasaje
-) total compra = cantidad de pasajes * importe pasaje
*/

let cantidadpasajes = Number(prompt("Ingrese la cantidad de pasajes"));
let importepasaje = Number(prompt("Ingrese el importe de cada pasaje"));

let totalcompra = cantidadpasajes * importepasaje;
let descuento = 0;

if (cantidadpasajes > 3 && totalcompra > 500000) {
    descuento = totalcompra * 0.15;
} else {
    if (cantidadpasajes > 3 && totalcompra > 250000) {
        descuento = totalcompra * 0.11;
    } else {
        descuento = 0;
    }
}

let totalpagar = totalcompra - descuento;

console.log("Cantidad de pasajes:", cantidadpasajes);
console.log("Importe por pasaje:", importepasaje);
console.log("Total de la compra:", totalcompra);
console.log("Descuento aplicado:", descuento);
console.log("Total a pagar:", totalpagar);