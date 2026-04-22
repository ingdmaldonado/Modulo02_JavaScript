{
    let sigueAtendiendo = "S";

    let ventaTotal = 0;
    let descuentoTotal = 0;
    let importePagarTotal = 0;

    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    while (sigueAtendiendo === "S" || sigueAtendiendo === "s") 
    {
        let sigueCargandoProductos = "S";
        let importeTotalCliente = 0;

        //  CARGA DE PRODUCTOS
        while (sigueCargandoProductos === "S" || sigueCargandoProductos === "s") 
        {
            let importeDeCompra = Number(prompt("Ingrese el precio del producto:"));
            
            importeTotalCliente += importeDeCompra;

            sigueCargandoProductos = prompt("¿Sigue cargando productos? (S/N)");
        }

        // 💳 MEDIO DE PAGO
        let tipoDePago = Number(prompt(`Elegí medio de pago:
        1- Efectivo (10% desc)
        2- Visa BNA (7% desc)
        3- Master BNA (7% desc)
        4- Otros (sin desc)`));

        let descuento = 0;

        switch (tipoDePago) 
        {
            case 1:
                descuento = importeTotalCliente * 0.10;
                clientesConDescuento++;
                break;

            case 2:
            case 3:
                descuento = importeTotalCliente * 0.07;
                clientesConDescuento++;
                break;

            default:
                descuento = 0;
                clientesSinDescuento++;
                break;
        }

        let importeFinal = importeTotalCliente - descuento;

        //  ACUMULADORES
        ventaTotal += importeTotalCliente;
        descuentoTotal += descuento;
        importePagarTotal += importeFinal;

        // 🧾 MOSTRAR POR CLIENTE
        console.log("Total compra:", importeTotalCliente);
        console.log("Descuento:", descuento);
        console.log("Importe final:", importeFinal);

        //  SIGUE ATENDIENDO
        sigueAtendiendo = prompt("¿Seguir atendiendo clientes? (S/N)");
    }

    // RESULTADO FINAL
    console.log("VENTA TOTAL:", ventaTotal);
    console.log("DESCUENTO TOTAL:", descuentoTotal);
    console.log("IMPORTE TOTAL A PAGAR:", importePagarTotal);
    console.log("Clientes con descuento:", clientesConDescuento);
    console.log("Clientes sin descuento:", clientesSinDescuento);
}