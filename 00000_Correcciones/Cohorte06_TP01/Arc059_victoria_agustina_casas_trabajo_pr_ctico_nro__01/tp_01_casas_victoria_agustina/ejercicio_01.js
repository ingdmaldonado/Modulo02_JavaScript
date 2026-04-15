let A = 0; 
A = Number(prompt("Ingrese el número A:"));

let B = 0; 
B = Number(prompt("Ingrese el número B:"));


console.log("Ingrese Número A =", A, "Ingrese Número B =", B);
console.log("Suma (A + B):", A + B);
console.log("Resta (A - B):", A - B);
console.log("Producto (A * B):", A * B);
 

if (B === 0) {
  console.log("Cociente (A / B): No es posible dividir por cero. B debe ser distinto de 0.");
} 

else {
  console.log("Cociente (A / B):", A / B);
}