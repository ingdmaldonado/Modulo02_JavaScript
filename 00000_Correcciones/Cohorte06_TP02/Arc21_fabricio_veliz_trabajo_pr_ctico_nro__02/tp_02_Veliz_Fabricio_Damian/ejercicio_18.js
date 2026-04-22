/*
Ejercicio Nro. 18:
Supermercado, aplicación con dos ciclos while (clientes y productos).
Pagos: 1- Efectivo (10%), 2- Tarjeta Visa BNA (7%), 3- Tarjeta Master BNA (7%), 4- Otras (0%).
Registrar: Venta Total, Descuento Total, Importe a Pagar Total, Clientes con y sin descuento.
*/
{
    let ventaTotalGlobal = 0;
    let descuentoTotalGlobal = 0;
    let importePagarTotalGlobal = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    let continuarCliente = "s";

    while (continuarCliente.toLowerCase() === "s") {
        let importeClienteBruto = 0;
        let continuarProducto = "s";

        while (continuarProducto.toLowerCase() === "s") {
            let precioProducto = 0;
            precioProducto = Number(prompt("Ingrese el precio del producto:"));
            importeClienteBruto += precioProducto;

            continuarProducto = prompt("¿Desea ingresar otro producto para este cliente? (s/n)");
        }

        let formaPago = 0;
        let descuentoCliente = 0;
        let importeFinalCliente = 0;

        formaPago = Number(prompt(`Total del cliente: $${importeClienteBruto}\nIngrese forma de pago:\n1: Efectivo (10% desc)\n2: Visa BNA (7% desc)\n3: Master BNA (7% desc)\n4: Otras Tarjetas (sin desc)`));

        if (formaPago === 1) {
            descuentoCliente = importeClienteBruto * 0.10;
        } else if (formaPago === 2 || formaPago === 3) {
            descuentoCliente = importeClienteBruto * 0.07;
        } else {
            descuentoCliente = 0;
        }

        importeFinalCliente = importeClienteBruto - descuentoCliente;

        ventaTotalGlobal += importeClienteBruto;
        descuentoTotalGlobal += descuentoCliente;
        importePagarTotalGlobal += importeFinalCliente;

        if (descuentoCliente > 0) {
            clientesConDescuento++;
        } else {
            clientesSinDescuento++;
        }

        console.log(`Cliente procesado. Total Bruto: $${importeClienteBruto}. Descuento: $${descuentoCliente}. A pagar: $${importeFinalCliente}`);

        continuarCliente = prompt("¿Desea atender a otro cliente? (s/n)");
    }

    console.log(`--- RESUMEN FINAL DEL CAJERO ---`);
    console.log(`Venta Total (sin descuentos): $${ventaTotalGlobal}`);
    console.log(`Descuento Total Otorgado: $${descuentoTotalGlobal}`);
    console.log(`Importe a Pagar Total (recaudación real): $${importePagarTotalGlobal}`);
    console.log(`Cantidad de clientes que tuvieron descuentos: ${clientesConDescuento}`);
    console.log(`Cantidad de clientes que NO tuvieron descuentos: ${clientesSinDescuento}`);
}