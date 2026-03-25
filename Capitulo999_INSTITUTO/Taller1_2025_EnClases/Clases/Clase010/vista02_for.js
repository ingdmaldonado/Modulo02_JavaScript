
/* Realizaremos
una aplicación para una despensa, donde
el cajero siempre cobra 5 productos. */

{
    console.log(`Bienvenidos a Despensa San Cayetano`);


    let totalACobrar = 0;

    for(let j = 1; j <= 5; j = j + 1)
    {
        console.log(`Cargando producto ${j}`);

        /* creando una variable dentro del ciclo */
        let precioProducto = Number(prompt(`Ing. Precio del producto ${j} `));

        /* en este paso y antes de salir del ciclo for
        lo que haremos es ir acumulando los precios
        de los productos que vamos cobrando */

        // acumulador 
        totalACobrar = totalACobrar + precioProducto;

        /* voy visualizando los subtotales */
        console.log(`producto ${j} - precio: ${precioProducto} y subtotal: ${totalACobrar}`);

    }

    /* esto se produce a la salida del ciclo for */

    let descuento = 0;

    if((totalACobrar >= 0) && (totalACobrar <= 50000))
    {
        descuento = totalACobrar * 10/100;
    }
    else
    {
         if((totalACobrar >50000) && (totalACobrar <= 100000))
         {
            descuento = totalACobrar * 15/100;
         }
         else
         {
            descuento = totalACobrar * 20/100;
         }
    }

    let totalNetoAPagar = totalACobrar - descuento;

    console.log(`Total a Pagar ${totalNetoAPagar}`);



}