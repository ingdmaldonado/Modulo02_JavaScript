
/*

    tenemos que hacer un programa
    que a partir del importe de una compra. 
    calcule el 50% de descuento de la compra.
    siempre y cuando no se pase del tope
    que en este caso, el tope es 

    Si compra 100.000 => 50.000 de descuento

    Si compra 160.000 => 80.000 de descuento

    Si compra 200.000 => 80.000 de descuento


*/

{

    /* 1ro) ingresar el importe de la compra */

    let importeDeCompra = 0;

    importeDeCompra = Number(prompt("Ingrese el valor de la compra"));

    let descuento = (importeDeCompra * 50)/100;

    let descuentoDefinitivo = 0;

    if(descuento >= 80000)
    {
        descuentoDefinitivo = 80000; // aqui estoy fijando el tope
    }
    else
    {
        descuentoDefinitivo = descuento;
    }
    console.log(`Importe de Compra ${importeDeCompra} descuento aplicado ${descuentoDefinitivo}`);




}