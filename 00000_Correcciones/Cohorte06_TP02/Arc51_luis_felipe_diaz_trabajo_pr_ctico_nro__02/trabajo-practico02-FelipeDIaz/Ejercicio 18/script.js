{
    // Variables globales de la jornada
    let ventaTotalAcumulada = 0;
    let descuentoTotalAcumulado = 0;
    let importeAPagarTotalAcumulado = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    let continuarJornada = "";

    // VALIDACIÓN INICIAL: Solo acepta SI o NO
    while (continuarJornada !== "SI" && continuarJornada !== "NO") {
        continuarJornada = prompt("¿Desea atender a un cliente? (Ingrese solo SI o NO)").toUpperCase();
    }

    // Ciclo principal: Atender a "n" clientes 
    while (continuarJornada === "SI") {
        let subtotalCliente = 0;
        let continuarProductos = "SI";
        
        // Ciclo interno: Registrar productos 
        while (continuarProductos === "SI") {
            let precioProducto = Number(prompt("Ingrese el precio del producto:"));
            
            if (!isNaN(precioProducto) && precioProducto > 0) {
                subtotalCliente += precioProducto;
            } else {
                alert("Precio no válido.");
            }
            
            // Validación interna para productos
            continuarProductos = "";
            while (continuarProductos !== "SI" && continuarProductos !== "NO") {
                continuarProductos = prompt("¿El cliente lleva otro producto? (SI o NO)").toUpperCase();
            }
        }

        let medioPago = prompt(
            "Subtotal: $" + subtotalCliente + "\n" +
            "Seleccione medio de pago:\n" +
            "1- Efectivo (10% desc)\n" +
            "2- Tarjeta Visa BNA (7% desc)\n" +
            "3- Tarjeta Master BNA (7% desc)\n" +
            "4- Otras Tarjetas (Sin desc)"
        );

        let porcentajeDescuento = 0;

        switch (medioPago) {
            case "1":
                porcentajeDescuento = 0.10; // 10%
                break;
            case "2":
            case "3":
                porcentajeDescuento = 0.07; // 7% 
                break; 
            default:
                porcentajeDescuento = 0; 
                break;
        }

        let montoDescuento = subtotalCliente * porcentajeDescuento;
        let totalConDescuento = subtotalCliente - montoDescuento;

        ventaTotalAcumulada += subtotalCliente;
        descuentoTotalAcumulado += montoDescuento;
        importeAPagarTotalAcumulado += totalConDescuento;

        if (montoDescuento > 0) {
            clientesConDescuento++;
        } else {
            clientesSinDescuento++;
        }

        alert("Cliente atendido. Total: $" + totalConDescuento.toFixed(2));

        // VALIDACIÓN PARA SIGUIENTE CLIENTE
        continuarJornada = "";
        while (continuarJornada !== "SI" && continuarJornada !== "NO") {
            continuarJornada = prompt("¿Desea atender a otro cliente? (SI o NO)").toUpperCase();
        }
    }

    // Informe final 
    console.log("--- CIERRE DE CAJA SUPERMERCADO ---");
    console.log("Venta Total: $" + ventaTotalAcumulada.toFixed(2));
    console.log("Descuento Total: $" + descuentoTotalAcumulado.toFixed(2));
    console.log("Importe a Pagar Total: $" + importeAPagarTotalAcumulado.toFixed(2));
    console.log("Clientes con descuento: " + clientesConDescuento);
    console.log("Clientes sin descuento: " + clientesSinDescuento);
}