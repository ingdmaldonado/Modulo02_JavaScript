// Ingreso de datos
let num = parseFloat(prompt("Ingrese un número:"));

// Estructura if/else
if (num >= 0) {
    console.log("Resultado con if/else: Positivo");
} else {
    console.log("Resultado con if/else: Negativo");
}

// Operador ternario (misma lógica en una línea)
let resultado = (num >= 0) ? "Positivo" : "Negativo";

console.log("Resultado con operador ternario:", resultado);