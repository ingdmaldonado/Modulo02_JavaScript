/* 
Ejercicio Nro. 18:

	Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
-	Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes. 
Nota: debería resolverse aplicando un ciclo while de clientes
-	Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos. 
Nota: debería resolverse aplicando un ciclo while de productos.

-	Al finalizar la atención del cliente, debería preguntar si paga con:
o	1 – Efectivo – aplicar descuento 10%
o	2 – Tarjeta Visa BNA – aplicar descuento 7%
o	3 – Tarjeta Master BNA – aplicar descuento 7%
o	4 – Otras Tarjetas Medios – sin descuentos.
-	Al finalizar la atención del cliente deberá ir registrando los siguientes puntos
o	Venta Total = Acumular la venta de todos los clientes
o	Descuento Total = Acumular los descuentos realizados a cada cliente
o	Importe a Pagar Total = Acumular los Importes a pagar por cada cliente
o	Contar la cantidad de clientes que Tuvieron descuentos
o	Contar la cantidad de clientes que No Tuvieron descuentos.

Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente.
*/

{
    // voy a atender "n" clientes
    // voy a atender "m" productos de cada cliente

    let continuaAtendiendo = `S`;
    let contadorClientes = 0;
    let totalCobradoJornada = 0;
    let totalDescuentos = 0;
    let cantidadClientesConDescuento = 0;
    let cantidadClientesSinDescuento = 0;

    while (continuaAtendiendo === `S` || continuaAtendiendo === `s`)
    {
        // dentro de este ciclo, voy haciendo la atención del cliente
        contadorClientes = contadorClientes + 1;

        console.log(`Atendiendo el Cliente Nro: ${contadorClientes}`);

        let ingresaOtroProducto = `S`;
        let contadorProductos = 0;
        let totalCompraCliente = 0;
        let totalPagoCliente = 0;
        let precioProducto = 0;

        while(ingresaOtroProducto === `S` || continuaAtendiendo === `s`)
        {
            contadorProductos++;

            precioProducto = Number (prompt(`iNGRESE PRECIO PRODUCTO ${contadorProductos}`));

            totalCompraCliente = totalCompraCliente + precioProducto;

            console.log(`Registrando el producto Nro. ${contadorProductos} del cliente ${contadorClientes}`);

            ingresaOtroProducto = prompt(`ingresa otro producto (S/N)`);
        }

        let tipoDePago = 0
        let descuento = 0
        tipoDePago = Number(prompt(`Como desea pagar? 1 - EFECTIVO 10%, 2 - VISA 7% - 3 MASTERCARD 7% - 4 OTRAS SIN DESCUENTO.  `));

        switch (tipoDePago)
        {
            case 1:
            {
                descuento = (totalCompraCliente *10)/100;
                break;
            }
            case 2:
            {
                descuento = (totalCompraCliente *7)/100;
                break;
            }
            case 3:
            {
                descuento = (totalCompraCliente *7)/100;
                break;
            }
            case 4:
            {
                descuento = 0;
                break;
            }
        }

        console.log(`El descuento es de ${descuento}`);

        totalPagoCliente = totalCompraCliente - descuento;

        totalCobradoJornada = totalCobradoJornada + totalCompraCliente;

        totalDescuentos = totalDescuentos + descuento; //probando debe subar los decuentos
        if(descuento > 0)
        {
            cantidadClientesConDescuento++;
        }
        else
        {
            cantidadClientesSinDescuento++;
        }

        console.log (`Total cobrado al cliente ${contadorClientes} - total:${totalPagoCliente}`);

        continuaAtendiendo = prompt(`Continua con otro cliente ? (S/N).`);

    }

    console.log (`Clientes atendidos: ${contadorClientes} Total cobrado: ${totalCobradoJornada}`);

    console.log (`Total descontado a los clientes ${totalDescuentos}`);

    console.log (`Cantidad de clientes que tuvieron descuento ${cantidadClientesConDescuento} y cantidad de clientes que no hicieron descuento ${cantidadClientesSinDescuento}`);



/*  Venta Total = Acumular la venta de todos los clientes
o	Descuento Total = Acumular los descuentos realizados a cada cliente
o	Importe a Pagar Total = Acumular los Importes a pagar por cada cliente
o	Contar la cantidad de clientes que Tuvieron descuentos
o	Contar la cantidad de clientes que No Tuvieron descuentos.
*/
} 