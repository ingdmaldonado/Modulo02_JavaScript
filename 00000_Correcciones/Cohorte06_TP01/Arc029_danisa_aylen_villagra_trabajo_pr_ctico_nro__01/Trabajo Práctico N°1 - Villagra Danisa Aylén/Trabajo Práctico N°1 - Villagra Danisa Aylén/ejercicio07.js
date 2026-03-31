/*Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son:
Catálogo de Productos 
- Codigo - Descripción         - x unidad    - (cantidad >= 5) y (cantidad <=10) - (Cantidad >= 11)
    1      Dogui x 21 kil.      $ 38.000,00               $ 36.000,00               $ 34.000,00
    2      Tiernitos x 21 kil.  $ 31.000,00               $ 29.000,00               $ 27.000,00 
    3      Dogpro x 21 kil.     $ 46.000,00               $ 44.000,00               $ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar.*/

{
    let codigoProducto = Number(prompt(`Ingrese el código del producto: 1 - Dogui x 21Kg. 2 - Tiernitos x 21Kg. - 3 Dogpro x 21Kg.`));

    let cantidadBolsas = Number(prompt(`Ingrese la cantidad de bolsas del producto:`));

    switch(codigoProducto)
    {
        case 1 :
            {
                console.log(`Producto: Dogui x 21Kg`);
                console.log(`Cantidad: ${cantidadBolsas}`);
                if(cantidadBolsas <= 4)
                {
                    let precioUnitario = 38000;
                    let importeMinorista = (precioUnitario * cantidadBolsas);
                    console.log(`Importe a pagar: ${importeMinorista}`)
                }
                else
                {
                    if((cantidadBolsas >= 5 && cantidadBolsas <= 10))
                    {
                        let precioUnitario = 36000;
                        let importeMedio = (precioUnitario * cantidadBolsas);
                        console.log(`Importe a pagar: ${importeMedio}`)
                    }
                    else
                    {
                        if(cantidadBolsas >= 11)
                        {
                            let precioUnitario = 34000;
                            let importeMayorista = (precioUnitario * cantidadBolsas);
                            console.log(`Importe a pagar: ${importeMayorista}`)
                        }
                    }
                }
                break;
            }
        case 2:
            {
                console.log(`Producto: Tiernitos x 21Kg`);
                console.log(`Cantidad: ${cantidadBolsas}`);
                if(cantidadBolsas <= 4)
                {
                    let precioUnitario = 31000;
                    let importeMinorista = (precioUnitario * cantidadBolsas);
                    console.log(`Importe a pagar: ${importeMinorista}`)
                }
                else
                {
                    if((cantidadBolsas >= 5 && cantidadBolsas <= 10))
                    {
                        let precioUnitario = 29000;
                        let importeMedio = (precioUnitario * cantidadBolsas);
                        console.log(`Importe a pagar: ${importeMedio}`)
                    }
                    else
                    {
                        if(cantidadBolsas >= 11)
                        {
                            let precioUnitario = 27000;
                            let importeMayorista = (precioUnitario * cantidadBolsas);
                            console.log(`Importe a pagar: ${importeMayorista}`)
                        }
                    }
                }
                break;
            }
        case 3:
            {
                console.log(`Producto: Dogpro x 21Kg`);
                console.log(`Cantidad: ${cantidadBolsas}`);
                if(cantidadBolsas <= 4)
                {
                    let precioUnitario = 46000;
                    let importeMinorista = (precioUnitario * cantidadBolsas);
                    console.log(`Importe a pagar: ${importeMinorista}`)
                }
                else
                {
                    if((cantidadBolsas >= 5 && cantidadBolsas <= 10))
                    {
                        let precioUnitario = 44000;
                        let importeMedio = (precioUnitario * cantidadBolsas);
                        console.log(`Importe a pagar: ${importeMedio}`)
                    }
                    else
                    {
                        if(cantidadBolsas >= 11)
                        {
                            let precioUnitario = 42000;
                            let importeMayorista = (precioUnitario * cantidadBolsas);
                            console.log(`Importe a pagar: ${importeMayorista}`)
                        }
                    }
                }
                break;
            }
        default:
            {
                console.log(`Código de producto incorrecto, ingrese nuevamente.`)
            }
    }
}