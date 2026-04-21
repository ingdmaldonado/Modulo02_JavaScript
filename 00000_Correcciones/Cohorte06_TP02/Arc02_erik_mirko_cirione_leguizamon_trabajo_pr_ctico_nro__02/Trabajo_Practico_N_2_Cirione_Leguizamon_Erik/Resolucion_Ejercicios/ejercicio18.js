let ventaTotal = 0;
let descuentoTotal = 0;
let importeAPagarTotal = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;



let atenderCliente = parseInt(prompt("¿Desea atender un cliente?\n1 - Sí\n2 - No"));

while (atenderCliente === 1) {

    let subtotalCliente = 0;
    let cantidadProductos = 0;

/*CICLO WHILE DE PRODUCTOS*/  
    let agregarProducto = parseInt(prompt("¿Agregar producto?\n1 - Sí\n2 - No"));

    while (agregarProducto === 1) {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        if (!isNaN(precio) && precio > 0) {
            subtotalCliente = subtotalCliente + precio;
            cantidadProductos++;
        } else {
            alert("Precio inválido, intente de nuevo.");
        }

        agregarProducto = parseInt(prompt("¿Agregar otro producto?\n1 - Sí\n2 - No"));
    }

/*MÉTODO DE PAGO*/ 
    let metodoPago = parseInt(prompt(
        "Seleccione método de pago:\n" +
        "1 - Efectivo (10% descuento)\n" +
        "2 - Tarjeta Visa BNA (7% descuento)\n" +
        "3 - Tarjeta Master BNA (7% descuento)\n" +
        "4 - Otras Tarjetas (sin descuento)"
    ));

    let porcentajeDescuento = 0;

    switch (metodoPago) {
        case 1:
            porcentajeDescuento = 0.10;
            break;
        case 2:
            porcentajeDescuento = 0.07;
            break;
        case 3:
            porcentajeDescuento = 0.07;
            break;
        case 4:
            porcentajeDescuento = 0;
            break;
        default:
            alert("Opción inválida, se aplicará sin descuento.");
            porcentajeDescuento = 0;
    }

 /*CÁLCULOS DEL CLIENTE*/
    let descuentoCliente = subtotalCliente * porcentajeDescuento;
    let importeAPagarCliente = subtotalCliente - descuentoCliente;

 /*ACUMULADORES*/
    ventaTotal += subtotalCliente;
    descuentoTotal += descuentoCliente;
    importeAPagarTotal += importeAPagarCliente;

    if (porcentajeDescuento > 0) {
        clientesConDescuento++;
    } else {
        clientesSinDescuento++;
    }

 /* RESUMEN DEL CLIENTE*/
    alert(
        "─── RESUMEN CLIENTE ───\n" +
        `Productos comprados : ${cantidadProductos}\n` +
        `Subtotal            : $${subtotalCliente.toFixed(2)}\n` +
        `Descuento (${(porcentajeDescuento * 100)}%)   : $${descuentoCliente.toFixed(2)}\n` +
        `Total a pagar       : $${importeAPagarCliente.toFixed(2)}`
    );

/*SIGUIENTE CLIENTE*/
    atenderCliente = parseInt(prompt("¿Desea atender otro cliente?\n1 - Sí\n2 - No"));
}

/*REPORTE FINAL DEL DÍA */     /**/
alert(
    "════ REPORTE FINAL DE LA JORNADA ════\n" +
    `Venta Total              : $${ventaTotal.toFixed(2)}\n` +
    `Descuento Total          : $${descuentoTotal.toFixed(2)}\n` +
    `Importe a Pagar Total    : $${importeAPagarTotal.toFixed(2)}\n` +
    `Clientes con descuento   : ${clientesConDescuento}\n` +
    `Clientes sin descuento   : ${clientesSinDescuento}`
);