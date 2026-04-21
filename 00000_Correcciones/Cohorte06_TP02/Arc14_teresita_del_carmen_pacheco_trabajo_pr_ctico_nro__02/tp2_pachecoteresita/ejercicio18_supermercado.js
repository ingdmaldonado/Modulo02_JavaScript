// ACUMULADORES GENERALES
let ventaTotal = 0;
let descuentoTotal = 0;
let importeTotal = 0;

let clientesConDescuento = 0;
let clientesSinDescuento = 0;

let continuarClientes = true;

// WHILE DE CLIENTES
while (continuarClientes) {

    let totalCliente = 0;
    let continuarProductos = true;

    // WHILE DE PRODUCTOS
    while (continuarProductos) {

        let precio = parseFloat(prompt("Ingrese precio del producto:"));

        if (!isNaN(precio) && precio > 0) {
            totalCliente += precio;
        } else {
            alert("Precio inválido");
        }

        let respProd = prompt("¿Agregar otro producto? (s/n)");
        if (respProd.toLowerCase() !== "s") {
            continuarProductos = false;
        }
    }

    // FORMA DE PAGO
    let formaPago = prompt(
        "Forma de pago:\n" +
        "1 - Efectivo (10% desc.)\n" +
        "2 - Visa BNA (7% desc.)\n" +
        "3 - Master BNA (7% desc.)\n" +
        "4 - Otras tarjetas (sin desc.)"
    );

    let descuento = 0;

    switch (formaPago) {
        case "1":
            descuento = totalCliente * 0.10;
            clientesConDescuento++;
            break;
        case "2":
        case "3":
            descuento = totalCliente * 0.07;
            clientesConDescuento++;
            break;
        case "4":
            descuento = 0;
            clientesSinDescuento++;
            break;
        default:
            alert("Opción inválida, sin descuento");
            clientesSinDescuento++;
    }

    let importeFinal = totalCliente - descuento;

    // ACUMULADORES GENERALES
    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    importeTotal += importeFinal;

    alert(
        "Total compra: $" + totalCliente.toFixed(2) + "\n" +
        "Descuento: $" + descuento.toFixed(2) + "\n" +
        "Importe a pagar: $" + importeFinal.toFixed(2)
    );

    // CONTINUAR CON CLIENTES
    let respCliente = prompt("¿Atender otro cliente? (s/n)");
    if (respCliente.toLowerCase() !== "s") {
        continuarClientes = false;
    }
}

// RESULTADOS FINALES
alert(
    "=== CIERRE DE CAJA ===\n\n" +
    "Venta Total: $" + ventaTotal.toFixed(2) + "\n" +
    "Descuento Total: $" + descuentoTotal.toFixed(2) + "\n" +
    "Importe Total Cobrado: $" + importeTotal.toFixed(2) + "\n\n" +
    "Clientes con descuento: " + clientesConDescuento + "\n" +
    "Clientes sin descuento: " + clientesSinDescuento
);