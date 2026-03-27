// Ingreso de datos
let edad = parseInt(prompt("Ingrese edad:"));

// Determinar categoría
if (edad >= 0 && edad <= 12) {
    console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
} else if (edad >= 18 && edad <= 64) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}