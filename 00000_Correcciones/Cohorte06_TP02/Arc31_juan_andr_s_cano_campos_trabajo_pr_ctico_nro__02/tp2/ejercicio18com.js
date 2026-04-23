    let hayCliente = "s";
    let cantidadClientes = 0;
    let ventaTotalAcumulada = 0;
    let clientesDescuento = 0;
    let clientesSinDescuento = 0;
    let totalProductosGlobal = 0;

 
    hayCliente = prompt("¿Desea atender un cliente? (s/n)");

    while (hayCliente && hayCliente.toLowerCase() === "s") {
        let subtotalCliente = 0;
        let productosPorCliente = 0;
        
  
        let quiereCargarProducto = prompt("¿Desea pasar por caja un producto? (s/n)");
        
        while (quiereCargarProducto && quiereCargarProducto.toLowerCase() === "s") {
            let precio = Number(prompt("Ingrese el precio del producto:"));
            
            if (!isNaN(precio) && precio > 0) {
                subtotalCliente += precio;
                productosPorCliente++;
                totalProductosGlobal++;
            } else {
                alert("Precio no válido.");
            }

            quiereCargarProducto = prompt("¿Desea pasar por caja otro producto? (s/n)");
        }
        
     
        if (productosPorCliente > 0) {
            let importeFinal = subtotalCliente;
            let porcentajeDescuento = 0;

            let metodoPago = prompt(
                "Subtotal: $" + subtotalCliente + 
                "\nIngrese el método de pago:\n1 - Efectivo (10% desc)\n2 - Visa BNA (7% desc)\n3 - BNA Mastercard (7% desc)\n4 - Otros (Sin desc)"
            );

            switch (metodoPago) {
                case "1":
                    porcentajeDescuento = 0.10;
                    clientesDescuento++;
                    break;
                case "2":
                case "3":
                    porcentajeDescuento = 0.07;
                    clientesDescuento++;
                    break;
                case "4":
                default:
                    clientesSinDescuento++;
                    break;
            }

            
            let descuentoAplicado = subtotalCliente * porcentajeDescuento;
            importeFinal = subtotalCliente - descuentoAplicado;
            
          
            ventaTotalAcumulada += importeFinal;
            cantidadClientes++;

            console.log(`Cliente ${cantidadClientes}: Subtotal $${subtotalCliente}, Descuento $${descuentoAplicado.toFixed(2)}, Total Pagado $${importeFinal.toFixed(2)}`);
        }

        hayCliente = prompt("¿Hay otro cliente en la fila? (s/n)");
    }

    
    console.log("--- RESUMEN TOTAL ---");
    console.log("Cantidad de clientes atendidos: " + cantidadClientes);
    console.log("Clientes con beneficio de descuento: " + clientesDescuento);
    console.log("Clientes sin descuento: " + clientesSinDescuento);
    console.log("Cantidad total de productos vendidos: " + totalProductosGlobal);
    console.log("Venta total recaudada : $" + ventaTotalAcumulada.toFixed(2));
