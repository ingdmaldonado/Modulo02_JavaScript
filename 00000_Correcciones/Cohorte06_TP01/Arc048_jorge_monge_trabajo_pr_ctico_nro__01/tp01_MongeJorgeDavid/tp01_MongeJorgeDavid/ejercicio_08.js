// Pedir edad al usuario
let edad = parseInt(prompt("Ingrese la edad de la persona:"));

// Validar edad negativa
if (edad < 0) {
    console.log("Edad inválida");
} else if (edad <= 12) {
    console.log("La persona es un niño");
} else if (edad <= 17) {
    console.log("La persona es un adolescente");
} else if (edad <= 64) {
    console.log("La persona es un adulto");
} else {
    console.log("La persona es un adulto mayor");
}