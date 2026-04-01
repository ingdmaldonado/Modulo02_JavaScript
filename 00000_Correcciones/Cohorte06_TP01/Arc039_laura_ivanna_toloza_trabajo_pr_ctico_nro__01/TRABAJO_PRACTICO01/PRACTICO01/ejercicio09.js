/* Ejercicio Nro. 09: Estructuras Condicionales (if/else)
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas.
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, se aplicará un descuento del 11% sobre el total de la compra.
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
 cantidad de pasajes
 importe pasaje
 total compra = cantidad de pasajes * importe pasaje */

let cantidadPasajes = 0;
cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes:"));

let importePasaje = 0;
importePasaje = Number(prompt("Ingrese el importe del pasaje:"));

let importeTotal = cantidadPasajes * importePasaje;
if (cantidadPasajes > 3 && importeTotal > 250000 && importeTotal <= 500000) {
    let descuento = (importeTotal * 11) / 100;
    importeTotal = importeTotal - descuento;
    console.log(`El importe total a pagar con descuento del 11% es: ${importeTotal}`);
}
else if (cantidadPasajes > 3 && importeTotal > 500000) {
    let descuento = (importeTotal * 15) / 100;
    importeTotal = importeTotal - descuento;
    console.log(`El importe total a pagar con descuento del 15(% es: ${importeTotal}`);
}
else {
    console.log(`El importe total a pagar es: ${importeTotal}`);
}
