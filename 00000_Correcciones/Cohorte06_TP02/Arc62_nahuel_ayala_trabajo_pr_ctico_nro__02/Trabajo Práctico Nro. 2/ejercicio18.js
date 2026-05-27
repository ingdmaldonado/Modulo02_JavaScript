/*
    Ejercicio Nro. 18:
    Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
    - Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes.
    Nota: debería resolverse aplicando un ciclo while de clientes
    - Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos.
    Nota: debería resolverse aplicando un ciclo while de productos.
    - Al finalizar la atención del cliente, debería preguntar si paga con: o 1 – Efectivo – aplicar descuento 10% o 2 – Tarjeta Visa BNA – aplicar descuento 7% o 3 – Tarjeta Master BNA – aplicar descuento 7% o 4 – Otras Tarjetas Medios – sin descuentos.
    - Al finalizar la atención del cliente deberá ir registrando los siguientes puntos o Venta Total = Acumular la venta de todos los clientes o Descuento Total = Acumular los descuentos realizados a cada cliente o Importe a Pagar Total = Acumular los Importes a pagar por cada cliente o Contar la cantidad de clientes que Tuvieron descuentos o Contar la cantidad de clientes que No Tuvieron descuentos.
    Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente.
*/

{
    let clientes = 0; // Contador

    let operacionCorrecta = true;

    let totalRecaudadoDelDia = 0; // Acumulador
    let totalDescuentosDelDia = 0; // Acumulador

    let clientesConDescuento = 0; // Contador
    let clientesSinDescuento = 0; // Contador

    let continua = `S`;

    while(continua === `S` || continua === `s`)
    {
        clientes = clientes + 1; // Contador
        console.log(`Atendiendo al Cliente Nro. ${clientes}`);

        let productos = 0;
        let totalDeCompra = 0;
        let descuento = 0;

        let continuaEnCaja = `S`;

        while(continuaEnCaja === `S` || continuaEnCaja === `s`)
        {
            let precioProducto = Number(prompt(`Ingrese el Precio del Producto`));

            productos = productos + 1; // Contador

            console.log(`Producto ${productos}: $${precioProducto}`);

            totalDeCompra = totalDeCompra + precioProducto; // Acumulador

            continuaEnCaja = prompt(`Desea ingresar otro producto? (S/N)`);
        }

        let modoDePago = Number(prompt(`Modo de Pago: 1) Efectivo | 2) Visa BNA | 3) Master BNA | 4) Otro Medio o Tarjeta`));

        switch(modoDePago)
        {
            case 1: // Efectivo (10% de Descuento)
            {
                descuento = (totalDeCompra * 10)/100;

                console.log(`Medio de Pago: Efectivo`);

                operacionCorrecta;

                break;
            }

            case 2: // Visa BNA
            {
                descuento = (totalDeCompra * 7)/100;

                console.log(`Medio de Pago: Visa BNA`);

                operacionCorrecta;

                break;
            }

            case 3: // Master BNA
            {
                descuento = (totalDeCompra * 7)/100;

                console.log(`Medio de Pago: Master BNA`);

                operacionCorrecta;

                break;
            }

            case 4: // Otro medio de pago o Tarjeta
            {
                descuento = 0;

                console.log(`Medio de Pago: Otro`);

                operacionCorrecta;

                break;
            }

            default: // Medio de pago NO Válido
            {
                console.log(`Medio de Pago NO Válido`);

                clientes = clientes - 1; // Si no es valido el medio de pago debera seleccionar uno válido, caso contrario que no tenga otro modo de pago entonces no se le podra cobrar, por tanto no es cliente.

                totalDeCompra = totalDeCompra - totalDeCompra; // Restamos el total de la compra porque no se pudo completar el pago o se selecciono un medio de pago invalido.

                descuento = descuento - descuento; // También restamos el descuento, de lo contrario nos restaria dinero en la suma del total recaudado del día.

                operacionCorrecta = false;

                break;
            }
        }

        clientesConDescuento = (modoDePago >= 1 && modoDePago <= 3)? clientesConDescuento + 1 : clientesConDescuento;

        clientesSinDescuento = (modoDePago === 4)? clientesSinDescuento + 1 : clientesSinDescuento;

        let totalAPagar = totalDeCompra - descuento;

        totalRecaudadoDelDia = totalRecaudadoDelDia + totalAPagar; // Suma Total de la Recuadación del Día

        totalDescuentosDelDia = totalDescuentosDelDia + descuento; // Suma Total de los Descuentos Realizados en el Día

        if(modoDePago >=1 && modoDePago <= 4)
        {
            console.log(`Cantidad de Productos: ${productos}`);

            console.log(`Descuento: $${descuento}`);

            console.log(`Total a Pagar: $${totalAPagar}`);
        }
        else{
            console.log(`Intente Nuevamente`);
        }

        continua = prompt(`Desea atender a otro Cliente? (S/N)`);
    }

    console.log(`  `);
    console.log(`DATOS DEL DÍA`);

    console.log(`Clientes Totales: ${clientes}`);

    console.log(`CLientes con Descuento: ${clientesConDescuento}`);
    console.log(`Clientes sin Descuento: ${clientesSinDescuento}`);

    console.log(`Recaudado Total: $${totalRecaudadoDelDia}`);
    console.log(`Descontado Total: $${totalDescuentosDelDia}`);
}