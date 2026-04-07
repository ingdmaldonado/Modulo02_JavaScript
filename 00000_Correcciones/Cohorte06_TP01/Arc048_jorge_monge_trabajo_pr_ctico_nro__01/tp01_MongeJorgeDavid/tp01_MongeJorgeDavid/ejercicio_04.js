// Pedir número al usuario
let numero = parseFloat(prompt("Ingrese un número:"));

// Usando if/else
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}


//usando operador ternario
let resultado = (numero > 0) ? "El número es positivo"
              : (numero < 0) ? "El número es negativo"
              : "El número es cero";

console.log(resultado);