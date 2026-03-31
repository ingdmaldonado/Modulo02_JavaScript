/*Ejercicio Nro. 07: Estructuras Condicionales (if/else)

Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son:
Catálogo de Productos
Codigo 1: Dogui x 21Kg, x unidad $38.000 , x cantidad >=5 y <=10 $36.000, x cantidad >=11 $34.000 

Codigo 2: Tiernitos x 21Kg, x unidad $31.000 , x cantidad >=5 y <=10 $29.000, x cantidad >=11 $27.000 

Codigo 3: Dogpro x 21Kg, x unidad $46.000 , x cantidad >=5 y <=10 $44.000, x cantidad >=11 $42.000 

Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar. */ 


let codigo = 0;
codigo = Number(prompt("Ingrese el codigo del producto 1 (Dogui), 2 (Tiernitos) o 3 (Dogpro):"));

let cantidad = 0;
cantidad = Number(prompt("Ingrese la cantidad de bolsas:"));

let precioUnitario = 0;


if (codigo === 1) {
    if (cantidad >= 11) {
        precioUnitario = 34000;
    } else if (cantidad >= 5) {
        precioUnitario = 36000;
    } else {
        precioUnitario = 38000;
    }
} else if (codigo === 2) {
    if (cantidad >= 11) {
        precioUnitario = 27000;
    } else if (cantidad >= 5) {
        precioUnitario = 29000;
    } else {
        precioUnitario = 31000;
    }
} else if (codigo === 3) {
    if (cantidad >= 11) {
        precioUnitario = 42000;
    } else if (cantidad >= 5) {
        precioUnitario = 44000;
    } else {
        precioUnitario = 46000;
    }
} else {
    console.log("Código invalido");
}


let total = precioUnitario * cantidad;

console.log("Precio por unidad:", precioUnitario);
console.log("Cantidad:", cantidad);
console.log("Total a pagar:", total);