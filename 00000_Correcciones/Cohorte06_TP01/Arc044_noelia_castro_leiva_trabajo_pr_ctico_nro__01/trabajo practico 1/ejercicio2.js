/*EJERCICIO 2*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el importe total de la compra: ", (importe) => {
  let descuento = parseFloat(importe) * 0.15;
  let importeRestante = parseFloat(importe) - descuento;

  console.log("El importe total de la compra es: " + importe);
  console.log("El descuento del 15% es: " + descuento);
  console.log("El importe restante final es: " + importeRestante);

  rl.close();
});