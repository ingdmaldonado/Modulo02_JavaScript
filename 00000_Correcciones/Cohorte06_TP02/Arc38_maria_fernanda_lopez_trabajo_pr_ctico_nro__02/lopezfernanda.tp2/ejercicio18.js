/* Ejercicio Nro. 18:
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
Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo
while (interno) registrará los productos que lleva cada cliente. */

{
    let contadorClientes= 0;
    let continuaAtendiendo = 'S';

    let totalVenta=0;
    let totalDescuento= 0;
    let totalRecaudadoJornada= 0;

    let clientesConDescuento= 0;
    let clientesSinDescuento= 0;

    while (continuaAtendiendo === 'S' || continuaAtendiendo === `s`)
    {
        contadorClientes = contadorClientes + 1;

        console.log (`Atendiendo el cliente Nro ${contadorClientes}`);

        let ingresaOtroProducto = `S`;
        let contadorProductos= 0;
        let totalCompraCliente= 0;

        let precioProducto= 0;

        while (ingresaOtroProducto === `S` || ingresaOtroProducto === `s`)
        {
            contadorProductos++;

            precioProducto = Number(prompt(`Ingrese el precio del producto ${contadorProductos}`));
            console.log (`Registrando el producto Nro ${contadorProductos} del cliente ${contadorClientes}`);

            totalCompraCliente = totalCompraCliente + precioProducto;

            ingresaOtroProducto = prompt(`Ingresa otro producto? S/N`);
        }

        
        let tipoDePago= 0;
        let descuento= 0;
        
        tipoDePago= Number(prompt(`Como desea pagar? 1-EFE 10%, 2-VISA 7%, 3-MASTER 7%, 4-OTRAS`));

        switch (tipoDePago)
        {
            case 1:
                {
                    descuento= (totalCompraCliente *10)/100;
                    break;               
                }
            case 2:
                {
                    descuento= (totalCompraCliente *7)/100;
                    break;   
                }
            case 3:
                {
                    descuento= (totalCompraCliente *7)/100;
                    break;     
                }
            case 4:
                {
                    descuento= 0;
                    break;
                }
            default:
                {
                    descuento= 0;
                    break;
                }

        }
        let totalPagoCliente= totalCompraCliente - descuento;

       totalVenta= totalVenta+ totalCompraCliente;
       totalDescuento= totalDescuento + descuento;
       totalRecaudadoJornada= totalRecaudadoJornada + totalPagoCliente;

       if (descuento > 0)
       {
        clientesConDescuento= clientesConDescuento +1;
       }
       else 
       {
        clientesSinDescuento= clientesSinDescuento +1;
       }
        
        console.log(`Cliente ${contadorClientes}:`);
        console.log(`Total compra: ${totalCompraCliente}`);
        console.log(`Descuento: ${descuento}`);
        console.log(`Total a pagar: ${totalPagoCliente}`);

     
        continuaAtendiendo= prompt('Continua atendiendo otro cliente? S/N');
       
        
    }
       
        console.log (`Resumen`);

        console.log (`Clientes atendidos ${contadorClientes}`);

        console.log (`Venta Total: ${totalVenta}`);
        console.log (`Descuento total: ${totalDescuento}`);
        console.log(`Total Recaudado: ${totalRecaudadoJornada}`);
        console.log (`Clientes con descuento ${clientesConDescuento}`);
        console.log (`clientes sin descuento: ${clientesSinDescuento}`);

        
}