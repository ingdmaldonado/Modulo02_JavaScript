
{

    console.log("funcionnado");

    let precioProducto = 0;

     /* declaro e inicializo una variable
    donde totalizar los precios de los productos
    que un cliente esta llevando o comprando */
    let totalAPagar = 0;

    /* aqui declaro e inicializo una variable
    que me permitirá ir contabilizando los 
    productos que van pasando por la caja */
    let cantidadDeProductosComprados = 0;

    let continua = "SI"

    while(continua ==="SI")
    {
        /* mientras la variable continua === "SI" 
        se repetira todo este bloque de código.
        */
        precioProducto = Number(prompt(`Ingrese el precio del producto`));

        totalAPagar = totalAPagar + precioProducto;

        cantidadDeProductosComprados = cantidadDeProductosComprados + 1;

        continua = prompt("ud. desea continuar ? (SI/NO)");

    }

    console.log(`El Total a pagar es: ${totalAPagar}`);
    console.log(`Cantidad productos comprados: ${cantidadDeProductosComprados}`);

    /* ESTRUCTURAS REPETITIVAS 
    
    - Ciclo for
    - Ciclo While
    - Contadores
    - Acumuladores

    
    
    
    */

}