/*
Ejercicio Nro. 18:
Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
- Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes.
Nota: debería resolverse aplicando un ciclo while de clientes
- Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos.
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
Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente.
*/

{

    let ContinuaAtendiendo = 'S';
    let ContinuaCargandoProductos = 'S';
    let PrecioProducto = 0;

    let CantClientesAtendidos = 0;
    let CantProductosCliente = 0;
    let MontoAPagarCliente = 0;
    let MontoAPagarClienteFinal = 0;
    let FormadePago = 0;
    let PorcDescEft = 10;
    let PorcDescVisa = 7;
    let PorcDescMaster = 7;
    let TotalDescuentoCliente = 0;
    let TotalClientesConDesc = 0;
    let TotalClientesSinDesc = 0;
    let MontoTotalVentas = 0;
    let MontoTotalDescuentos = 0;


    while((ContinuaAtendiendo === 'S') || (ContinuaAtendiendo === 's'))
    {
        CantClientesAtendidos++;
        while((ContinuaCargandoProductos === 'S') || (ContinuaCargandoProductos === 's'))
        {
            PrecioProducto = Number(prompt(`Ingrese Precio del Producto`));
            CantProductosCliente++;
            MontoAPagarCliente = MontoAPagarCliente + PrecioProducto;
            console.log(`Cantidad de Productos del Cliente Nro ${CantClientesAtendidos} es ${CantProductosCliente} productos -- El Total de Compra Acumulado es ${MontoAPagarCliente}`);
            ContinuaCargandoProductos = prompt(`Continua Ingresando Productos? (S/N)`);
        }
        FormadePago = Number(prompt(`Ingrese Forma de Pago: 1->EFT(10%) 2->Visa(7%) 3->Master(7%) 4->Otras(0%)`));
        switch(FormadePago)
        {
            case 1: //Efectivo 10%
                TotalDescuentoCliente = (MontoAPagarCliente * PorcDescEft) / 100;
                break;
            case 2: // Visa 7%
                TotalDescuentoCliente = (MontoAPagarCliente * PorcDescVisa) / 100;
                break;
            case 3: // Master 7%
                TotalDescuentoCliente = (MontoAPagarCliente * PorcDescMaster) / 100;
                break;
            default: // Otras 0%
                TotalDescuentoCliente = 0;
                break;            
        }
        if(TotalDescuentoCliente > 0)
        {
            TotalClientesConDesc++;
        }
        else
        {
            TotalClientesSinDesc++;  
        }
        MontoAPagarClienteFinal = MontoAPagarCliente - TotalDescuentoCliente;
        console.log(`Monto a Pagar SIN Descuento ${MontoAPagarCliente} / El Descuento Aplicado es ${TotalDescuentoCliente} // El Monto FINAL a Pagar es ${MontoAPagarClienteFinal}`);    
        MontoTotalVentas = MontoTotalVentas + MontoAPagarClienteFinal; 
        MontoTotalDescuentos = MontoTotalDescuentos + TotalDescuentoCliente;  
        ContinuaAtendiendo = prompt(`Continua Atendiendo? (S/N)`);
        console.log(`La Cantidad de Clientes Atendidos es ${CantClientesAtendidos}`);
        ContinuaCargandoProductos = 'S';
        MontoAPagarCliente = 0;
        CantProductosCliente = 0;

    }
    console.log(`Total de clientes Atendidos -> ${CantClientesAtendidos} // Clientes CON Descuento-> ${TotalClientesConDesc} // Clientes SIN Descuento-> ${TotalClientesSinDesc}`);
    console.log(`Total de Ventas del Dia -> ${MontoTotalVentas} `);
    console.log(`Total Descuentos del Dia-> ${MontoTotalDescuentos}`);
        

}