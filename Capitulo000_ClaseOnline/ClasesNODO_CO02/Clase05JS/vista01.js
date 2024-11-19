
/* Resumen de lo que vimos

    - incorporar código js al html
    - bloques de código {}
    - estructuras de datos simples. 
        * string
        * numericas
    - estructuras condicionales
        * if/else
        * operadores ternarios
        * switch
    - javaScript es un lenguaje débilmente tipado

    - estructuras repetitivas clásicas
        * for
        * while
        * do while
        * contadores, acumuladores, calculo de porcentajes.
*/ 
{

    /* declaro e inicializo una variable
    donde totalizar los precios de los productos
    que un cliente esta llevando o comprando */
    let totalAPagar = 0;

    /* aqui declaro e inicializo una variable
    que me permitirá ir contabilizando los 
    productos que van pasando por la caja */
    let cantidadDeProductosComprados = 0;

    for(let iterador = 1; iterador <= 4;iterador = iterador + 1)
    {
        /* proceso que se repetirá tantas veces como el iterador nos indique
        o mientras se cumpla esa condición */

        let precioProducto = 0;

        precioProducto = Number(prompt(`Ingrese el precio del producto ${iterador}`));

        console.log(precioProducto);

        // acumulador //
        totalAPagar = totalAPagar + precioProducto;

        // contabilizando => contadores //
        cantidadDeProductosComprados = cantidadDeProductosComprados + 1;

        console.log(totalAPagar);
    }    
    
    /* al finalizar. estaría en condiciones 
    de mostrar los totales 
    */

    console.log(`La Cantidad de productos comprados es: ${cantidadDeProductosComprados}`);

    console.log(`El total a pagar es: ${totalAPagar}`);

    /* 
        primero: es una estructura
        que me permite repetir código cuando conozco
        de antemano, la cantidad de iteraciones que tengo
        que hacer. 
    */

}