//ejercicio6

let totalCompra = parseFloat(prompt("Ingrese el total de la compra"));
let descuento = totalCompra * 0.5;

if (descuento > 80000) {
    descuento = 80000;
}
console.log("El total de la compra es: ", totalCompra);
console.log("El descuento aplicado es: ", descuento); 
console.log("El total a pagar es: ", (totalCompra - descuento));