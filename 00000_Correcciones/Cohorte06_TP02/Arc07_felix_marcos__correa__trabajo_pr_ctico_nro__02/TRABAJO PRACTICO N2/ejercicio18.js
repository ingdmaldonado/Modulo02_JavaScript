{
let continuar = 1;
let ventaTotal = 0;
let descuentoTotal = 0;
let totalAPagar = 0;

let clientesConDescuento = 0;
let clientesSinDescuento = 0;

// WHILE para el cliente //
while (continuar === 1) {
    let seguirProductos = 1;
    let totalCliente = 0;

// WHILE para los productos //
    while (seguirProductos === 1) {

    let precio = prompt("Ingrese el precio del producto") * 1;
    totalCliente = totalCliente + precio;

    seguirProductos = prompt("¿Desea agregar otro producto? (1-SI / 0-NO)") * 1;
    }

    // Forma de pago //
    let formaPago = prompt("Forma de pago: 1-Efectivo, 2-Visa BNA, 3-Master BNA, 4-Otros") * 1;
    let descuento = 0;
    if (formaPago === 1) {
        descuento = totalCliente * 0.10;
    } else if (formaPago === 2 || formaPago === 3) {
        descuento = totalCliente * 0.07;
    } else {
        descuento = 0;
    }
    let importeFinal = totalCliente - descuento;

    ventaTotal = ventaTotal + totalCliente;
    descuentoTotal = descuentoTotal + descuento;
    totalAPagar = totalAPagar + importeFinal;
    if (descuento > 0) {
        clientesConDescuento = clientesConDescuento + 1;
    } else {
        clientesSinDescuento = clientesSinDescuento + 1;
    }

    // Continuar con la atencion de otros clientes //
    continuar = prompt("¿Desea atender otro cliente? (1-SI / 0-NO)") * 1;
}

console.log("Venta total: $" + ventaTotal);
console.log("Descuento total: $" + descuentoTotal);
console.log("Total a pagar: $" + totalAPagar);
console.log("Clientes con descuento: " + clientesConDescuento);
console.log("Clientes sin descuento: " + clientesSinDescuento);

}