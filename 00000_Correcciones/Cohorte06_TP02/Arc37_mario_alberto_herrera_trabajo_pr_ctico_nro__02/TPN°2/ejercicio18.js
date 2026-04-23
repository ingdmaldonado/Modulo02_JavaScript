
let ventaTotalSuma = 0;
let descuentoTotalSuma = 0;
let importeAPagarTotalSuma = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;

let atenderCliente = prompt("¿Desea atender a un cliente? (si/no)");


while (atenderCliente == "si" || atenderCliente == "SI") {
    
    let subtotalCliente = 0;
    let llevarProducto = prompt("¿El cliente lleva un producto? (si/no)");
    
  
    while (llevarProducto == "si" || llevarProducto == "SI") {
        let precioEntrada = prompt("Ingrese el precio del producto:");
        let precio = +precioEntrada; 

        if (precio > 0) {
            subtotalCliente = subtotalCliente + precio;
        }

        llevarProducto = prompt("¿Lleva otro producto? (si/no)");
    }

  
    let medioPago = prompt("Medio de pago: 1-Efectivo, 2-Visa BNA, 3-Master BNA, 4-Otros");
    let descuento = 0;

    if (medioPago == "1") {
        descuento = subtotalCliente * 0.10; 
    } else if (medioPago == "2" || medioPago == "3") {
        descuento = subtotalCliente * 0.07; 
    } else {
        descuento = 0;
    }

   
    let importeFinalCliente = subtotalCliente - descuento;

    
    if (descuento > 0) {
        clientesConDescuento = clientesConDescuento + 1;
    } else {
        clientesSinDescuento = clientesSinDescuento + 1;
    }

   
    ventaTotalSuma = ventaTotalSuma + subtotalCliente;
    descuentoTotalSuma = descuentoTotalSuma + descuento;
    importeAPagarTotalSuma = importeAPagarTotalSuma + importeFinalCliente;

    
    atenderCliente = prompt("¿Desea atender al siguiente cliente de la jornada? (si/no)");
}


console.log("--- CIERRE DE JORNADA LABORAL ---");
console.log("Venta Total: $" + ventaTotalSuma);
console.log("Descuento Total: $" + descuentoTotalSuma);
console.log("Importe a Pagar Total: $" + importeAPagarTotalSuma);
console.log("Clientes con descuento: " + clientesConDescuento);
console.log("Clientes sin descuento: " + clientesSinDescuento);