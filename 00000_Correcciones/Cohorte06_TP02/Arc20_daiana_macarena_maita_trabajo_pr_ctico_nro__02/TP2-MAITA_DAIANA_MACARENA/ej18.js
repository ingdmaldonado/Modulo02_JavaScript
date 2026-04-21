// EJERCICIO 18 - SUPERMERCADO

let ventaTotal = 0;
let descuentoTotal = 0;
let importeTotal = 0;
let conDesc = 0;
let sinDesc = 0;

let clientes = true;

while (clientes) {

    let totalCliente = 0;

    let productos = true;

    // Bucle de productos
    while (productos) {

        let precio = parseFloat(prompt("Precio producto"));
        totalCliente += precio;

        productos = confirm("¿Agregar otro producto?");
    }

    let medio = prompt("1-Efectivo 2-Visa 3-Master 4-Otros");

    let descuento = 0;

    if (medio == "1") descuento = totalCliente * 0.10;
    else if (medio == "2" || medio == "3") descuento = totalCliente * 0.07;

    if (descuento > 0) conDesc++;
    else sinDesc++;

    let totalPagar = totalCliente - descuento;

    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    importeTotal += totalPagar;

    clientes = confirm("¿Atender otro cliente?");
}

// Resultados
alert("Venta total: $" + ventaTotal);
alert("Descuento total: $" + descuentoTotal);
alert("Importe total: $" + importeTotal);
alert("Clientes con descuento: " + conDesc);
alert("Clientes sin descuento: " + sinDesc);