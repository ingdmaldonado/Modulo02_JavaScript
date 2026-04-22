// Variables globales para el cierre de jornada
let ventaTotalBruta = 0;
let descuentoTotalAcumulado = 0;
let importeAPagarTotal = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;

let hayMasClientes = true;

// CICLO EXTERIOR: Atender a "n" clientes
while (hayMasClientes) {
    let subtotalCliente = 0;
    let hayMasProductos = true;

    // CICLO INTERIOR: Registrar "m" productos por cliente
    while (hayMasProductos) {
        let precioProducto = parseFloat(prompt("Ingrese el precio del producto (0 para terminar productos):"));
        
        if (precioProducto > 0) {
            subtotalCliente += precioProducto;
        } else {
            hayMasProductos = false;
        }
    }

    if (subtotalCliente > 0) {
        // Selección de medio de pago y descuentos
        let medioPago = prompt(
            "Subtotal: $" + subtotalCliente + "\n" +
            "Seleccione medio de pago:\n" +
            "1 - Efectivo (10% desc)\n" +
            "2 - Tarjeta Visa BNA (7% desc)\n" +
            "3 - Tarjeta Master BNA (7% desc)\n" +
            "4 - Otras Tarjetas (Sin desc)"
        );

        let porcentajeDescuento = 0;

        switch (medioPago) {
            case "1":
                porcentajeDescuento = 0.10;
                break;
            case "2":
            case "3":
                porcentajeDescuento = 0.07;
                break;
            default:
                porcentajeDescuento = 0;
                break;
        }

        // Cálculos por cliente
        let montoDescuento = subtotalCliente * porcentajeDescuento;
        let totalAPagar = subtotalCliente - montoDescuento;

        // Actualización de estadísticas globales
        ventaTotalBruta += subtotalCliente;
        descuentoTotalAcumulado += montoDescuento;
        importeAPagarTotal += totalAPagar;

        if (montoDescuento > 0) {
            clientesConDescuento++;
        } else {
            clientesSinDescuento++;
        }

        alert("Cliente atendido. Total a pagar: $" + totalAPagar);
    }

    // Preguntar si hay otro cliente en la fila
    let respuesta = prompt("¿Hay más clientes por atender? (si/no)").toLowerCase();
    if (respuesta !== "si" && respuesta !== "s") {
        hayMasClientes = false;
    }
}

// Informe final de la jornada
console.log("--- CIERRE DE CAJA ---");
console.log("Venta Total (sin desc): $" + ventaTotalBruta.toFixed(2));
console.log("Descuento Total Realizado: $" + descuentoTotalAcumulado.toFixed(2));
console.log("Importe a Pagar Total (neto): $" + importeAPagarTotal.toFixed(2));
console.log("Cantidad de clientes con descuento: " + clientesConDescuento);
console.log("Cantidad de clientes sin descuento: " + clientesSinDescuento);