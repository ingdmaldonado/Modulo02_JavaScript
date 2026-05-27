let ventatotal = 0;
let descuentototal = 0;
let importepagartotal = 0;

let clientescondescuento = 0;
let clientessindescuento = 0;

let continuarclientes = "SI";

while (continuarclientes == "SI") {

    let totalcliente = 0;

    let continuarProductos = "SI";

    while (continuarProductos == "SI") {

        let precio = parseFloat(prompt("ingrese precio del producto"));

        totalCliente += precio;

        continuarProductos = prompt("¿desea agregar otro producto? si / no");
    }

    let medioPago = prompt(
        "Seleccione medio de pago:\n1-Efectivo\n2-Visa BNA\n3-Master BNA\n4-Otras tarjetas"
    );

    let descuento = 0;

    if (medioPago == "1") {
        descuento = totalCliente * 0.10;
        clientesConDescuento++;
    }
    else if (medioPago == "2" || medioPago == "3") {
        descuento = totalCliente * 0.07;
        clientesConDescuento++;
    }
    else {
        clientessindescuento++;
    }

    let totalPagar = totalcliente - descuento;

    ventatotal += totalcliente;
    descuentototal += descuento;
    importepagartotal += totalPagar;

    alert(
        "total compra: $" + totalCliente + "\n" +
        "descuento: $" + descuento + "\n" +
        "total a pagar: $" + totalPagar
    );

    continuarclientes = prompt("¿desea atender otro cliente? si / no");
}

alert(
    "venta total: $" + ventaTotal + "\n" +
    "descuento total: $" + descuentoTotal + "\n" +
    "importe a pagar total: $" + importepagartotal + "\n" +
    "clientes con descuento: " + clientescondescuento + "\n" +
    "clientes sin descuento: " + clientessindescuento
);