/*EJERCICIO 8*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let resultado = "";

rl.question("Ingrese su edad: ", (edadIngresada) => {

  const edad = parseInt(edadIngresada);

  if (edad <= 12) {
    resultado = "niño";
  } else if (edad <= 17) {
    resultado = "adolescente";
  } else if (edad <= 64) {
    resultado = "adulto";
  } else {
    resultado = "adulto mayor";
  }
  console.log("Su categoría es: " + resultado);

  rl.close();
});