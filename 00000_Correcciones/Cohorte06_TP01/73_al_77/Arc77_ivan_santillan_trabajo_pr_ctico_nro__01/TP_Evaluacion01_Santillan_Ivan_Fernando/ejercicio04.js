const numero = Number(prompt("Ingrese un numero:"));

if (numero > 0) {
  console.log("Con if/else: el numero es positivo.");
} else if (numero < 0) {
  console.log("Con if/else: el numero es negativo.");
} else {
  console.log("Con if/else: el numero es cero.");
}

const resultadoTernario = numero > 0
  ? "Con operador ternario: el numero es positivo."
  : numero < 0
    ? "Con operador ternario: el numero es negativo."
    : "Con operador ternario: el numero es cero.";

console.log(resultadoTernario);
