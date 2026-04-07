/*
Ejercicio Nro. 02:
    Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
    el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento 
    del 15% como así también el importe restante final.
*/

{
    let importeTotalcompra = 0;
    let descuento = 0;
    let importeFinal = 0;

    importeTotalcompra = Number(prompt(`Ingrese el importe total de la compra`));

    //Aplicamos el descuento
    descuento = (importeTotalcompra*15)/100; 

    console.log(`Importe total de la compra $${importeTotalcompra}`);
    console.log(`Descuento del 15% $${descuento}`);

    //Aplicamos el importe final
    importeFinal = (importeTotalcompra - descuento);
    console.log(`Importe restantea Final $${importeFinal}`);
}