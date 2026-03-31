/*Ejercicio Nro. 07: Estructuras Condicionales (if/else) 
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son: 
Catálogo de Productos 
Codigo 
Descripción 
x unidad 
1 Dogui x 21 kil. 
$ 
38.000,00 
(cantidad >= 5) y (cantidad 
<=10) 
Cantidad >= 
11 
$ 36.000,00 
2 
Tiernitos x 21 
kil 
$ 
31.000,00 
$ 34.000,00 
$ 29.000,00 
3 Dogpro x 21 kil 
$ 
46.000,00 
$ 27.000,00 
$ 44.000,00 
$ 42.000,00 
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
comprar y que solo determine el importe total a pagar.*/

{
  let codigo = 0;
  let precio = 0;
  let cantidadDeBolsas = 0;
  let importeDeCompra = 0;

  codigo = Number(prompt("Ingrese el código correspondiente (1,2,3)"));
  cantidadDeBolsas = Number(prompt("Ingrese la cantidad de bolsas"));

  if (codigo === 1) {
    if (cantidadDeBolsas >= 11) {
        precio = 34000;
    } else if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) {
        precio = 36000;
    } else {
        precio = 38000;
    }
  }

  else if (codigo === 2) {
    if (cantidadDeBolsas >= 11) {
        precio = 27000;
    } else if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) {
        precio = 29000;
    } else {
        precio = 31000;
    }
  }

  else if (codigo === 3) {
    if (cantidadDeBolsas >= 11) {
        precio = 42000;
    } else if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) {
        precio = 44000;
    } else {
        precio = 46000;
    }
  }

  importeDeCompra = cantidadDeBolsas * precio;

  console.log(`Precio por unidad ${precio}`);
  console.log(`Cantidad ${cantidadDeBolsas}`);
  console.log(`Total a pagar ${importeDeCompra}`);
}