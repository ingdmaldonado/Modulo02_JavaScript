{
  let numero = parseInt(prompt("Ingrese un número:"));
  if (numero > 0) {
    console.log("El número es positivo.");
  } else {
    console.log("El número es negativo.");
  }

  console.log("Con operador ternario");
    let resultado = numero > 0 ? "El número es positivo." : "El número es negativo.";
    console.log(resultado);
}
