/*Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son:
Catálogo de Productos
Codigo Descripción x unidad
(cantidad >= 5) y (cantidad
<=10)
Cantidad >=
11
1 Dogui x 21 kil.
$
38.000,00 $ 36.000,00 $ 34.000,00
2
Tiernitos x 21
kil
$
31.000,00 $ 29.000,00 $ 27.000,00
3 Dogpro x 21 kil
$
46.000,00 $ 44.000,00 $ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.*/

{

    let codigoProducto = Number(prompt(`ingrese el codigo del producto 1) Dogui x 21 kil. 2) Tiernitos x 21 kil 3) Dogpro x 21 kil`));

    let cantidadBolsas = Number(prompt(`ingrese la cantidad de bolsas a comprar`));
    
    let precioUnitario = 0;
    let total = 0;
    if (codigoProducto === 1 && cantidadBolsas < 5) {
        precioUnitario = 38000;
        total = precioUnitario * cantidadBolsas;
    } else if (codigoProducto === 1 && cantidadBolsas >= 5 && cantidadBolsas <= 10) {
        precioUnitario = 36000;
        total = precioUnitario * cantidadBolsas;
    } else if (codigoProducto === 1 && cantidadBolsas >= 11) {
        precioUnitario = 34000;
        total = precioUnitario * cantidadBolsas;
    } else if (codigoProducto === 2 && cantidadBolsas < 5) {
        precioUnitario = 31000;
        total = precioUnitario * cantidadBolsas;
    } else if (codigoProducto === 2 && cantidadBolsas >= 5 && cantidadBolsas <= 10
    ) {
        precioUnitario = 29000;
        total = precioUnitario * cantidadBolsas;

    } else if (codigoProducto === 2 && cantidadBolsas >= 11) {
        precioUnitario = 27000;
        total = precioUnitario * cantidadBolsas;
    } else if (codigoProducto === 3 && cantidadBolsas < 5) {
        precioUnitario = 46000;
        total = precioUnitario * cantidadBolsas;
    } else if (codigoProducto === 3 && cantidadBolsas >= 5 && cantidadBolsas <= 10) {
        precioUnitario = 44000;
        total = precioUnitario * cantidadBolsas;
    } else if (codigoProducto === 3 && cantidadBolsas >= 11) {
        precioUnitario = 42000;
        total = precioUnitario * cantidadBolsas;
    }
    else {
        console.log(`El código es incorrecto`);
    }
    console.log(`El importe total a pagar es: $${total}`);
}