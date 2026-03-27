{
let rubro = prompt("Ingrese el rubro (vestimenta, perfumeria, libreria, electrodomesticos, calzado)");
let importe = prompt("Ingrese el importe de la compra");

let descuento = 0;
let tope = 0;

// Calcular descuento según rubro

if (rubro == "vestimenta") {
    descuento = importe * 0.20;
    tope = 80000;
} else if (rubro == "perfumeria") {
    descuento = importe * 0.20;
    tope = 80000;
} else if (rubro == "libreria") {
    descuento = importe * 0.30;
    tope = 90000;
} else if (rubro == "electrodomesticos") {
    descuento = importe * 0.15;
    tope = 70000;
} else if (rubro == "calzado") {
    descuento = importe * 0.20;
    tope = 80000;
}

if (descuento > tope) {
    descuento = tope;
}

let total = importe * 1 - descuento;

console.log("Rubro: " + rubro);
console.log("Importe de la compra: $" + importe);
console.log("Descuento aplicado: $" + descuento);
console.log("Total a pagar: $" + total);

}