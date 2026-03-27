// PEDIMOS LOS DATOS
let cantidad = parseFloat(prompt("Ingrese la cantidad de pasajes: "));
let precio = parseFloat(prompt("Ingrese el precio por pasaje"));

// CALCULAMOS EL TOTAL
let total = cantidad * precio;

let descuento = 0;

// CONDICIONES
if (cantidad > 3 && total > 500000) {
    descuento = total * 0.15;
} else if (cantidad > 3 && total > 250000) {
    descuento = total * 11;
}

let totalFinal = total - descuento

console.log("Cantidad de pasajes: " + cantidad);
console.log("Precio por pasaje: $" + precio);
console.log("Total sin descuento: $" + total.toFixed(2));
console.log("Descuento aplicado: $" + descuento.toFixed(2));
console.log("Total a pagar: $" + totalFinal.toFixed(2));