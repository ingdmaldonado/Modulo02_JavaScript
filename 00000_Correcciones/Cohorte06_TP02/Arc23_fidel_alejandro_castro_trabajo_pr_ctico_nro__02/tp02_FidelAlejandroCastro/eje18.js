{
    let ventaTotal = 0;
    let DescuentoTotal = 0;
    let importeAPagarTotal = 0;
    let atenderCliente = 1;
    let contadorDescuentos = 0;
    let contadorSinDescuentos = 0;

    while (atenderCliente === 1) {
        atenderCliente = Number(prompt(`¿Va a atender a un cliente? 1. Si | 2. No`));
        if (atenderCliente  === 1) {
            let productosPorCliente = 0;
            let agregarProducto = 1;
            let descuentoAplicadoCliente = 0;
            while (agregarProducto === 1) {
                let precioProducto = Number(prompt(`Ingrese precio del productos`));
                productosPorCliente += precioProducto;
                agregarProducto = Number(prompt(`¿Quiere añadir otro producto? 1. Si | 2. No`));
            }

            let metodoDePago = Number(prompt(`Elija método de pago | 1. Efectivo | 2. Visa BNA | 3. Master BNA | 4. Otras tarjetas`));
            switch (metodoDePago) {
                case 1:
                    descuentoAplicadoCliente = 0.1;
                    contadorDescuentos++;
                    break;
                case 2:
                    descuentoAplicadoCliente = 0.07;
                    contadorDescuentos++;
                    break;
                case 3:
                    descuentoAplicadoCliente = 0.07;
                    contadorDescuentos++;
                    break;
                case 4:
                    descuentoAplicadoCliente = 0;
                    contadorSinDescuentos++;
                    break;
                default:
                    console.log(`Método de pago inexistente`);
                    descuentoAplicadoCliente = 0;
                    contadorSinDescuentos++;
                    break;
            }
            let montoDescuentoCliente = productosPorCliente * descuentoAplicadoCliente;
            let montoFinalCliente = productosPorCliente - montoDescuentoCliente;

            ventaTotal += productosPorCliente;
            DescuentoTotal += montoDescuentoCliente;
            importeAPagarTotal += montoFinalCliente;
            
        }else if(atenderCliente != 1){
            console.log("Trabajo Finalizado");
        }else{
            console.log("Opción no válida. Por favor, ingrese 1 o 2.");
            atenderCliente = 1;
        }
    }
    console.log(`\n----- Resumen Final -----`);
    console.log(`Ventas totales: $${ventaTotal}`);
    console.log(`Descuento totales: $${DescuentoTotal}`);
    console.log(`Importe a pagar total: $${importeAPagarTotal}`);
    console.log(`Clientes CON descuentos: ${contadorDescuentos}`);
    console.log(`Clientes SIN descuentos: ${contadorSinDescuentos}`);
}
