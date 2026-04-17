/*

Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son:
Catálogo de Productos
Codigo Descripción x unidad (cantidad >= 5) y (cantidad <=10) Cantidad >=11
1 Dogui x 21 kil.  $ 38.000,00        $ 36.000,00              $ 34.000,00
2 Tiernitos x 21 kil $ 31.000,00      $ 29.000,00              $ 27.000,00
3 Dogpro x 21 kil $ 46.000,00         $ 44.000,00              $ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.

*/

{
    let marcaAlimento = 0;

    marcaAlimento = Number(prompt(`Ingrese el codigo del producto 1-Dogui 2-Tiernitos 3-Dogpro`));

    let cantidadProducto = 0;
    cantidadProducto = Number(prompt(`Ingrese la cantidad de bolsas`)); 

    let precioUnitario = 0;
    let importeAPagar = 0;
    let operacionCorrecta = false;


    switch(marcaAlimento)
    {
        case 1: // Dogui 21 kilos
        {
            operacionCorrecta = true;
            if(cantidadProducto>= 11)
            {
                precioUnitario = 34000;
                
            }
            else
            {
                if((cantidadProducto <= 10) && (cantidadProducto >= 5))
                    precioUnitario = 36000;
                else
                {
                    precioUnitario = 38000;
                }
            }
            break;
        }
        case 2: //Tiernitos 21 kilos
        {
            operacionCorrecta = true;
            if(cantidadProducto>= 11)
            {
                precioUnitario = 27000;
                
            }
            else
            {
                if((cantidadProducto <= 10) && (cantidadProducto >= 5))
                    precioUnitario = 29000;
                else
                {
                    precioUnitario = 31000;
                }
            }
            break;
        }
        case 3: //Dogpro 21 kilos
        {
            operacionCorrecta = true;
            if(cantidadProducto>= 11)
            {
                precioUnitario = 42000;
                
            }
            else
            {
                if((cantidadProducto <= 10) && (cantidadProducto >= 5))
                    precioUnitario = 44000;
                else
                {
                    precioUnitario = 46000;
                }
            }
            break;
        }
        default:
        {
            operacionCorrecta = false;
            console.log (`Codigo incorrecto ingrese nuevamente`);
            break;
        }
    }
    
    importeAPagar = cantidadProducto * precioUnitario;
    
    if(operacionCorrecta)
    {
        console.log(`El total a pagar es ${importeAPagar}`)
    }
    else
    {
        console.log(`Error`);
    }

}