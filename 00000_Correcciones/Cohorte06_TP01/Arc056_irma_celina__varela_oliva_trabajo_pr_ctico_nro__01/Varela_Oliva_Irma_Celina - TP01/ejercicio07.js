/* Ejercicio Nro. 07: 

Estructuras Condicionales (if/else) 
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son: 

                                    Catálogo de Productos 
Codigo           Descripción             x unidad           (cantidad >= 5) y (cantidad <=10)         Cantidad >= 11
1               Dogui x 21 kil.         $ 38.000,00                    $ 36.000,00                      $ 34.000,00
2              Tiernitos x 21 kill      $ 31.000,00                    $ 29.000,00                      $ 27.000,00 
3               Dogpro x 21 kil         $ 46.000,00                    $ 44.000,00                      $ 42.000,00 

Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
comprar y que solo determine el importe total a pagar. 

*/

{
    let codigoProducto = 0;
    codigoProducto = Number(prompt(`Ingrese el Codigo del producto: 1 - Dogui ; 2 - Tiernitos ; 3 - Dogpro`));

    let cantidadBolsas = 0;
    cantidadBolsas = Number(prompt(`Ingrese la cantidad de bolsas a comprar:`));

    console.log(`Codigo del producto: ${codigoProducto} - Cantidad de bolsas a comprar: ${cantidadBolsas}`);

    let importeTotal = 0;

    //dogui
    if((codigoProducto === 1) && (cantidadBolsas < 5))
    {
        importeTotal = cantidadBolsas * 38000;
    } else {
        if((codigoProducto === 1) && ((cantidadBolsas >= 5) && (cantidadBolsas <= 10))){
            importeTotal = cantidadBolsas * 36000;
        } else {
            if((codigoProducto === 1) && (cantidadBolsas >= 11))
              importeTotal = cantidadBolsas * 34000;
        }
    }

    //tiernitos
    if((codigoProducto === 2) && (cantidadBolsas < 5))
    {
        importeTotal = cantidadBolsas * 31000;
    } else {
        if((codigoProducto === 2) && ((cantidadBolsas >= 5) && (cantidadBolsas <= 10))){
            importeTotal = cantidadBolsas * 29000;
        } else {
            if((codigoProducto === 2) && (cantidadBolsas >= 11))
              importeTotal = cantidadBolsas * 27000;
        }
    }

    //dogpro
    if((codigoProducto === 3) && (cantidadBolsas < 5))
    {
        importeTotal = cantidadBolsas * 46000;
    } else {
        if((codigoProducto === 3) && ((cantidadBolsas >= 5) && (cantidadBolsas <= 10))){
            importeTotal = cantidadBolsas * 44000;
        } else {
            if((codigoProducto === 3) && (cantidadBolsas >= 11))
              importeTotal = cantidadBolsas * 42000;
        }
    }

    console.log(`Importe total a pagar: ${importeTotal}`);

}