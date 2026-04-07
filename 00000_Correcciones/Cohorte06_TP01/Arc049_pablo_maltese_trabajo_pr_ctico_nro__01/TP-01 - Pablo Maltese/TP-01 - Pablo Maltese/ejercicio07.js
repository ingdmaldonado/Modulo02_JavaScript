/*
    Ejercicio Nro. 07: Estructuras Condicionales (if/else)
    Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
    grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
    clientes. Las marcas con las que trabaja son:

                                         Catálogo de Productos
    =======================================================================================================
    Codigo   Descripción                x unidad    (cantidad >= 5) y (cantidad <=10)    Cantidad >=11
    =======================================================================================================
      1      Dogui x 21 kil.        $ 38.000,00               $ 36.000,00                  $ 34.000,00
      2      Tiernitos x 21 kil     $ 31.000,00               $ 29.000,00                  $ 27.000,00
      3      Dogpro x 21 kil        $ 46.000,00               $ 44.000,00                  $ 42.000,00
    =======================================================================================================

    Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
    comprar y que solo determine el importe total a pagar.
*/

{
    console.log('========================VENTAS DE ALIMENTOS PARA MASCOTA=========================');

    let codigoProducto = 0;
    let cantidadBolsas = 0;
    let importePorUnidad = 0;
    let importeEntre5y10 = 0;
    let importeMayorIgual11 = 0;
    let importeTotal = 0;

    codigoProducto = Number(prompt(`Ingrese el codigo de producto  (1 - Dogui x 21 kil.; 2 - Tiernitos x 21 kil; 3 - Dogpro x 21 kil)`));
    cantidadBolsas = Number(prompt(`Ingrese la cantidad de bolsas a comprar:`));

    //Seleccion
    switch(codigoProducto)
    {
        case 1:{
            console.log('Usted seleccionó la marca Dogui x 21 kil.');
            importePorUnidad = 38000;
            importeEntre5y10 = 36000;
            importeMayorIgual11 = 34000;
            break;
        }

        case 2:{
            console.log('Usted seleccionó la marca Tiernitos x 21 kil.');
            importePorUnidad = 31000;
            importeEntre5y10 = 29000;
            importeMayorIgual11 = 27000;
            break;
        }

        case 3:{
            console.log('Usted seleccionó la marca Dogpro x 21 kil.');
            importePorUnidad = 46000;
            importeEntre5y10 = 44000;
            importeMayorIgual11 = 42000;
            break;
        }

        default:{
            console.log('Código de producto inválido');
            importePorUnidad = 0;
            break;
        }
    }

    console.log('==================DETALLE=================');
    console.log(`Cantidad de bolsas: ${cantidadBolsas}`);

    //Validación de la seleccion
    if( cantidadBolsas >= 5 && cantidadBolsas <= 10)
    {
        importeTotal = (importeEntre5y10 * cantidadBolsas);
        console.log(`Importe por unidad: $${importeEntre5y10}`);
        console.log(`Importe total por la oferta de cantidad de bolsas a comprar entre 5 a 10: $${importeTotal}`);
    }else
    {
        if( cantidadBolsas >= 11 )
        {
            importeTotal = (importeMayorIgual11 * cantidadBolsas);
            console.log(`Importe por unidad: $${importeMayorIgual11}`);
            console.log(`Importe total por la oferta de cantidad de bolsas a comprar mayor a 10: $${importeTotal}`);
        }else{
            importeTotal = (importePorUnidad * cantidadBolsas);
            console.log(`Importe por unidad: $${importePorUnidad}`);
            console.log(`Importe total sin oferta: $${importeTotal}`);
        }
    }

}