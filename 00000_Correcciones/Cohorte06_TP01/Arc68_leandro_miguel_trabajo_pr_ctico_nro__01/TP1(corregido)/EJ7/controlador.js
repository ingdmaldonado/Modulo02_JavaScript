/* Ejercicio N7 */

let codigoProducto = Number(prompt("Ingrese el codigo del producto:")) ;

let cantidadProducto = Number(prompt("Ingrese la cantidad del producto:"));

let precioProducto = 0;

if (codigoProducto === 1 && cantidadProducto < 5) {

    precioProducto = 38000;
    console.log("El precio de su producto por unidad es: " + precioProducto);

} else if (codigoProducto === 1 && cantidadProducto >= 5 && cantidadProducto <= 10) {
    precioProducto = 36000;
    console.log("El precio de su producto por unidad es: " + precioProducto);
} else if (codigoProducto === 1 && cantidadProducto > 10) {
    precioProducto = 34000;
    console.log("El precio de su producto por unidad es: " + precioProducto);
}

if (codigoProducto === 2 && cantidadProducto < 5) {

    precioProducto = 38000;
    console.log("El precio de su producto por unidad es: " + precioProducto);

} else if (codigoProducto === 2 && cantidadProducto >= 5 && cantidadProducto <= 10) {
    precioProducto = 29000;
    console.log("El precio de su producto por unidad es: " + precioProducto);
} else if (codigoProducto === 2 && cantidadProducto > 10) {
    precioProducto = 27000;
    console.log("El precio de su producto por unidad es: " + precioProducto);
}      

if (codigoProducto === 3 && cantidadProducto < 5) {

    precioProducto = 38000;
    console.log("El precio de su producto por unidad es: " + precioProducto);           

} else if (codigoProducto === 3 && cantidadProducto >= 5 && cantidadProducto <= 10) {   
    precioProducto = 44000;
    console.log("El precio de su producto por unidad es: " + precioProducto);
} else if (codigoProducto === 3 && cantidadProducto > 10) {
    precioProducto = 42000;
    console.log("El precio de su producto por unidad es: " + precioProducto);
} 
