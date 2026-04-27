// acumuladores generales
let totalVenta = 0;
let totalDescuento = 0;
let totalFinal = 0;

let conDesc = 0;
let sinDesc = 0;

let seguir = true;

// clientes
while (seguir) {

  let subtotal = 0;
  let descuento = 0;
  let tieneDesc = false;

  // cantidad de productos
  let cant = parseInt(prompt("¿Cuántos productos lleva el cliente?"));

  while (isNaN(cant) || cant <= 0) {
    cant = parseInt(prompt("Ingresá una cantidad válida"));
  }

  // productos
  let i = 0;
  while (i < cant) {

    let precio = parseFloat(prompt("Precio del producto " + (i + 1)));

    while (isNaN(precio) || precio < 0) {
      precio = parseFloat(prompt("Precio inválido, ingresá de nuevo"));
    }

    subtotal += precio;
    i++;
  }

  // forma de pago
  let pago = parseInt(prompt(
    "Forma de pago:\n1- Efectivo\n2- Visa BNA\n3- Master BNA\n4- Otros"
  ));

  if (pago === 1) {
    descuento = subtotal * 0.10;
    tieneDesc = true;

  } else if (pago === 2 || pago === 3) {
    descuento = subtotal * 0.07;
    tieneDesc = true;

  } else {
    descuento = 0;
  }

  let totalCliente = subtotal - descuento;

  // acumular
  totalVenta += subtotal;
  totalDescuento += descuento;
  totalFinal += totalCliente;

  if (tieneDesc) {
    conDesc++;
  } else {
    sinDesc++;
  }

  // seguir o no
  let resp = prompt("¿Seguir con otro cliente? (s/n)");

  if (!resp || resp.toLowerCase() !== "s") {
    seguir = false;
  }
}

// resultados
console.log("---- RESULTADO ----");
console.log("Venta total:", totalVenta);
console.log("Descuento total:", totalDescuento);
console.log("Total a pagar:", totalFinal);
console.log("Clientes con descuento:", conDesc);
console.log("Clientes sin descuento:", sinDesc);
