/*
Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente 
con tres grandes marcas de alimentos para perros. Realice un programa que permita ingresar 
el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar.
*/
//solicitar el codigo del producto//
let codigo = 0;
codigo = Number(prompt("Ingrese el código del producto (1 - Dogui, 2 - Tiernitos, 3 - Dogpro):"));
//solicitar la cantidad de bolsas//
let cantidad = 0;
cantidad = Number(prompt("Ingrese la cantidad de bolsas a comprar:"));
//variables para guardar el precio unitario y el total//
let precioUnitario = 0;
let totalPagar = 0;
//determinar el precio según el código y la cantidad (if/else)//
if (codigo === 1) {                    // Dogui
    if (cantidad >= 11) {
        precioUnitario = 34000;
    } else if (cantidad >= 5) {
        precioUnitario = 36000;
    } else {
        precioUnitario = 38000;
    }
} else if (codigo === 2) {             // Tiernitos
    if (cantidad >= 11) {
        precioUnitario = 27000;
    } else if (cantidad >= 5) {
        precioUnitario = 29000;
    } else {
        precioUnitario = 31000;
    }
} else if (codigo === 3) {             // Dogpro
    if (cantidad >= 11) {
        precioUnitario = 42000;
    } else if (cantidad >= 5) {
        precioUnitario = 44000;
    } else {
        precioUnitario = 46000;
    }
} else {
    console.log("Código de producto incorrecto. Solo se permiten 1, 2 o 3.");
}
//calcular el total solo si el código era válido//
if (precioUnitario > 0) {
    totalPagar = precioUnitario * cantidad;
    
    //mostrar resultados//
    console.log(`Producto elegido (código ${codigo}): $${precioUnitario} por unidad`);
    console.log(`Cantidad comprada: ${cantidad} bolsas`);
    console.log(`Total a pagar: $${totalPagar}`);
}