{
console.log("Sistema de caja - Supermercado");


let ventaTotal = 0;
let descuentoTotal = 0;
let totalAPagarGeneral = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;


let atender = Number(prompt("¿Desea atender un cliente? (1 = SI / 0 = NO)"));

while (atender === 1) {

    console.log("---- Nuevo Cliente ----");

    let totalCliente = 0;

  
    let cargarProducto = Number(prompt("¿Desea cargar un producto? (1 = SI / 0 = NO)"));

    while (cargarProducto === 1) {

        let precio = Number(prompt("Ingrese el precio del producto:"));
        let cantidad = Number(prompt("Ingrese la cantidad:"));

        let subtotal = precio * cantidad;
        totalCliente += subtotal;

        console.log(`Subtotal producto: $${subtotal}`);

        cargarProducto = Number(prompt("¿Desea cargar otro producto? (1 = SI / 0 = NO)"));
    }

  
    let formaPago = Number(prompt(
        "Forma de pago:\n" +
        "1 - Efectivo (10%)\n" +
        "2 - Visa BNA (7%)\n" +
        "3 - Master BNA (7%)\n" +
        "4 - Otros (sin descuento)"
    ));

    let descuento = 0;

    switch (formaPago) {
        case 1:
            descuento = totalCliente * 0.10;
            break;
        case 2:
        case 3:
            descuento = totalCliente * 0.07;
            break;
        case 4:
            descuento = 0;
            break;
        default:
            console.log("Forma de pago inválida");
            descuento = 0;
    }

    let totalPagar = totalCliente - descuento;

  
    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    totalAPagarGeneral += totalPagar;

    if (descuento > 0) {
        clientesConDescuento++;
    } else {
        clientesSinDescuento++;
    }

    console.log(`Total cliente: $${totalCliente}`);
    console.log(`Descuento: $${descuento}`);
    console.log(`Total a pagar: $${totalPagar}`);

    atender = Number(prompt("¿Desea atender otro cliente? (1 = SI / 0 = NO)"));
}


console.log(" CIERRE DE CAJA ");
console.log(`Venta Total: $${ventaTotal}`);
console.log(`Descuento Total: $${descuentoTotal}`);
console.log(`Total Cobrado: $${totalAPagarGeneral}`);
console.log(`Clientes con descuento: ${clientesConDescuento}`);
console.log(`Clientes sin descuento: ${clientesSinDescuento}`);
}