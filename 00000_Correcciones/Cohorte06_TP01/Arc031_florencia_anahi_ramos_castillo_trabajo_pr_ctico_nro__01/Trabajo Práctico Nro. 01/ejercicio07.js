/* Ejercicio Nro. 07: 
Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son: (Cuadro con catálogo de productos). Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.
*/


function calcularCompra() {

    // Ingreso de datos
    let codigo = Number(prompt("Ingrese el código del producto (1, 2 o 3)"));
    let cantidad = Number(prompt("Ingrese la cantidad de bolsas"));

    let precio = 0;

    // Determino el precio según código y cantidad
    if (codigo === 1) {

        if (cantidad >= 11) {
            precio = 34000;
        } else if (cantidad >= 5 && cantidad <= 10) {
            precio = 36000;
        } else {
            precio = 38000;
        }

    } else if (codigo === 2) {

        if (cantidad >= 11) {
            precio = 27000;
        } else if (cantidad >= 5 && cantidad <= 10) {
            precio = 29000;
        } else {
            precio = 31000;
        }

    } else if (codigo === 3) {

        if (cantidad >= 11) {
            precio = 42000;
        } else if (cantidad >= 5 && cantidad <= 10) {
            precio = 44000;
        } else {
            precio = 46000;
        }

    } else {
        console.log("Código inválido");
        return;
    }

    // Calculo total
    let total = precio * cantidad;

    // Muestro resultado
    console.log(`Precio por unidad: ${precio}`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`Total a pagar: ${total}`);
}