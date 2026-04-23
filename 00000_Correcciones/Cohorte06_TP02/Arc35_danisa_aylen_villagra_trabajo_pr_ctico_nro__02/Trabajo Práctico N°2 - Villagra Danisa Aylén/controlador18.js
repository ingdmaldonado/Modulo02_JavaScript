/*Ejercicio Nro. 18: 
Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones. 
- Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes.  
Nota: debería resolverse aplicando un ciclo while de clientes 

Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos.  
Nota: debería resolverse aplicando un ciclo while de productos.

Al finalizar la atención del cliente, debería preguntar si paga con: 
 1 – Efectivo – aplicar descuento 10% 
 2 – Tarjeta Visa BNA – aplicar descuento 7% 
 3 – Tarjeta Master BNA – aplicar descuento 7% 
 4 – Otras Tarjetas Medios – sin descuentos. 

Al finalizar la atención del cliente deberá ir registrando los siguientes puntos 
- Venta Total = Acumular la venta de todos los clientes 
- Descuento Total = Acumular los descuentos realizados a cada cliente 
- Importe a Pagar Total = Acumular los Importes a pagar por cada cliente 
- Contar la cantidad de clientes que Tuvieron descuentos 
- Contar la cantidad de clientes que No Tuvieron descuentos. 

Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente.*/

{
    let ventaTotal = 0;
    let descuentoTotal = 0;
    let totalAPagarGeneral = 0;

    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    let continuarCliente = "si";

    while (continuarCliente === "si")
    {
        //Total de compra de un cliente
        let totalCliente = 0;

        //Productos del cliente
        let continuarProducto = "si";

        while (continuarProducto === "si")
        {
            let precioProducto = Number(prompt("Ingrese precio del producto:"));

            totalCliente = totalCliente + precioProducto;

            continuarProducto = prompt("¿Desea ingresar otro producto? (si/no)");
        }

        let formaPago = Number(prompt("Seleccione forma de pago: 1 - Efectivo (-10%); 2 - Visa BNA (-7%); 3 - Master BNA (-7%); 4 - Otras (sin descuento)"));

        let descuento = 0;

        if (formaPago === 1)
        {
            descuento = (totalCliente * 10) / 100;
            clientesConDescuento = clientesConDescuento + 1;
        }
        else
        {
            if (formaPago === 2 || formaPago === 3)
            {
                descuento = (totalCliente * 7) / 100;
                clientesConDescuento = clientesConDescuento + 1;
            }
            else
            {
                descuento = 0;
                clientesSinDescuento = clientesSinDescuento + 1;
            }
        }

        let totalAPagar = totalCliente - descuento;

        ventaTotal = ventaTotal + totalCliente;
        descuentoTotal = descuentoTotal + descuento;
        totalAPagarGeneral = totalAPagarGeneral + totalAPagar;

        //Cliente siguiente
        continuarCliente = prompt("¿Desea atender otro cliente? (si/no)");
    }

    console.log(`Venta Total: $${ventaTotal}`);
    console.log(`Descuento Total: $${descuentoTotal}`);
    console.log(`Total a pagar: $${totalAPagarGeneral}`);
    console.log(`Clientes con descuento: ${clientesConDescuento}`);
    console.log(`Clientes sin descuento: ${clientesSinDescuento}`);
}