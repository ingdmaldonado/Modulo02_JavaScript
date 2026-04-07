/*EJERCICIO 5*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un valor (X): ", (valor) => {
  let numero = parseInt(valor);

  if (numero % 2 === 0) {
    console.log("El número es PAR.");
  } else {
    console.log("El número es IMPAR.");
  }

  rl.close();
});