// Ejercicio N9

let cantidadPasajes = 0;

let importePasaje = 100000;

let totalCompra = cantidadPasajes * importePasaje;

cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes que desea comprar: "));

totalCompra = cantidadPasajes * importePasaje;

if (totalCompra >= 500000) {
    let descuento = totalCompra * 0.15;
    let totalConDescuento = totalCompra - descuento;
    console.log("Se aplicó un descuento del 15% sobre el total de la compra.");
    console.log("El total de la compra con descuento es: " + totalConDescuento.toFixed(2) + " pesos.");
} else if (totalCompra >= 250000) {
    let descuento = totalCompra * 0.11; // 11% de descuento
    let totalConDescuento = totalCompra - descuento;
    console.log("Se aplicó un descuento del 11% sobre el total de la compra.");
    console.log("El total de la compra con descuento es: " + totalConDescuento.toFixed(2) + " pesos.");
} else {
    console.log("No se aplicó ningún descuento.");
    console.log("El total de la compra es: " + totalCompra.toFixed(2) + " pesos.");
}
