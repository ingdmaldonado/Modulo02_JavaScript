/*
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
    let otroCliente = `s`;
    let contadorClientes = 0;
    let contadorProductos = 0;
    let totalDescuentosOtorgados = 0;
    let contadorClientesDescuentos = 0;
    let contadorClienteSinDescuentos = 0;
    let ingresosReales = 0;

    let precioProducto = 0;
    let totalPorCliente = 0; 
    let totalPorClienteAPagar = 0;
    let totalPorJornada = 0; 

    otroCliente = prompt(`¿Desea atender un cliente? (S/N)`);

    while (otroCliente === 's' || otroCliente === 'S')
    {

        contadorClientes = contadorClientes + 1;

        let otroProducto = `s`;

        while (otroProducto === 'S' || otroProducto === 's')
        {
            contadorProductos = contadorProductos + 1;

            precioProducto = Number(prompt(`Ingrese el Precio del Producto: ${contadorProductos}`));

            totalPorCliente = totalPorCliente + precioProducto;

            console.log(`Cliente Nro.: ${contadorClientes}- Productos: ${contadorProductos}- Precio: $${precioProducto}`);

            otroProducto = prompt(`¿Ingresa otro producto? (S/N)`);
        }

        let medioDePago = Number(prompt(`Indique un medio pago: (1) = Efectivo, (2) = VISA BNA, (3) = MASTER BNA, (4) = OTROS`));
        let descuento = 0;
        switch(medioDePago)
        {
            case 1:
                {
                    descuento = (totalPorCliente * 10)/100;
                    contadorClientesDescuentos = contadorClientesDescuentos + 1;
                    break;
                }
            case 2:
                {
                    descuento = (totalPorCliente * 7)/100;
                    contadorClientesDescuentos = contadorClientesDescuentos + 1;
                    break;
                }
            case 3:
                {
                    descuento = (totalPorCliente * 7)/100;
                    contadorClientesDescuentos = contadorClientesDescuentos + 1;
                    break;
                }
            case 4:
                {
                    descuento = 0;
                    contadorClienteSinDescuentos = contadorClienteSinDescuentos +1;
                    break;
                }
            default:
                {
                    descuento = 0;
                    contadorClienteSinDescuentos = contadorClienteSinDescuentos +1;
                    break;
                }

        }

        totalPorClienteAPagar = totalPorCliente - descuento;
        totalDescuentosOtorgados += descuento ;
        ingresosReales += totalPorClienteAPagar;


        console.log(`Nro. Cliente: ${contadorClientes} - Total a Pagar: $${totalPorCliente} - Descuento: $${descuento} - Neto a Ingresar : $${totalPorClienteAPagar}`);

        totalPorJornada += totalPorCliente;
                 
        totalPorCliente = 0;

        contadorProductos = 0;        


    otroCliente = prompt(`¿Atiende otro Cliente? (S/N)`);
    }
    console.log(`----DATOS DEL CIERRE DE LA JORNADA:----`)
    console.log(`Cantidad de Clientes Atendidos en el día: ${contadorClientes}`)
    console.log(`Total por la atención a clientes: $${totalPorJornada}`);
    console.log(`Total descuentos otorgados en el día: $${totalDescuentosOtorgados}`);
    console.log(`Total de ingresos Reales: ${ingresosReales}`);
    console.log(`Cantidad de clientes CON Decuentos: ${contadorClientesDescuentos}`);
    console.log(`Cantidad de clientes SIN Descuentos: ${contadorClienteSinDescuentos}`);
}
