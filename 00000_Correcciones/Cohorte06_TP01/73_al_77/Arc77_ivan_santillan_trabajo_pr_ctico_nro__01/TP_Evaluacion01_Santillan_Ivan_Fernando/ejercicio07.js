const codigoProducto = Number(prompt("Ingrese el codigo del producto (1, 2 o 3):"));
const cantidadBolsas = Number(prompt("Ingrese la cantidad de bolsas a comprar:"));

let descripcion = "";
let precioUnitario = 0;

if (codigoProducto === 1) {
  descripcion = "Dogui x 21 kil.";

  if (cantidadBolsas >= 11) {
    precioUnitario = 34000;
  } else if (cantidadBolsas >= 5) {
    precioUnitario = 36000;
  } else {
    precioUnitario = 38000;
  }
} else if (codigoProducto === 2) {
  descripcion = "Tiernitos x 21 kil.";

  if (cantidadBolsas >= 11) {
    precioUnitario = 27000;
  } else if (cantidadBolsas >= 5) {
    precioUnitario = 29000;
  } else {
    precioUnitario = 31000;
  }
} else if (codigoProducto === 3) {
  descripcion = "Dogpro x 21 kil.";

  if (cantidadBolsas >= 11) {
    precioUnitario = 42000;
  } else if (cantidadBolsas >= 5) {
    precioUnitario = 44000;
  } else {
    precioUnitario = 46000;
  }
} else {
  console.log("Codigo de producto invalido.");
}

if (precioUnitario > 0) {
  const importeTotal = precioUnitario * cantidadBolsas;

  console.log("Producto:", descripcion);
  console.log("Cantidad de bolsas:", cantidadBolsas);
  console.log("Precio unitario: $", precioUnitario);
  console.log("Importe total a pagar: $", importeTotal);
}
