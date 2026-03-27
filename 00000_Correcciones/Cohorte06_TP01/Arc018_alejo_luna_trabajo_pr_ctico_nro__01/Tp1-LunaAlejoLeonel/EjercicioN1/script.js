let A = Number(prompt("Ingrese el valor de A"));
let B = Number(prompt("Ingrese el valor de B"));

// operaciones
let suma = A + B;
let resta = A - B;
let producto = A * B;

//por si queremos dividir por 0
let division;

if (B !== 0) {
    division = A / B;
} else {
    division = "No se puede dividir por 0";
}

// muestro en consola
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Producto: " + producto);
console.log("División: " + division);