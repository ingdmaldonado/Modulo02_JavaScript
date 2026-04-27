/* Ejercicio Nro. 18: 
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

Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente. */

{
    let contadorClientes = 0;
    let totalCobradoJornada = 0;
    let continuaAtendiendo = `S`;
    let clientesSinDescuento = 0;
    let clientesConDescuento = 0;
    let descuentoTotal = 0;
    let importeTotal = 0;

    while (continuaAtendiendo === `S` || continuaAtendiendo === `s`)
    {
        // ir atendiendo cliente x cliente
        contadorClientes = contadorClientes + 1;

        console.log(`Atendiendo el Cliente Nro. ${contadorClientes}`);

        // variables que se declaran e inicializan por cliente
        let ingresaOtroProducto = `S`;
        let contadorProductos = 0;
        let totalCompraCliente = 0;
        let totalPagoCliente = 0;
        let precioProducto = 0;

        while (ingresaOtroProducto === `S` || ingresaOtroProducto === `s`)
        {
            // aqui cuento los productos
            contadorProductos++;
            
            // aqui ingreso el precio del producto
            precioProducto = Number(prompt(`Ing. precio Producto ${contadorProductos}`));

            // aqui voy acumulando los precios de todos los productos
            totalCompraCliente = totalCompraCliente + precioProducto;

            // aqui muestro por consola el producto ingresado
            console.log(`Registrando el producto Nro. ${contadorProductos} del Cliente ${contadorClientes}: ${precioProducto}`);

            // aqui le pregunto si desea continuar con otro producto mas ?.
            ingresaOtroProducto = prompt(`Ingresa otro producto?. (S/N)`);

        }

       
    /*        
        o	1 – Efectivo – aplicar descuento 10%
        o	2 – Tarjeta Visa BNA – aplicar descuento 7%
        o	3 – Tarjeta Master BNA – aplicar descuento 7%
        o	4 – Otras Tarjetas Medios – sin descuentos.
    */


        let tipoDePago = 0;
        let descuento = 0;
        tipoDePago = Number(prompt(`Cómo desea pagar 1-EFECTIVO 10% , 2 - VISA BNA 7%, 3 - MASTER BNA 7%, 4 - OTRAS ?.`))

        switch(tipoDePago)
        {
            case 1:
                {
                    descuento = (totalCompraCliente * 10)/100;
                    clientesConDescuento++;
                    break;
                }

            case 2:
                {
                    descuento = (totalCompraCliente * 7)/100;
                    clientesConDescuento++;
                    break;
                }

            case 3:
                {
                    descuento = (totalCompraCliente * 7)/100;
                    clientesConDescuento++;
                    break;
                }

            default:
                {
                    descuento = 0;
                    clientesSinDescuento++;
                    break;
                }
        }

        totalPagoCliente = totalCompraCliente - descuento;
        descuentoTotal = descuentoTotal + descuento;
        // aqui voy registrando el total cobrado por la cajera
        totalCobradoJornada = totalCobradoJornada + totalCompraCliente;
        importeTotal = totalCobradoJornada - descuentoTotal;

        // aqui debería tener una variable que me permita registrar el total cobrado a todas las personas ? //
        console.log(`Subtotal Cobrado al Cliente ${contadorClientes} - Subtotal: ${totalCompraCliente}`);
        console.log(`Total Descuento al Cliente ${contadorClientes} - Descuento: ${descuento}`);
        console.log(`Importe a Pagar Cliente ${contadorClientes} - Importe a Pagar: ${totalPagoCliente}`);

        continuaAtendiendo = prompt(`Contínua con otro cliente ?. (S/N)`);
    }

    console.log(`Clientes Atendidos: ${contadorClientes}`);
    console.log(`Clientes sin Descuento: ${clientesSinDescuento}`);
    console.log(`Clientes con Descuento: ${clientesConDescuento}`);
    console.log(`Total Cobrado: ${totalCobradoJornada}`);
    console.log(`Descuento Total: ${descuentoTotal}`);
    console.log(`Importe Total a Pagar: ${importeTotal}`);
}