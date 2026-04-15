/*
Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.
1: Dogui, 2: Tiernitos, 3: Dogpro. (Con descuentos por cantidad).
*/
{
    let codigo = 0;
    let cantidad = 0;

    codigo = Number(prompt("Ingrese código del producto (1: Dogui, 2: Tiernitos, 3: Dogpro):"));
    cantidad = Number(prompt("Ingrese la cantidad de bolsas:"));

    let precioUnitario = 0;
    let importeTotal = 0;

    if (codigo === 1) {
        if (cantidad >= 11) { precioUnitario = 34000; }
        else if (cantidad >= 5 && cantidad <= 10) { precioUnitario = 36000; }
        else { precioUnitario = 38000; }
    } else if (codigo === 2) {
        if (cantidad >= 11) { precioUnitario = 27000; }
        else if (cantidad >= 5 && cantidad <= 10) { precioUnitario = 29000; }
        else { precioUnitario = 31000; }
    } else if (codigo === 3) {
        if (cantidad >= 11) { precioUnitario = 42000; }
        else if (cantidad >= 5 && cantidad <= 10) { precioUnitario = 44000; }
        else { precioUnitario = 46000; }
    }

    importeTotal = precioUnitario * cantidad;

    if (precioUnitario === 0) {
        console.log("El código de producto ingresado es incorrecto.");
    } else {
        console.log(`Usted lleva ${cantidad} bolsas. El precio unitario es $${precioUnitario}. El importe total a pagar es $${importeTotal}`);
    }
}