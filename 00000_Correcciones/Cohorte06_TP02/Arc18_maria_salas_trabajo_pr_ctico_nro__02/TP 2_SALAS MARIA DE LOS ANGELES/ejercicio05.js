
{
    let ventaTotal = 0;
    let totalApagar = 0;
    let descuentoTotal = 0;
    let clienteConDescuento = 0;
    let clienteSinDescuento = 0;

    let hayClientes = "si"

    while(hayClientes === "si" || hayClientes === "SI")
    {
        let totalClientes = 0;

        let cantidadProductos = Number(prompt(`¿cuantos productos lleva el cliente?`))
        let contadorProductos = 1;

        while(contadorProductos <= cantidadProductos)
        {
            let precio = Number(prompt(`ponga el precio del producto`))
            totalClientes += precio;
            contadorProductos++;
        }
   
        let opcion = Number(prompt(`elija, 1- efectivo, 2- visa BNA, 3- mastercard BNA. 4- otros`));

        let descuento = 0;

        if (opcion === 1)
        {
            descuento = (totalClientes*10)/100;
            clienteConDescuento++;
        }
        else if(opcion === 2 || opcion === 3)
        {
            descuento = (totalClientes*7)/100;
            clienteConDescuento++;
        }
        else
        {
            clienteSinDescuento++;
        }  
        
        let importeFinal = totalClientes - descuento;

        descuentoTotal += descuento;
        totalApagar += importeFinal;
        ventaTotal +=totalClientes;

        hayClientes = prompt(`hay mas clientes? si/no`)
    }

    console.log(`venta total: ${ventaTotal}`)
    console.log(`descuento total: ${descuentoTotal}`)
    console.log(`clientes con descuento: ${clienteConDescuento}`)
    console.log(`clientes sin descuento: ${clienteSinDescuento}`)
    console.log(`importe total a pagar: ${importeFinal}`)  
}
