/*
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son: 
Catálogo de Productos 
codigoDeProductos 
Descripción 
x unidad 
1 Dogui x 21 kil. 
$ 
38.000,00 
(cantidadDeBolsas >= 5) y (cantidadDeBolsas 
<=10) 
cantidadDeBolsas >= 
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
comprar y que solo determine el importe total a pagar.
*/


{
let cantidadDeBolsas = 0;
let codigoDeProductos = 0;
let precioPorUnidad = 0;
let totalAPagar = 0;

codigoDeProductos = Number(prompt(`seleccione el código del producto: 
    1- dogui. 
    2- tiernitos.  
    3- dogpro`))

cantidadDeBolsas = Number(prompt(`indique la cantidad de bolsas que desea comprar`))


switch(codigoDeProductos)
{
    case 1:
        {
            if(cantidadDeBolsas >=5 && cantidadDeBolsas <= 10)
            {
                precioPorUnidad = 36000;
            }   
            else if(cantidadDeBolsas >= 11)
            {
                precioPorUnidad = 34000;
            }
            else
            {
                precioPorUnidad = 38000;
            }

            totalAPagar = cantidadDeBolsas * precioPorUnidad;
            console.log(`el total a pagar es de: $${totalAPagar}`)
            break;
        }
    case 2:
        {
            if(cantidadDeBolsas >=5 && cantidadDeBolsas <= 10)
            {
                precioPorUnidad = 29000;
            }   
            else if(cantidadDeBolsas >= 11)
            {
                precioPorUnidad = 27000;
            }
            else
            {
                precioPorUnidad = 31000;
            }

            totalAPagar = cantidadDeBolsas * precioPorUnidad;
            console.log(`el total a pagar es de: $${totalAPagar}`)
            break;
        }
    case 3:
        {
            if(cantidadDeBolsas >=5 && cantidadDeBolsas <= 10)
            {
                precioPorUnidad = 44000;
            }   
            else if(cantidadDeBolsas >= 11)
            {
                precioPorUnidad = 42000;
            }
            else
            {
                precioPorUnidad = 46000;
            }

            totalAPagar = cantidadDeBolsas * precioPorUnidad;
            console.log(`el total a pagar es de: $${totalAPagar}`)
            break;
        }
    default:
        {
            console.log(`el código no está disponible`)
            break;
        }
}
}