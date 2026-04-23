{
    // ========== ACUMULADORES GLOBALES ==========
let ventaTotal = 0;               // Suma de subtotales (sin descuento) de todos los clientes
let descuentoTotal = 0;           // Suma de todos los descuentos aplicados
let importeAPagarTotal = 0;       // Suma de totales con descuento de todos los clientes
let clientesConDescuento = 0;     // Cantidad de clientes que recibieron descuento
let clientesSinDescuento = 0;     // Cantidad de clientes que no recibieron descuento

alert("Sistema de cobro - Supermercado");

// ========== BUCLE EXTERNO: ATENCIÓN DE CLIENTES ==========
let continuarClientes = true;

while (continuarClientes) {
  alert("Nuevo cliente");

  let subtotalCliente = 0;
  let continuarProductos = true;

  // ========== BUCLE INTERNO: INGRESO DE PRODUCTOS ==========
  while (continuarProductos) {
    let entradaPrecio = prompt("Ingrese el precio del producto (0 para finalizar productos):");

    // Cancelar en producto
    if (entradaPrecio === null) {
      let salirProductos = confirm("¿Desea finalizar el ingreso de productos para este cliente?");
      if (salirProductos) {
        break;
      } else {
        continue;
      }
    }

    let precio = parseFloat(entradaPrecio);

    if (isNaN(precio) || precio < 0) {
      alert("Error: Ingrese un precio válido (número positivo o 0 para terminar).");
      continue;
    }

    if (precio === 0) {
      continuarProductos = false;
    } else {
      subtotalCliente += precio;
      alert(`Producto agregado. Subtotal actual: $${subtotalCliente.toFixed(2)}`);
    }
  }

  // Si no se ingresó ningún producto válido (subtotal = 0)
  if (subtotalCliente === 0) {
    alert("No se registraron productos para este cliente. Se omite.");
    // Preguntar si atender otro cliente
    let respuesta = prompt("¿Desea atender a otro cliente? (s/n)");
    if (respuesta === null || (respuesta.toLowerCase() !== "s" && respuesta.toLowerCase() !== "si" && respuesta.toLowerCase() !== "sí")) {
      continuarClientes = false;
    }
    continue;
  }

  // Mostrar subtotal
  alert(`Subtotal del cliente: $${subtotalCliente.toFixed(2)}`);

  // ========== SELECCIÓN DE MEDIO DE PAGO ==========
  let medioPago;
  let descuentoAplicado = 0;

  while (true) {
    let opcionPago = prompt(
      "Seleccione medio de pago:\n" +
      "1 - Efectivo (10% descuento)\n" +
      "2 - Tarjeta Visa BNA (7% descuento)\n" +
      "3 - Tarjeta Master BNA (7% descuento)\n" +
      "4 - Otras tarjetas/medios (sin descuento)\n" +
      "Ingrese el número de opción:"
    );

    if (opcionPago === null) {
      let cancelar = confirm("¿Cancelar la operación de este cliente?");
      if (cancelar) {
        alert("Cliente cancelado. No se registra.");
        subtotalCliente = 0; // Para que no afecte acumuladores
        break;
      } else {
        continue;
      }
    }

    medioPago = parseInt(opcionPago);

    if (isNaN(medioPago) || medioPago < 1 || medioPago > 4) {
      alert("Opción inválida. Ingrese 1, 2, 3 o 4.");
      continue;
    }

    // Asignar porcentaje de descuento según opción (casos separados)
    switch (medioPago) {
      case 1:
        descuentoAplicado = subtotalCliente * 0.10;
        break;
      case 2:
        descuentoAplicado = subtotalCliente * 0.07;
        break;
      case 3:
        descuentoAplicado = subtotalCliente * 0.07;
        break;
      case 4:
        descuentoAplicado = 0;
        break;
    }
    break;
  }

  if (subtotalCliente === 0) {
    // Cliente cancelado, preguntar si atiende otro
    let respuesta = prompt("¿Desea atender a otro cliente? (s/n)");
    if (respuesta === null || (respuesta.toLowerCase() !== "s" && respuesta.toLowerCase() !== "si" && respuesta.toLowerCase() !== "sí")) {
      continuarClientes = false;
    }
    continue;
  }

  let totalPagarCliente = subtotalCliente - descuentoAplicado;

  // Mostrar resumen del cliente
  alert(
    `Resumen del cliente:\n` +
    `Subtotal: $${subtotalCliente.toFixed(2)}\n` +
    `Descuento: $${descuentoAplicado.toFixed(2)}\n` +
    `Total a pagar: $${totalPagarCliente.toFixed(2)}`
  );

  // ========== ACTUALIZAR ACUMULADORES GLOBALES ==========
  ventaTotal += subtotalCliente;
  descuentoTotal += descuentoAplicado;
  importeAPagarTotal += totalPagarCliente;

  if (descuentoAplicado > 0) {
    clientesConDescuento++;
  } else {
    clientesSinDescuento++;
  }

  // ========== PREGUNTAR SI ATIENDE OTRO CLIENTE ==========
  let respuesta = prompt("¿Desea atender a otro cliente? (s/n)");
  if (respuesta === null) {
    continuarClientes = false;
  } else {
    respuesta = respuesta.toLowerCase();
    if (respuesta !== "s" && respuesta !== "si" && respuesta !== "sí") {
      continuarClientes = false;
    }
  }
}

// ========== RESUMEN FINAL DE LA JORNADA ==========
let mensajeFinal = `
======= CIERRE DE JORNADA =======

Venta total (subtotales): $${ventaTotal.toFixed(2)}
Descuento total aplicado: $${descuentoTotal.toFixed(2)}
Importe a pagar total: $${importeAPagarTotal.toFixed(2)}

Cantidad de clientes atendidos: ${clientesConDescuento + clientesSinDescuento}
Clientes con descuento: ${clientesConDescuento}
Clientes sin descuento: ${clientesSinDescuento}
`;

alert(mensajeFinal);
console.log(mensajeFinal);

}