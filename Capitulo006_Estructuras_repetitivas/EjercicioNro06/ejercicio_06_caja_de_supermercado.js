
/* EJERCICIO NRO. 06
    Realizar un proceso que permita cargar (tipo caja de supermercado)
     los productos comprados por los clientes de un pequeño comercio, 
     donde el cajero irá introduciendo el precio de los productos 
     y al final de ello visualizar el Total. Realizar este proceso 
     con una estructura repetitiva para 8 productos.
*/

{

    /* 
        total de factura es una variable 
        donde iré acumulando los precios de los
        productos que voy registrando, debe estar
        fuera del ciclo repetitivo porque debe
        ser global al cuerpo del ciclo.
        */
    let totalFactura = 0;

    for(let i = 1;i <= 8;i=i+1)
    {
        /* declaro una variable y la inicializo en 0,
        en esta variable iré solicitando que me ingrese
        el precio de los productos 
        Esta variable se declarará e inicializará en cada
        paso del ciclo. en cada iteración.
        */

        let precioProducto = 0;
        
        /* solicito al usuario ingresar el precio del producto y lu guardo
        justamente en una variable que se llama precioProducto */

        precioProducto = Number(prompt(`Ingrese el Precio del Producto ${i}`));

        /* antes de comenzar la siguiente iteración
        la guardo y acumulo en la variable totalFactura */

        totalFactura = totalFactura + precioProducto;

        /* visualizo el producto registrado */
        console.log(`Producto Registrado:= ${i} valor ${precioProducto}`);

    }

    /* Muestro el total del los Productos */
    console.log(`El Total de la Factura:= ${totalFactura}`);

}