let rubro = prompt("Ingrese rubro (vestimenta, perfumeria, libreria, electrodomesticos, calzado)");
let importe = Number(prompt("Ingrese importe de la compra"));

let descuento = 0;
let tope = 0;

/*Aquí normalizo el texto para que se pueda leer si ponemos por ejemplo VESTIMENTA, Vestimenta,
básicamente para que no haya problemas al ser leidos */
rubro = rubro.toLowerCase();

// aquí determino el descuento y el tope
if (rubro === "vestimenta") {
    descuento = importe * 0.20;
    tope = 80000;

} else if (rubro === "perfumeria") {
    descuento = importe * 0.20;
    tope = 80000;

} else if (rubro === "libreria") {
    descuento = importe * 0.30;
    tope = 90000;

} else if (rubro === "electrodomesticos") {
    descuento = importe * 0.15;
    tope = 70000;

} else if (rubro === "calzado") {
    descuento = importe * 0.20;
    tope = 80000;

} else {
    console.log("Rubro inválido");
}

// aplico el tope
if (descuento > tope) {
    descuento = tope;
}

// calculo el total final
let totalFinal = importe - descuento;

// aquí muestro los resultados por consola
console.log("Rubro: " + rubro);
console.log("Importe: " + importe);
console.log("Descuento aplicado: " + descuento);
console.log("Total a pagar: " + totalFinal);