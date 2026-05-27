// ============================================
// EJERCICIO 08 - Rango etario
// ============================================

let edad = parseInt(prompt("Ingrese la edad de la persona:"));

console.log("=== EJERCICIO 08 ===");
console.log("Edad ingresada:", edad, "años");

if (edad >= 0 && edad <= 12) {
    console.log("La persona es un NIÑO (0 a 12 años).");
} else if (edad >= 13 && edad <= 17) {
    console.log("La persona es un ADOLESCENTE (13 a 17 años).");
} else if (edad >= 18 && edad <= 64) {
    console.log("La persona es un ADULTO (18 a 64 años).");
} else if (edad > 64) {
    console.log("La persona es un ADULTO MAYOR (más de 64 años).");
} else {
    console.log("Edad inválida.");
}
