
/*
    Deseamos realizar una aplicación para una cajera
    de un supermercado. para que le permita cobrar los
    productos a las personas que va atendiendo.

    Al finalizar la carga. la cajera tiene
    3 opciones de cobro.

    1 = Efectivo => mismo precio
    2 = Tarjeta de Credito. 12% recargo
    3 = Transferencia. 3.5% recargo

*/

{

    let continuaCobrandoClientes = 'SI';
    let contadorDeClientes = 0;
    let totalGeneralDeCaja = 0;

    // Este es el ciclo repetitivo de Clientes
    while(continuaCobrandoClientes === 'SI' || continuaCobrandoClientes === 'si')
    {
        contadorDeClientes++; // contador de clientes.

        console.log(`Cobrando al Cliente Nro. ${contadorDeClientes}`);

        let continuaCargando = 'SI';

        let contadorDeProductos = 0;
        let precioProducto = 0; // aqui ingresare el precio del producto
        let totalCobrado = 0;  // aqui ire TOTABILIZANDO = ACUMULANDO los productos que voy cobrando
    
        // Este es el ciclo repetitivo de los Productos //
        while(continuaCargando === 'SI' || continuaCargando === 'si')
        {
            //contadorDeProductos = contadorDeProductos + 1;
            contadorDeProductos++; // incrementar en 1 la variable en cuestión
    
            // leer el precio del producto "n"
            precioProducto = Number(prompt(`ingrese el precio del producto ${contadorDeProductos}`))
    
            // ir acumulando los precios de los productos
            totalCobrado = totalCobrado + precioProducto;
    
            // ir visualizando el precio del producto cargado y el total acumulado hasta el momento
            console.log(`precio ingresado: ${precioProducto} - total: ${totalCobrado}`);
    
            // le vamos a preguntar a la cajera si desea seguir cobrando ?.
            continuaCargando = prompt("Sigue Cobrando (SI/NO)");
        }
    
        console.log(`Total a PAGAR FINAL ${totalCobrado}`);
    
        let formaDePago = 0; // forma de pago asumirá 3 valores discretos.
    
        formaDePago = Number(prompt(`Ingrese forma de pago ?. 1 - Efectivo. 2 - Tarjeta (12%) . 3 Transf (3.5%)`));
    
        let interesPorFormaDePago = 0;
    
        switch(formaDePago)
        {
            case 1: // contado
                {
                    interesPorFormaDePago = 0;
                    break;
                }
            case 2: // tarjeta de credito
                {
                    interesPorFormaDePago = (totalCobrado * 12)/100;
                    break;
                }
    
            case 3: // transferencia
                {
                    interesPorFormaDePago = (totalCobrado * 3.5)/100;
                    break;
                }
               
            default: // otro no identificado por el momento
                {
                    interesPorFormaDePago = 0;
                    break;
                }
        }
    
        // es es un total a cobrar por cliente //
        let totalACobrarFinal = 0;
        totalACobrarFinal = totalCobrado + interesPorFormaDePago;
    
        console.log(`El Total a Pagar Final es ${totalACobrarFinal}`);

        // aqui antes de arrancar con un cliente nuevo. lo voy a ir acumulando //
        totalGeneralDeCaja = totalGeneralDeCaja + totalACobrarFinal;

        // preguntando si vamos a continuar con un cliente nuevo //
        continuaCobrandoClientes = prompt("Desea Cobrar a otro Cliente (SI/NO)");

    }

    // aqui se produce cuando la caja se cerro y la cajera hace el arqueo.
    console.log(`Cierre de Caja ...${totalGeneralDeCaja}`);

    /*

        1) CICLO FOR => conozco con exactitud el numero de iteraciones

            contador de iteraciones lo tiene incorporado
            como se sabe los pasos que va a dar, no es necesario
            preguntar en cada paso, si desea continuar ?.

        2) CICLO WHILE => desconozco con exactitud el numero de iteraciones

            todas las variables tanto la de condición de fin
            como los contadores, acumuladores, tienen que ser declarados.

            al finalizar la iteración o el paso. se debe preguntar
            o analizar si se desea cancelar el proceso.

  

    */

}