/*

Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.

-Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes.
Nota: debería resolverse aplicando un ciclo while de clientes

-Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos.
Nota: debería resolverse aplicando un ciclo while de productos.

-Al finalizar la atención del cliente, debería preguntar si paga con:
* 1 – Efectivo – aplicar descuento 10%
* 2 – Tarjeta Visa BNA – aplicar descuento 7%
* 3 – Tarjeta Master BNA – aplicar descuento 7%
* 4 – Otras Tarjetas Medios – sin descuentos.

-Al finalizar la atención del cliente deberá ir registrando los siguientes puntos:
* Venta Total = Acumular la venta de todos los clientes
* Descuento Total = Acumular los descuentos realizados a cada cliente
* Importe a Pagar Total = Acumular los Importes a pagar por cada cliente
* Contar la cantidad de clientes que Tuvieron descuentos
* Contar la cantidad de clientes que No Tuvieron descuentos.


Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo
while (interno) registrará los productos que lleva cada cliente.

*/

{
    let ventaTotalDiaria = 0;
    let descuentoTotalDiario = 0;
    let importeTotalDiario = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    let atenderCliente = prompt(`Desea abrir la caja? (S/N)`);

    while (atenderCliente === 'S' || atenderCliente === 's')
    {

        let totalCompraCliente = 0;
        let descuentoCliente = 0;
        let importeFinalCliente = 0;

        let registrarProducto = prompt(`Pasar producto por el escáner? (S/N)`);

        while (registrarProducto === 'S' || registrarProducto === 's')
        {
            
            let precioProducto = Number(prompt(`Ingrese el precio:`));
            
            totalCompraCliente = totalCompraCliente + precioProducto;

            registrarProducto = prompt(`Pasar otro producto? (S/N)`);
        }

        if (totalCompraCliente > 0)
        {
            console.log(`Total del cliente: $${totalCompraCliente}`);

            let medioDePago = Number(prompt(`Medio de pago: 1 = Efectivo, 2 = Visa BNA, 3 = Master BNA, 4 = Otras tarjetas`));

            switch (medioDePago)
            {
                case 1: {
                            descuentoCliente = (totalCompraCliente * 10) / 100;
                            break;
                        }
                    
                case 2: {
                            descuentoCliente = (totalCompraCliente * 7) / 100;
                            break;
                        }

                case 3: {
                            descuentoCliente = (totalCompraCliente * 7) / 100;
                            break;  
                        }
                    
                case 4: {
                            descuentoCliente = 0;
                            break;
                        }
                    
                default: {
                            console.log(`Opción incorrecta. Se cobrará sin descuento.`);
                            descuentoCliente = 0;
                        }
                    
            }

            importeFinalCliente = totalCompraCliente - descuentoCliente;

            console.log(`Descuento aplicado: $${descuentoCliente}`);
            console.log(`Total a pagar: $${importeFinalCliente}`);

            ventaTotalDiaria = ventaTotalDiaria + totalCompraCliente;
            descuentoTotalDiario = descuentoTotalDiario + descuentoCliente;
            importeTotalDiario = importeTotalDiario + importeFinalCliente;

            if (descuentoCliente > 0)
            {
                clientesConDescuento = clientesConDescuento + 1;
            }
            else
            {
                clientesSinDescuento = clientesSinDescuento + 1;
            }

        }
        else
        {
            console.log(`El cliente se arrepintió y no llevó nada.`);
        }

        atenderCliente = prompt(`Desea atender al siguiente? (S/N)`);
    }

    console.log(`Venta Total sin descuentos: $${ventaTotalDiaria}`);
    console.log(`Descuento Total Otorgado: $${descuentoTotalDiario}`);
    console.log(`Importe Total con descuentos: $${importeTotalDiario}`);
    console.log(`Clientes CON descuento: ${clientesConDescuento}`);
    console.log(`Clientes SIN descuento: ${clientesSinDescuento}`);
}