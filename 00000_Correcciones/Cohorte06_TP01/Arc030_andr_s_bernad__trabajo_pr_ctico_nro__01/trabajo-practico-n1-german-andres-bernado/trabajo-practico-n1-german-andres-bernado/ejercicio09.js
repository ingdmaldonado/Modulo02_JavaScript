/*Ejercicio Nro. 09: Estructuras Condicionales (if/else)

Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando
de promover las ventas.

* Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
se aplicará un descuento del 11% sobre el total de la compra.

* Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,
se aplicará un descuento del 15% sobre el total de la compra.

El Sistema debe registrar mínimamente estas variables:

* cantidad de pasajes
* importe pasaje
* total compra = cantidad de pasajes * importe pasaje. */ 


let pasajes = 0;
pasajes = Number(prompt("Ingrese la cantidad de pasajes:"));

let precioPasaje = 0;
precioPasaje = Number(prompt("Ingrese el precio del pasaje:"));

let total = pasajes * precioPasaje;

let descuento = 0;

if (pasajes > 3 && total > 500000) {
    descuento = total * 0.15;
} else if (pasajes > 3 && total > 250000) {
    descuento = total * 0.11;
}

let totalFinal = total - descuento;

console.log("Cantidad de pasajes:", pasajes);
console.log("Precio por pasaje:", precioPasaje);
console.log("Total de la compra:", total);
console.log("Descuento aplicado:", descuento);
console.log("Total a pagar:", totalFinal);

