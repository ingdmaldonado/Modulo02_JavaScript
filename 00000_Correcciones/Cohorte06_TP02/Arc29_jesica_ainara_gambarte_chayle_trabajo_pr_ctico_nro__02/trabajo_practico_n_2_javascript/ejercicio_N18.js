//controles
let continuarClientes = true;
let respuestaCliente;

//puntos
let ventaTotal = 0;
let descuentoTotal = 0;
let importeTotalPagar = 0;

//clientes
let clientesConDescuento = 0;
let clientesSinDescuento = 0;

let cantidadClientes = 0;
while (continuarClientes)
     {
    cantidadClientes++;

    let continuarProductos = true;
    let totalCliente = 0;

 //productos
    while (continuarProductos) 
        {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        if (isNaN(precio) || precio <= 0) {
            alert("Precio inválido");
        } else {
            totalCliente += precio;
        }

        let respProd = prompt("¿Desea agregar otro producto? (si/no)");
        if (respProd.toLowerCase() !== "si") {
            continuarProductos = false;
        }
    }

 //metodos de pago
    let metodo = prompt(
        "Total del cliente: $" + totalCliente + "\n\n" +
        "Seleccione método de pago:\n" +
        "1 - Efectivo (10% descuento)\n" +
        "2 - Visa BNA (7% descuento)\n" +
        "3 - Master BNA (7% descuento)\n" +
        "4 - Otros (sin descuento)"
    );

    let descuento = 0;
    switch (metodo) 
    {
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
            alert("Método inválido, se considera sin descuento");
            descuento = 0;
            clientesSinDescuento++;
    }

    let importePagar = totalCliente - descuento;

//general
    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    importeTotalPagar += importePagar;

    alert(
        "=== RESUMEN CLIENTE ===\n\n" +
        "Total compra: $" + totalCliente + "\n" +
        "Descuento: $" + descuento + "\n" +
        "Importe a pagar: $" + importePagar
    );

  //preguntar si desea continuar o no
    respuestaCliente = prompt("¿Desea atender otro cliente? (si/no)");

    if (respuestaCliente.toLowerCase() !== "si")
     {
        continuarClientes = false;   
    }
}
//resultado
console.log("--- CIERRE DE CAJA ---");
console.log("Venta Total (sin desc): $" + ventaTotal.toFixed(2));
console.log("Descuento Total Realizado: $" + descuentoTotal.toFixed(2));
console.log("Importe a Pagar Total (neto): $" + importeTotalPagar.toFixed(2));
console.log("Cantidad de clientes con descuento: " + clientesConDescuento);
console.log("Cantidad de clientes sin descuento: " + clientesSinDescuento);
