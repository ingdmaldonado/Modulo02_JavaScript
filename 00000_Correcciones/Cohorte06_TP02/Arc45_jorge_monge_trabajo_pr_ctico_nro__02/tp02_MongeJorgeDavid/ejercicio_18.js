// Acumuladores globales
let ventaTotal = 0;
let descuentoTotal = 0;
let totalCobrado = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;

// Control de clientes
let continuarClientes = true;

while (continuarClientes) {

    let totalCliente = 0;

    // Control de productos
    let continuarProductos = true;

    while (continuarProductos) {

        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        if (!isNaN(precio) && precio > 0) {
            totalCliente += precio;
        } else {
            console.log("Precio inválido");
        }

        let seguir = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
        if (seguir !== "s") {
            continuarProductos = false;
        }
    }

    // Forma de pago
    let formaPago = prompt(
        "Forma de pago:\n1-Efectivo (10%)\n2-Visa BNA (7%)\n3-Master BNA (7%)\n4-Otros (0%)"
    );

    let descuento = 0;

    switch (formaPago) {
        case "1":
            descuento = totalCliente * 0.10;
            break;
        case "2":
        case "3":
            descuento = totalCliente * 0.07;
            break;
        case "4":
            descuento = 0;
            break;
        default:
            console.log("Forma de pago inválida");
    }

    let totalPagar = totalCliente - descuento;

    // Acumuladores globales
    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    totalCobrado += totalPagar;

    // Contadores
    if (descuento > 0) {
        clientesConDescuento++;
    } else {
        clientesSinDescuento++;
    }

    // Mostrar resumen del cliente
    console.log("Total compra cliente: $" + totalCliente.toFixed(2));
    console.log("Descuento: $" + descuento.toFixed(2));
    console.log("Total a pagar: $" + totalPagar.toFixed(2));

    // Continuar con otro cliente
    let seguirCliente = prompt("¿Desea atender otro cliente? (s/n)").toLowerCase();
    if (seguirCliente !== "s") {
        continuarClientes = false;
    }
}

// Resultados finales
console.log("=== CIERRE DE CAJA ===");
console.log("Venta Total: $" + ventaTotal.toFixed(2));
console.log("Descuento Total: $" + descuentoTotal.toFixed(2));
console.log("Total Cobrado: $" + totalCobrado.toFixed(2));
console.log("Clientes con descuento: " + clientesConDescuento);
console.log("Clientes sin descuento: " + clientesSinDescuento);