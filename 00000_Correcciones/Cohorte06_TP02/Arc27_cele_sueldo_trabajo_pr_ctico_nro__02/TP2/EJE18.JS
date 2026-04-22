// Programa de supermercado

let atender = "si";

// Acumuladores generales
let ventaTotal = 0;
let descuentoTotal = 0;
let importeTotal = 0;

let clientesConDescuento = 0;
let clientesSinDescuento = 0;

// WHILE de CLIENTES
while (atender.toLowerCase() == "si") {

    let totalCompra = 0;
    let cargarProducto = "si";

    // WHILE de PRODUCTOS
    while (cargarProducto.toLowerCase() == "si") {

        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        if (!isNaN(precio) && precio > 0) {
            totalCompra = totalCompra + precio;
        } else {
            alert("Precio inválido");
        }

        cargarProducto = prompt("¿Desea agregar otro producto? (si / no)");
    }

    // Forma de pago
    let formaPago = prompt(
        "Forma de pago:\n" +
        "1 - Efectivo (10% desc)\n" +
        "2 - Visa BNA (7% desc)\n" +
        "3 - Master BNA (7% desc)\n" +
        "4 - Otras (sin desc)"
    );

    let descuento = 0;

    if (formaPago == "1") {
        descuento = totalCompra * 0.10;
    }

    if (formaPago == "2" || formaPago == "3") {
        descuento = totalCompra * 0.07;
    }

    if (formaPago == "4") {
        descuento = 0;
    }

    // Calcular importe final
    let importePagar = totalCompra - descuento;

    // Acumular totales
    ventaTotal = ventaTotal + totalCompra;
    descuentoTotal = descuentoTotal + descuento;
    importeTotal = importeTotal + importePagar;

    // Contadores de clientes
    if (descuento > 0) {
        clientesConDescuento = clientesConDescuento + 1;
    } else {
        clientesSinDescuento = clientesSinDescuento + 1;
    }

    // Mostrar resumen del cliente
    alert(
        "RESUMEN CLIENTE\n\n" +
        "Total compra: $" + totalCompra + "\n" +
        "Descuento: $" + descuento + "\n" +
        "Importe a pagar: $" + importePagar
    );

    // Continuar con otro cliente
    atender = prompt("¿Desea atender otro cliente? (si / no)");
}

// RESULTADOS FINALES
alert(
    "CIERRE DE CAJA\n\n" +
    "Venta Total: $" + ventaTotal + "\n" +
    "Descuento Total: $" + descuentoTotal + "\n" +
    "Importe Total Cobrado: $" + importeTotal + "\n\n" +
    "Clientes con descuento: " + clientesConDescuento + "\n" +
    "Clientes sin descuento: " + clientesSinDescuento
);