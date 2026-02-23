/* 

    - variables
    - declaracion de variables
    - asignación de valores a variables
    - forma recomendada de nombrar variables
        * carga semantica fuerte
        * upper case
        =
        
    - estructuras condicinales (if/else)

        ==   significa que comparo dos valores, pero pueden ser del distinto tipo

        === cuando quiero comparar dos valores pero que sean al mismo del mismo tipo

*/
{
    /* (1ro) creo una variable para 
    establecer el importe de la compra */

    let importeDeCompra = 0;
    importeDeCompra = Number(prompt("Ingrese el Importe de la Compra 1"));

    /* (2do) Calcular el descuento */

    let descuentoOneShot = 0;
    descuentoOneShot = (importeDeCompra * 50)/100;

    /* (3ro) aqui evaluaría si me paso del tope o no */

    let descuentoDefinitivo = 0;

    const TOPE = 80000 // esto vendría desde una base de datos.

    if(descuentoOneShot > TOPE)
    {
        descuentoDefinitivo = TOPE;
    }
    else
    {
        descuentoDefinitivo = descuentoOneShot;
    }

    /* (4to) Calcular el neto a pagar */

    let importeNetoAPagar = 0;
    importeNetoAPagar = importeDeCompra - descuentoDefinitivo;

    /* (5to) Mostrar los totales */
    console.log(`compra: ${importeDeCompra} descuento:${descuentoDefinitivo} neto a pagar: ${importeNetoAPagar}`);

}

{
    /*  if/else
        switch
        operador ternario
    */

    /* (1ro) creo una variable para 
    establecer el importe de la compra */

    let importeDeCompra = 0;
    importeDeCompra = Number(prompt("Ingrese el Importe de la Compra 2"));

    let descuentoDefinitivo = importeDeCompra >= 160000 ? 80000:(importeDeCompra*50)/100;

    let netoAPagar = importeDeCompra - descuentoDefinitivo;

    console.log(`Importe: ${importeDeCompra} descuento ${descuentoDefinitivo} neto a pagar ${netoAPagar}`);

}