/* ESTRUCTURA if-else */
let numeroIngresado = 0; 
numeroIngresado = Number(prompt("Ingrese un número:"));

if (numeroIngresado > 0) {
  console.log("El número:", numeroIngresado, "es POSITIVO.");
} 
else if (numeroIngresado < 0) {
  console.log("El número:", numeroIngresado, "es NEGATIVO.");
} 
else {
  console.log("El número es CERO.");
}


/* OPERADOR TERNARIO */
let numero = numeroIngresado > 0 ? "POSITIVO" : numeroIngresado < 0 ? "NEGATIVO" : "CERO";

console.log("El número", numeroIngresado, "es", numero );
