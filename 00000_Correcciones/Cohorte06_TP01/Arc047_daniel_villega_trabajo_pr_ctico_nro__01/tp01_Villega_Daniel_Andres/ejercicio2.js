/*  ejercicio 2
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.*/

{
    let importeDeCompra=0;

    importeDeCompra = Number(prompt(`ingresar importe total de compra`));

    console.log (importeDeCompra);

    let descuento=(importeDeCompra *15)/100;

    console.log (descuento);

    let iporteTotalDeCompra = 0;

    iporteTotalDeCompra=importeDeCompra-descuento;

    console.log(`Importe Compra ${importeDeCompra} descuento de 15%: ${descuento} Total a pagar: ${iporteTotalDeCompra}`);
    
    


}