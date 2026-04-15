// Solicitar el rubro y el importe de la compra
let rubro = prompt("Ingrese el rubro (Vestimenta, Perfumeria, Libreria, Electrodomesticos, Calzado):");
let compra = Number(prompt("Ingrese el importe de la compra:"));

let descuento = 0;
let topeMaximo = 0;

// Pasamos el rubro a minúsculas para que no haya problemas si escriben con mayusculas
let rubroMinuscula = rubro.toLowerCase();

// Calculamos el descuento correspondiente segun la tabla
if (rubroMinuscula === "vestimenta") {
    descuento = (compra * 20) / 100;
    topeMaximo = 80000;
} else if (rubroMinuscula === "perfumeria") {
    descuento = (compra * 20) / 100;
    topeMaximo = 80000;
} else if (rubroMinuscula === "libreria") {
    descuento = (compra * 30) / 100;
    topeMaximo = 90000;
} else if (rubroMinuscula === "electrodomesticos") {
    descuento = (compra * 15) / 100;
    topeMaximo = 70000;
} else if (rubroMinuscula === "calzado") {
    descuento = (compra * 20) / 100;
    topeMaximo = 80000;
} else {
    console.log("Error: El rubro ingresado no existe en la promocion.");
}

//Verificamos si el descuento supera el tope del rubro
if (descuento > topeMaximo) {
    descuento = topeMaximo; 
    console.log("Aviso: Se aplicó el tope máximo de descuento para este rubro.");
}

// Calculamos el importe final
let importeFinal = compra - descuento;

//Mostramos todos los resultados
console.log("Rubro: " + rubro);
console.log("Importe de la compra: $" + compra);
console.log("Descuento aplicado: $" + descuento);
console.log("Importe final a pagar: $" + importeFinal);