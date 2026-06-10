const numeroA = Number(prompt("Ingrese el primer numero (A):"));
const numeroB = Number(prompt("Ingrese el segundo numero (B):"));

const suma = numeroA + numeroB;
const resta = numeroA - numeroB;
const producto = numeroA * numeroB;

console.log("A:", numeroA);
console.log("B:", numeroB);
console.log("Suma (A + B):", suma);
console.log("Resta (A - B):", resta);
console.log("Producto (A * B):", producto);

if (numeroB === 0) {
  console.log("Cociente (A / B): no se puede dividir por cero.");
} else {
  console.log("Cociente (A / B):", numeroA / numeroB);
}
