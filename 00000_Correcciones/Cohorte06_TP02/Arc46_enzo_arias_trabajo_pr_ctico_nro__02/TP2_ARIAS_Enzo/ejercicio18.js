{


    let acumuladorVentasTotalesBrutas = 0;
    let acumuladorDescuentosTotalesOtorgados = 0;
    let acumuladorImportesNetosCobrados = 0;
    let cantidadClientesBeneficiadosConDescuento = 0;
    let cantidadClientesSinBeneficioDeDescuento = 0;
    
    let supermercadoAtendiendoClientes = true;
    
    while (supermercadoAtendiendoClientes) {
        let subtotalCompraClienteActual = 0;
        let clienteSiguePasandoProductos = true;
        
        console.log("--- INICIANDO ATENCIÓN DE UN NUEVO CLIENTE ---");
    
        while (clienteSiguePasandoProductos) {
            let precioDelProductoIngresado = parseFloat(prompt("Escanee/Ingrese el precio del producto (o digite 0 para finalizar la compra de este cliente):"));
            
            if (precioDelProductoIngresado === 0) {
                clienteSiguePasandoProductos = false;
            } else if (precioDelProductoIngresado > 0) {
                subtotalCompraClienteActual += precioDelProductoIngresado;
            } else {
                console.log("El valor del producto ingresado no es válido.");
            }
        }
    
        if (subtotalCompraClienteActual > 0) {
            let metodoDePagoSeleccionado = prompt(`El subtotal de la compra es: $${subtotalCompraClienteActual}\nIndique el método de pago elegido por el cliente:\n1- Dinero en Efectivo (Aplica 10% de descuento)\n2- Tarjeta de Crédito Visa BNA (Aplica 7% de descuento)\n3- Tarjeta de Crédito MasterCard BNA (Aplica 7% de descuento)\n4- Otras Tarjetas u otros medios (No aplica descuentos)`);
    
            let montoDelDescuentoAplicadoAlCliente = 0;
    
            if (metodoDePagoSeleccionado === "1") {
                montoDelDescuentoAplicadoAlCliente = subtotalCompraClienteActual * 0.10;
            } else if (metodoDePagoSeleccionado === "2" || metodoDePagoSeleccionado === "3") {
                montoDelDescuentoAplicadoAlCliente = subtotalCompraClienteActual * 0.07;
            }
    
            let importeFinalNetoAPagarPorCliente = subtotalCompraClienteActual - montoDelDescuentoAplicadoAlCliente;
            
            acumuladorVentasTotalesBrutas += subtotalCompraClienteActual;
            acumuladorDescuentosTotalesOtorgados += montoDelDescuentoAplicadoAlCliente;
            acumuladorImportesNetosCobrados += importeFinalNetoAPagarPorCliente;
    
            if (montoDelDescuentoAplicadoAlCliente > 0) {
                cantidadClientesBeneficiadosConDescuento++;
            } else {
                cantidadClientesSinBeneficioDeDescuento++;
            }
    
            console.log(`Ticket del cliente generado: Importe a abonar: $${importeFinalNetoAPagarPorCliente} (Ahorro obtenido por descuentos: $${montoDelDescuentoAplicadoAlCliente})`);
        } else {
            console.log("Atención finalizada: El cliente no registró ningún producto válido en su carrito.");
        }
    
        let verificarProximoClienteEnFila = prompt("¿Hay más clientes esperando en la fila de la caja? (Responda 'si' para continuar, o cualquier otra cosa para cerrar la caja)");
        if (verificarProximoClienteEnFila.toLowerCase() !== "si") {
            supermercadoAtendiendoClientes = false;
        }
    }
    
    console.log(`
    --- INFORME FINAL DE CIERRE DE CAJA DEL SUPERMERCADO ---
    Venta Total Acumulada (Bruto sin descuentos): $${acumuladorVentasTotalesBrutas}
    Descuento Total Otorgado a clientes: $${acumuladorDescuentosTotalesOtorgados}
    Importe Neto Total Ingresado a Caja: $${acumuladorImportesNetosCobrados}
    
    Métricas de Clientes:
    - Cantidad de clientes que obtuvieron algún descuento: ${cantidadClientesBeneficiadosConDescuento}
    - Cantidad de clientes que pagaron tarifa completa (sin descuento): ${cantidadClientesSinBeneficioDeDescuento}
    `);
    }