/* Ejercicio Nro. 18 */

function supermercado() {

    let continuarCliente = "si";

    // Acumuladores generales
    let ventaTotal = 0;
    let descuentoTotal = 0;
    let totalPagarGeneral = 0;

    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    // WHILE de clientes
    while (continuarCliente === "si") {

        let totalCliente = 0;
        let continuarProducto = "si";

        // WHILE de productos
        while (continuarProducto === "si") {

            let precio = Number(prompt("Ingrese el precio del producto"));
            totalCliente += precio;

            continuarProducto = prompt("¿Agregar otro producto? (si/no)");
        }

        // Forma de pago
        let formaPago = Number(prompt("Forma de pago: 1-Efectivo, 2-Visa BNA, 3-Master BNA, 4-Otros"));

        let descuento = 0;

        if (formaPago === 1) {
            descuento = totalCliente * 10 / 100;
            clientesConDescuento++;

        } else if (formaPago === 2 || formaPago === 3) {
            descuento = totalCliente * 7 / 100;
            clientesConDescuento++;

        } else if (formaPago === 4) {
            descuento = 0;
            clientesSinDescuento++;

        } else {
            console.log("Forma de pago inválida");
            clientesSinDescuento++;
        }

        let totalPagar = totalCliente - descuento;

        // Acumuladores generales
        ventaTotal += totalCliente;
        descuentoTotal += descuento;
        totalPagarGeneral += totalPagar;

        // Pregunto por otro cliente
        continuarCliente = prompt("¿Desea atender otro cliente? (si/no)");
    }

    // Muestro resultados finales
    console.log(`Venta total: ${ventaTotal}`);
    console.log(`Descuento total: ${descuentoTotal}`);
    console.log(`Total a pagar general: ${totalPagarGeneral}`);
    console.log(`Clientes con descuento: ${clientesConDescuento}`);
    console.log(`Clientes sin descuento: ${clientesSinDescuento}`);
}