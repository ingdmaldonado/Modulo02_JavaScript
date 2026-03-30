{
// 1. Pedir datos
let rubro = prompt("Ingrese el rubro (vestimenta, perfumeria, libreria, electrodomesticos, calzado):");
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

let descuento = 0;
let tope = 0;

// 2. Determinar descuento y tope según rubro
if (rubro === "vestimenta") {
    descuento = importe * 20/100;
    tope = 80000;
}

if (rubro === "perfumeria") {
    descuento = importe * 20/100;
    tope = 80000;
}

if (rubro === "libreria") {
    descuento = importe * 30/100;
    tope = 90000;
}

if (rubro === "electrodomesticos") {
    descuento = importe * 15/100;
    tope = 70000;
}

if (rubro === "calzado") {
    descuento = importe * 20/100;
    tope = 80000;
}

// 3. Aplicar tope si corresponde
if (descuento > tope) {
    descuento = tope;
}

// 4. Calcular total final
let totalFinal = importe - descuento;

// 5. Mostrar resultados
console.log("Rubro:", rubro);
console.log("Importe de la compra:", importe);
console.log("Descuento aplicado:", descuento);
console.log("Importe final:", totalFinal);

}