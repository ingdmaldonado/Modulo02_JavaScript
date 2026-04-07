/*EJERCICIO 6*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el valor de la compra: ", (compras) => {
  let descuento = parseFloat(compras) * 0.5;
  let descuentoMaximo = 80000;

  if (descuento > descuentoMaximo) {
    descuento = descuentoMaximo;
  }

  let totalDescuento = parseFloat(compras) - descuento;

  console.log("El descuento aplicado es: " + descuento);
  console.log("El total a pagar es: " + totalDescuento);

  rl.close();
});