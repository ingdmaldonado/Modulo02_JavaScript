{
    let continuaAtendiendo = `SI`

    let contadorClientesSinDescuento = 0;
    let contadorClientesConDescuento = 0;
    let precioProducto = 0;
    let formaDePago = 0
    let ventaTotalGeneral = 0;
    let descuentoTotalGeneral = 0;
    let importeTotalGeneral = 0;
    
    while(continuaAtendiendo === `SI` || continuaAtendiendo === `si`)
    {
        let ingresaProducto = `SI`
        let acumuladorSubTotalCliente = 0;
        let descuento = 0;
        
        while(ingresaProducto === `SI` || ingresaProducto === `si`)
        {
            precioProducto = Number(prompt(`Ingrese el precio del producto`))

            acumuladorSubTotalCliente = acumuladorSubTotalCliente + precioProducto

            ingresaProducto = prompt(`Ingresa otro producto? si/no`)
        }

        formaDePago = Number(prompt(`Indique la forma de pago
            1 - Efectivo - descuento 10%
            2 - Tarjeta Visa BNA - descuento 7%
            3 - Tarjeta Master BNA - descuento 7%
            4 - Otras Tarjetas Medios - sin descuento. `))

            switch(formaDePago)
            {
                case 1:
                {
                    descuento = (acumuladorSubTotalCliente * 10) / 100
                    break;
                }
                case 2:
                {
                    descuento = (acumuladorSubTotalCliente * 7) / 100
                    break;
                }
                case 3:
                {
                    descuento = (acumuladorSubTotalCliente * 7) / 100
                    break;
                }
                case 4:
                {
                    descuento = 0
                    break;
                }
                default:
                {   
                    console.log(`Medio de pago no disponible`)
                    break;
                }
            }

        let importeCliente = acumuladorSubTotalCliente - descuento
        console.log(`El cliente debera pagar: ${importeCliente}`)

        ventaTotalGeneral = ventaTotalGeneral + acumuladorSubTotalCliente
        descuentoTotalGeneral = descuentoTotalGeneral + descuento

        importeTotalGeneral = importeTotalGeneral + importeCliente

        if(descuento > 0)
        {
            contadorClientesConDescuento++
        }
        else
        {
            contadorClientesSinDescuento++
        }

        continuaAtendiendo = prompt(`Atienda otro cliente ? si/no`)
    }

    console.log(`Ventas totales: ${ventaTotalGeneral}`)
    console.log(`Descuento total: ${descuentoTotalGeneral}`)
    console.log(`Importe a pagar total: ${importeTotalGeneral}`)
    console.log(`Cantidad de clientes con descuento: ${contadorClientesConDescuento}`)
    console.log(`Cantidad de clientes sin descuento: ${contadorClientesSinDescuento}`)

    

}