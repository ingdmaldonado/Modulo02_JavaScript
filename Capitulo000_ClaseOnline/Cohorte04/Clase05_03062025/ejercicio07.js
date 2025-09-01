/* 
Realice un programa en JavaScript que permita 
ingresar el código del producto 
y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.

    1 => DOGUI = 38.000,00 (unidad) 36,000,00 (5 a 10) 34000,00 >= 11
    2 => TIERNITOS = 31.000,00 29.000,00 27.000,00
    3 => DOGPRO = 46.000,00 44.000,00 Y 42.000
*/

{
    console.log(`la aplicación está corriendo`);

    /* Entrada para este sistema / aplicación.
        1 => codigo del producto, codigo de barras que se quiere facturar
        2 => cantidad de elementos de ese producto
        
        codigo => a todo número, o combinacion de letras y numeros
        que me permiten identificar "UNIVOCAMENTE" un producto.

        DNI
        PATENTE
        CODIGO DE BARRAS
        CODIGO PROPIO
    */

    let codigoProducto = 0; // 1,2,3 ...
    let cantidadProducto = 0; // 1,2, 10, 20.

    codigoProducto = Number(prompt(`Ing. codigo producto:`));
    cantidadProducto = Number(prompt(`Indique cantidad:`));

    nombreProductoFacturado = ``;
    precioProductoFacturado = 0; //

    // variable discreta => switch (1,2,3) //

    switch(codigoProducto)
    {
        case 1: // DOGUI
            {
                nombreProductoFacturado = `DOGUI`;

                if((cantidadProducto >= 1)&&(cantidadProducto < 5))
                {
                    precioProductoFacturado = 38000;
                }
                else
                {
                    if((cantidadProducto >= 5)&&(cantidadProducto <= 10))
                    {
                        precioProductoFacturado = 36000;
                    }
                    else
                    {
                        if(cantidadProducto >= 11)
                        {
                            precioProductoFacturado = 34000;
                        }                                        
                    }
                }
                break;
            }
        case 2: // TIERNITOS
            {
                nombreProductoFacturado = `TIERNITOS`;

                 if((cantidadProducto >= 1)&&(cantidadProducto < 5))
                {
                    precioProductoFacturado = 31000;
                }
                else
                {
                    if((cantidadProducto >= 5)&&(cantidadProducto <= 10))
                    {
                        precioProductoFacturado = 29000;
                    }
                    else
                    {
                        if(cantidadProducto >= 11)
                        {
                            precioProductoFacturado = 27000;
                        }                                        
                    }
                }

                break;
            }
        case 3: // DOGPRO
            {
                nombreProductoFacturado = `DOGPRO`;
                break;
            }
        default: // ERROR
            {
                nombreProductoFacturado = `ERROR - CODIGO INEXISTENTE`;
                break;
            }
    }


    /* tengo que tratar de hacer el proceso
    de calculo de la factura en un solo lugar  
    */

    let importeFactura = cantidadProducto * precioProductoFacturado;

    /* esa ecuación, o ese calculo está en función 
    de dos parametros. 1) producto que eligio y otra
    es la cantidad */


    /* importeFactura = precioProducto * cantidadProducto */

    console.log(`Codigo: ${codigoProducto} y Cantidad:${cantidadProducto} Nombre: ${nombreProductoFacturado} Precio: ${precioProductoFacturado} Total a Pagar: ${importeFactura}`);

}