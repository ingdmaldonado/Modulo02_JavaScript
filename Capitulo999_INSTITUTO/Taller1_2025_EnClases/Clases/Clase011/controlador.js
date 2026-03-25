

/* `` */

{
    console.log(`Ciclo while`);

    /* cargar precio de productos 
    

    */

    let continuaCargando = "SI";

    /* 
        for => siempre conoce con anticipación el final 
        while => uno no sabe la cantidad de iteraciones que tendrá el ciclo
    */

    /* REGLAS DE NEGOCIO
    
        para las compras comprendidas 100.000 y 200.000 7% descuento directo
        para las compras comprendidas > 200.000 y 300.000 9% descuento directo
        para compras superiores a 300.000 11% descuento
    */

    
    let precioProducto = 0;

    let totalFactura = 0; // acumulación de los precios
    let cantidadProductos = 0; // contabilización de productos
    

    while(continuaCargando.toUpperCase() === "SI")
    {

        /* antes de salir, preguntar
        si desea continuar */

        // aqui cuento la cantidad productos //
        cantidadProductos = cantidadProductos + 1;

        // aqui solicito que ingrese el precio del producto //
        precioProducto = Number(prompt(`Ingrese Precio producto`));

        // aqui voy acumulando los precios
        totalFactura = totalFactura + precioProducto;

        // aqui voy mostrando los precios ingresados //
        console.log(`Precio ingresado ${precioProducto} Cant prod: ${cantidadProductos} y subTotal:${totalFactura}`);

        // siempre lo último que hacemos es preguntar si continua o no
        continuaCargando = prompt(`Desea Continuar ? (SI/NO)`);

    }

    let descuento = 0; // aqui registraré el descuento

    if((totalFactura >= 100000) && (totalFactura <= 200000))
    { // aqui llevaría el 7% de descuento
        descuento = (totalFactura * 7) /100;
    }
    else
    {
        if((totalFactura > 200000)&&(totalFactura <= 300000))
        {
            descuento = (totalFactura * 9) /100;
        }
        else
        { // aplico el 11%
            if(totalFactura > 300000)
            {
                descuento = (totalFactura * 11)/100;
            }
            else
            {
                descuento = 0
            }
        }
    }

    let totalAPagar = 0;

    totalAPagar = totalFactura - descuento;

    console.log(`Total Facturado: ${totalFactura} Descuento: ${descuento} y total pagar: ${totalAPagar}`);




  



    /* 
        si
        SI
        Si
        sI
    */


}