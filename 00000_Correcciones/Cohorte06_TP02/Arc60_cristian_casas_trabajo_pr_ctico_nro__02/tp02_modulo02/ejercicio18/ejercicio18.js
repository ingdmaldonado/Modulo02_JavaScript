/*
Ejercicio 18:
Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los 
clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
- Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 
5 clientes. 
Nota: debería resolverse aplicando un ciclo while de clientes.

- Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 
10, 15, 20, 50 productos. 
Nota: debería resolverse aplicando un ciclo while de productos.
- Al finalizar la atención del cliente, debería preguntar si paga con:
o 1 – Efectivo – aplicar descuento 10%
o 2 – Tarjeta Visa BNA – aplicar descuento 7%
o 3 – Tarjeta Master BNA – aplicar descuento 7%
o 4 – Otras Tarjetas Medios – sin descuentos.
- Al finalizar la atención del cliente deberá ir registrando los siguientes puntos
o Venta Total = Acumular la venta de todos los clientes
o Descuento Total = Acumular los descuentos realizados a cada cliente
o Importe a Pagar Total = Acumular los Importes a pagar por cada cliente
o Contar la cantidad de clientes que Tuvieron descuentos
o Contar la cantidad de clientes que No Tuvieron descuentos.

Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente.
*/

// Variables principales del sistema
let ventaTotal = 0;
let descuentoTotal = 0;
let importePagarTotal = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;
let clientesAtendidos = 0;

// Variables para controlar los ciclos
let hayMasClientes = true;
let hayMasProductos = true;

// Mensaje de bienvenida
alert("Bienvenido al Sistema de Cobro del Supermercado");

// CICLO WHILE EXTERNO - ATENDER A LOS CLIENTES
while (hayMasClientes === true) {
    
    // Variables del cliente actual
    let ventaDelCliente = 0;
    let numeroProducto = 1;
    clientesAtendidos = clientesAtendidos + 1;
    
    // Reiniciar la bandera para los productos
    hayMasProductos = true;
    
    // CICLO WHILE INTERNO - REGISTRAR LOS PRODUCTOS
    while (hayMasProductos === true) {
        
        // Pedir el precio del producto
        let precioProducto = Number(prompt(`Cliente Nro. ${clientesAtendidos} - Producto Nro. ${numeroProducto}\nIngrese el precio del producto:`));
        
        // Sumar el precio al total del cliente
        ventaDelCliente = ventaDelCliente + precioProducto;
        
        // Preguntar si hay más productos
        let respuestaProducto = prompt(`¿Hay más productos?\n(Escriba: s para Sí, n para No)`);
        
        if (respuestaProducto === "s" || respuestaProducto === "S") {
            hayMasProductos = true;
            numeroProducto = numeroProducto + 1;
        } else {
            hayMasProductos = false;
        }
    }
    
    // Al terminar de procesar todos los productos del cliente
    // Pedir el método de pago
    let metodoPago = Number(prompt(`Cliente Nro. ${clientesAtendidos}\nTotal: $${ventaDelCliente}\n\nMétodo de Pago:\n1 - Efectivo (10% desc)\n2 - Tarjeta Visa BNA (7% desc)\n3 - Tarjeta Master BNA (7% desc)\n4 - Otras Tarjetas (sin desc)`));
    
    // Variables para el descuento
    let descuentoDelCliente = 0;
    let importeAPagar = 0;
    
    // Aplicar descuento según el método de pago
    if (metodoPago === 1) {
        // Efectivo: 10% descuento
        descuentoDelCliente = ventaDelCliente * 0.10;
        importeAPagar = ventaDelCliente - descuentoDelCliente;
        clientesConDescuento = clientesConDescuento + 1;
        
    } else if (metodoPago === 2 || metodoPago === 3) {
        // Visa BNA o Master BNA: 7% descuento
        descuentoDelCliente = ventaDelCliente * 0.07;
        importeAPagar = ventaDelCliente - descuentoDelCliente;
        clientesConDescuento = clientesConDescuento + 1;
        
    } else if (metodoPago === 4) {
        // Otras Tarjetas: sin descuento
        descuentoDelCliente = 0;
        importeAPagar = ventaDelCliente;
        clientesSinDescuento = clientesSinDescuento + 1;
    }
    
    // Acumular los totales
    ventaTotal = ventaTotal + ventaDelCliente;
    descuentoTotal = descuentoTotal + descuentoDelCliente;
    importePagarTotal = importePagarTotal + importeAPagar;
    
    // Mostrar resumen del cliente
    alert(`Cliente Nro. ${clientesAtendidos}\n\nVenta: $${ventaDelCliente}\nDescuento: $${descuentoDelCliente}\nImporte a Pagar: $${importeAPagar}`);
    
    // Preguntar si hay otro cliente
    let respuestaCliente = prompt("¿Hay otro cliente?\n(Escriba: s para Sí, n para No)");
    
    if (respuestaCliente === "s" || respuestaCliente === "S") {
        hayMasClientes = true;
    } else {
        hayMasClientes = false;
    }
}

// Resumen final del dia
let resumenFinal = "";
resumenFinal = resumenFinal + "=== RESUMEN DEL DÍA ===\n\n";
resumenFinal = resumenFinal + "Clientes Atendidos: " + clientesAtendidos + "\n";
resumenFinal = resumenFinal + "Venta Total: $" + ventaTotal + "\n";
resumenFinal = resumenFinal + "Descuento Total: $" + descuentoTotal + "\n";
resumenFinal = resumenFinal + "Importe a Pagar Total: $" + importePagarTotal + "\n\n";
resumenFinal = resumenFinal + "Clientes con Descuento: " + clientesConDescuento + "\n";
resumenFinal = resumenFinal + "Clientes sin Descuento: " + clientesSinDescuento;

// Mostrar los resultados en la consola
console.log(resumenFinal);
