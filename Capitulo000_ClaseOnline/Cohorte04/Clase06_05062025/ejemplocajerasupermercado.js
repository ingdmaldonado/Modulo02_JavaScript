
/* Es ver
como sería la aplicación de un
pequeño sistema de registración
de ventas. de un mercadito pequeño
*/
{
    console.log("Mercadito DAR MAS !!!.");

    /* la cajera cobra unicamente 10 productos */

    let totalCobrado = 0; // la variable donde voy a ir acumulando los precios
    let precioProducto = 0; // esta es la variable que tiene el precio del producto

    for(let indice = 1;indice <= 4;indice = indice + 1)
    {
        //console.log(`esta es la iteración ${indice}`);
        precioProducto = Number(prompt(`Ing. precio producto ${indice}`));

        // acumulación de valores //
        totalCobrado = totalCobrado + precioProducto;

        // mientras voy cargando los productos los voy mostrando
        console.log(`Item Cargado ${indice} Precio ${precioProducto} SubTotal ${totalCobrado}`);
    }

    console.log(`Total a Cobrar es igual ${totalCobrado}`);

    /*
    COSAS A FAVOR:

        es un ciclo repetitivo clasico, uno sabe
        con exáctitud cuando comienza y cuando termina.
        "N" cantidad de repeticiones

    CONTRAS:

        - generalmente se usa cuando uno conoce previamente
        y con exactitud la cantidad de "iteraciones" que necesito
        realizar.
    
    */


}