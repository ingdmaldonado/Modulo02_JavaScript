/* Ejercicio N6 */



let importedeCompra = Number(prompt("Ingrese el importe de la compra:"));

if (importedeCompra <= 160000) {
    let descuento = importedeCompra * 0.50;
    let importeFinal = importedeCompra - descuento;
    console.log("El importe de su compra es: " + importedeCompra);
    console.log("El descuento aplicado es: " + descuento);
    console.log("El importe final a pagar es: " + importeFinal);
} else {
    console.log("El importe de su compra es: " + importedeCompra);
    console.log("Llego a su limite de descuento.");
}