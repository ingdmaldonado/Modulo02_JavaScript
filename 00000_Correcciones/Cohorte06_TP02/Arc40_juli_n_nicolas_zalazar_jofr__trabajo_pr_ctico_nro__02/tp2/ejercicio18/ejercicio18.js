{
    let hayCliente = "s";
    let cantidadClientes = 0;
    let ventaTotal = 0;
    let descuentoTotal = 0;
    let importe = 0;
    let importeTotal = 0;
    let clientesDescuento = 0;
    let clientesSinDescuento = 0;
    let metodoPago = "";
    let productosTotal = 0;
    let clientesSinProductos = 0;


    while ( hayCliente.toLowerCase() === "s" ) {
        
        let producto = prompt("Desea pasar por caja el producto? (s/n)");
        let totalcliente = 0;
        while ( producto.toLowerCase() === "s" ) {
            productosTotal++;
            importe = Math.floor(Math.random() * 10000) + 1; 
            totalcliente += importe;
            producto = prompt("Desea pasar por caja el producto? (s/n)");
        }
        if ( totalcliente === 0 ) {
            clientesSinProductos++;
        }
        
        
        if ( totalcliente > 0 ) {
            cantidadClientes++;
            metodoPago = prompt("Ingrese el metodo de pago (1-efectivo, 2-Visa BNA, 3-BNA Mastercard, 4-otros)");
            let descuento = 0;
            switch ( metodoPago ) {
                case "1":
                    descuento = totalcliente * 0.10;
                    clientesDescuento++;
                    break;
                case "2":
                    descuento = totalcliente * 0.07;
                    clientesDescuento++;
                    break;
                case "3":
                    descuento = totalcliente * 0.07;
                    clientesDescuento++; 
                    break;
                case "4":
                    clientesSinDescuento++;
                    break;
                default:
                    alert("Metodo de pago no valido. No se aplicará descuento.");
                    clientesSinDescuento++;
                    break;
            }
            
            descuentoTotal += descuento;
            ventaTotal += totalcliente;
            importeTotal += totalcliente - descuento;
        }
        

        hayCliente = prompt("¿Hay otro cliente? (s/n)");
    }


    console.log("Cantidad de clientes que realizaron compras: " + cantidadClientes);
    console.log("Cantidad de clientes sin productos: " + clientesSinProductos);
    console.log("Cantidad de clientes con descuento: " + clientesDescuento);
    console.log("Cantidad de clientes sin descuento: " + clientesSinDescuento);
    console.log("Cantidad total de productos vendidos: " + productosTotal);
    console.log("Venta total: $" + ventaTotal.toFixed(2));
    console.log("Descuento total aplicado: $" + descuentoTotal.toFixed(2));
    console.log("Importe total a pagar: $" + importeTotal.toFixed(2));
    
    
}