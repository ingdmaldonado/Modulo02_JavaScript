let cantidad = Number(prompt("Ingrese cantidad de pasajes"));
let precio = Number(prompt("Ingrese precio por pasaje"));

// calculo el total
let total = cantidad * precio;

let descuento = 0;


if (cantidad > 3 && total > 500000) {
    descuento = total * 0.15;
} else if (cantidad > 3 && total > 250000) {
    descuento = total * 0.11;
}

//calculo el total final
let totalFinal = total - descuento;

console.log("Cantidad de pasajes: " + cantidad);
console.log("Precio por pasaje: " + precio);
console.log("Total: " + total);
console.log("Descuento: " + descuento);
console.log("Total a pagar: " + totalFinal);