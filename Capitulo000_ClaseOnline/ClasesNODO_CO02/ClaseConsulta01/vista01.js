
/* 
    Compras con ONE SHOT 

    - TE ORGAN UN 50% de Descuento com
    compras. con un tope de reintegro
    de 80.000,00.

    50% de devolución de la compra. 160 mil pesos.

    Retorna el 50% de una compra. es decir la devolución
    tiene tope de 80.000,00. 

*/

{

    /* 
        el importe total de la compra
        el importe de descuento
        el total a pagar
    */

    let TOTAL; // declarar una variable
    TOTAL = 0; // inicializo

    let TotalXXX = 0;

    





    let totalDeCompra = 0; // declarar e inicializar en cero una variable

    let totalDescuento = 0; // declaro e inicializo en cero

    let totalAPagar = 0; // declaro e inicializo en cero

    const TOPE = 80000 // siempre se declaran e inicializan en el mismo momento.

    totalDeCompra = Number(prompt("Ingrese el Total de la Compra"));  // aqui le asigno el total de la compra

    totalDescuento = (totalDeCompra * 50)/100; // aqui realizo el cálculo del descuento

    if(totalDescuento > TOPE)
    { // sería el caso, donde me excedo del tope
        totalAPagar = totalDeCompra - TOPE;

        console.log(`El total de la compra efectuada es ${totalDeCompra}`);
        console.log(`El total del descuento efectuado es ${TOPE}`);
    }
    else
    { // sería el caso, donde estoy por debajo del tope.
        totalAPagar = totalDeCompra - totalDescuento;

        console.log(`El total de la compra efectuada es ${totalDeCompra}`);
        console.log(`El total del descuento efectuado es ${totalDescuento}`);
    }

    console.log(`El Neto a pagar con devolución ${totalAPagar}`);










}