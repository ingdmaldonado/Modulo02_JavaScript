/* Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son: 
Catálogo de Productos 
Codigo  Descripción         x unidad        (cantidad >= 5) y (cantidad <=10)      Cantidad >= 11
1       Dogui x 21 kil.     $ 38.000,00      $ 36.000,00                           $ 34.000,00
2       Tiernitos x 21 kil  $ 31.000,00      $ 29.000,00                           $ 27.000,00
3       Dogpro x 21 kil     $ 46.000,00      $ 44.000,00                           $ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar.
*/
{
let codigoDelProducto = Number(prompt(`Ingrese el código del producto (1: Dogui x 21 kil, 2: Tiernitos x 21 kil, 3: Dogpro x 21 kil):`));
let cantidadDeBolsas = Number(prompt(`Ingrese la cantidad de bolsas a comprar:`));

let precioUnitario;
let codigoValido = true;
switch (codigoDelProducto) {
    case 1:{ // Dogui
        if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) 
        {
            precioUnitario = 36000;
        } 
        else 
        {
            if (cantidadDeBolsas >= 11) 
            {
                precioUnitario = 34000;
            } 
            else 
            {
                precioUnitario = 38000;
            }
        }
        break;
    }
    case 2:{ // Tiernitos
        if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) 
        {
            precioUnitario = 29000;
        } 
        else 
        {
            if (cantidadDeBolsas >= 11) 
            {
                precioUnitario = 27000;
            } 
            else 
            {
                precioUnitario = 31000;
            }
        }
        break;
    }
    case 3:{ // Dogpro
        if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) 
        {
            precioUnitario = 44000;
        } 
        else 
        {
            if (cantidadDeBolsas >= 11) 
            {
                precioUnitario = 42000;
            } 
            else 
            {
                precioUnitario = 46000;
            }
        }
        break;
    }
    default:{
        console.log("Código de producto inválido.");
        codigoValido = false;
        break;
    }
}

if (codigoValido) {
    let totalAPagar = precioUnitario * cantidadDeBolsas;
    console.log(`Producto código ${codigoDelProducto}, cantidad: ${cantidadDeBolsas}`);
    console.log(`Precio unitario aplicado: ${precioUnitario}`);
    console.log(`Importe total a pagar: ${totalAPagar}`);
}
}