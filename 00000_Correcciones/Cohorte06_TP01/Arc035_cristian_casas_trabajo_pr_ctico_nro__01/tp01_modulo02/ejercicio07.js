/*
Ejercicio Nro. 07: Estructuras Condicionales (if/else)
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
comprar y que solo determine el importe total a pagar.
*/

// Solicitar codigo y cantidad
let codigo = 0;
let cantidad = 0;
codigo = Number(prompt(`Ingresar codigo del producto (1, 2, 3):`));
cantidad = Number(prompt(`Ingresar cantidad a comprar:`));

// Determinar el importe total a pagar

let precioUnitario = 0;
if(codigo===1) {
    if(cantidad<5) {
        precioUnitario = 38000;
    } else if(cantidad>=5 && cantidad<=10) {
        precioUnitario = 36000;
    } else if(cantidad>=11) {
        precioUnitario = 34000;
    }
} else if(codigo===2) {
    if(cantidad<5) {
        precioUnitario = 31000;
    } else if(cantidad>=5 && cantidad<=10) {
        precioUnitario = 29000;
    } else if(cantidad>=11) {
        precioUnitario = 27000;
    }
} 
else if(codigo===3) {
    if(cantidad<5) {
        precioUnitario = 46000;
    } else if(cantidad>=5 && cantidad<=10) {
        precioUnitario = 44000;
    } else if(cantidad>=11) {
        precioUnitario = 42000;
    }
}

let importeTotal = precioUnitario * cantidad;

console.log(`Codigo del producto: ${codigo}`);
console.log(`Cantidad a comprar: ${cantidad}`);
console.log(`Precio unitario: ${precioUnitario}`);
console.log(`Importe total a pagar: ${importeTotal}`);

