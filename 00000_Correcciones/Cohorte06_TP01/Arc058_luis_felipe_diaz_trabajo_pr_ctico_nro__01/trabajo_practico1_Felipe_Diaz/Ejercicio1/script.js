// Ingreso de datos
let A = Number(prompt("Ingrese el valor de A"));
let B = Number(prompt("Ingrese el valor de B"));


let suma = A + B;
let resta = A - B;
let producto = A * B;

// Validación por si queremos dividir por 0
let division; 

if (B !== 0) { 
    division = A / B;
} else {
    division = "No se puede dividir por 0";
}

// Se muestran los resultados en consola
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Producto: " + producto);
console.log("División: " + division);