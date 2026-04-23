/* TP2 - EJERCICIO NRO. 18

Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los
clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
- Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2,
5 clientes.
Nota: debería resolverse aplicando un ciclo while de clientes
- Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar
10, 15, 20, 50 productos.
Nota: debería resolverse aplicando un ciclo while de productos.
- Al finalizar la atención del cliente, debería preguntar si paga con:
o 1 – Efectivo – aplicar descuento 10%
o 2 – Tarjeta Visa BNA – aplicar descuento 7%
o 3 – Tarjeta Master BNA – aplicar descuento 7%
o 4 – Otras Tarjetas Medios – sin descuentos.
- Al finalizar la atención del cliente deberá ir registrando los siguientes puntos
o Venta Total = Acumular la venta de todos los clientes
o Descuento Total = Acumular los descuentos realizados a cada cliente
o Importe a Pagar Total = Acumular los Importes a pagar por cada cliente
o Contar la cantidad de clientes que Tuvieron descuentos
o Contar la cantidad de clientes que No Tuvieron descuentos.

*/

{
    /* ANTES  */
    let continuaAtendiendo   = `S`;
    let contadorClientes     = 0;

    let ventaTotal           = 0;  // suma de compras de todos los clientes
    let descuentoTotal       = 0;  // suma de descuentos de todos los clientes
    let importeAPagarTotal   = 0;  // suma de lo que pagó cada cliente

    let clientesConDescuento    = 0;  // cuántos clientes tuvieron descuento
    let clientesSinDescuento    = 0;  // cuántos clientes no tuvieron descuento

    /* WHILE EXTERNO — un cliente por vuelta */
    while(continuaAtendiendo === `S` || continuaAtendiendo === `s`)
    {
        contadorClientes++;
        console.log(`Atendiendo el Cliente Nro. ${contadorClientes}`);

        /* Variables del CLIENTE — se reinician en cada cliente */
        let ingresaOtroProducto = `S`;
        let contadorProductos   = 0;
        let totalCompraCliente  = 0;
        let precioProducto      = 0;

        /* WHILE INTERNO — un producto por vuelta */
        while(ingresaOtroProducto === `S` || ingresaOtroProducto === `s`)
        {
            contadorProductos++;

            precioProducto = Number(prompt(`Ing. precio Producto ${contadorProductos} - Cliente ${contadorClientes}`));

            totalCompraCliente = totalCompraCliente + precioProducto;

            console.log(`Registrando producto Nro. ${contadorProductos} del Cliente ${contadorClientes}`);

            ingresaOtroProducto = prompt(`Ingresa otro producto? (S/N)`);
        }

        /* Forma de pago y descuento del cliente */
        let tipoDePago         = 0;
        let descuentoCliente   = 0;

        tipoDePago = Number(prompt(`Cómo desea pagar?
1 - Efectivo       (10% descuento)
2 - Visa BNA       ( 7% descuento)
3 - Master BNA     ( 7% descuento)
4 - Otras Tarjetas (sin descuento)`));

        switch(tipoDePago)
        {
            case 1: // Efectivo - 10%
            {
                descuentoCliente = (totalCompraCliente * 10) / 100;
                break;
            }
            case 2: // Visa BNA - 7%
            {
                descuentoCliente = (totalCompraCliente * 7) / 100;
                break;
            }
            case 3: // Master BNA - 7%
            {
                descuentoCliente = (totalCompraCliente * 7) / 100;
                break;
            }
            default: // Otras tarjetas - sin descuento
            {
                descuentoCliente = 0;
                break;
            }
        }

        let importePagoCliente = totalCompraCliente - descuentoCliente;

        console.log(`--- Cliente ${contadorClientes} ---`);
        console.log(`Total Compra:     ${totalCompraCliente}`);
        console.log(`Descuento:        ${descuentoCliente}`);
        console.log(`Importe a Pagar:  ${importePagoCliente}`);

        ventaTotal         = ventaTotal         + totalCompraCliente;
        descuentoTotal     = descuentoTotal     + descuentoCliente;
        importeAPagarTotal = importeAPagarTotal + importePagoCliente;

        if(descuentoCliente > 0)
        {
            clientesConDescuento++;
        }
        else
        {
            clientesSinDescuento++;
        }

        continuaAtendiendo = prompt(`Atiende otro cliente? (S/N)`);
    }

    /* FINAL  */
    console.log(`--- CIERRE DE JORNADA ---`);
    console.log(`Clientes atendidos:          ${contadorClientes}`);
    console.log(`Clientes con descuento:      ${clientesConDescuento}`);
    console.log(`Clientes sin descuento:      ${clientesSinDescuento}`);
    console.log(`Venta Total:                 ${ventaTotal}`);
    console.log(`Descuento Total:             ${descuentoTotal}`);
    console.log(`Importe a Pagar Total:       ${importeAPagarTotal}`);
}
