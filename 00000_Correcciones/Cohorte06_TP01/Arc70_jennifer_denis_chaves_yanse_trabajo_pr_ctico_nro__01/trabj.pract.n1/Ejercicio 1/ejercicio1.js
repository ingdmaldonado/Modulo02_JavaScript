let A = parseFloat(prompt("ingresa el numero A:"));
let B = parseFloat(prompt("ingresa el numero B:"));

console.log("Suma:", A + B);
console.log("Resta:", A - B);
console.log("Producto:", A * B);

if (B !== 0) {
    console.log("Division:", A / B);
} else {
    console.log("No se puede dividir por cero");
}