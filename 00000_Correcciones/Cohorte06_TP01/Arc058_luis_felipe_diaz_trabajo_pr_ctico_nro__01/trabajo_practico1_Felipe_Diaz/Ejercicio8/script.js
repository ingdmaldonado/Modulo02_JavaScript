// Ingreso de la edad
let edad = Number(prompt("Ingrese la edad de la persona"));

if (edad >= 0 && edad <= 12) {
    console.log("La persona es un NIÑO.");
} else if (edad >= 13 && edad <= 17) {
    console.log("La persona es un ADOLESCENTE.");
} else if (edad >= 18 && edad <= 64) {
    console.log("La persona es un ADULTO.");
} else if (edad > 64) {
    console.log("La persona es un ADULTO MAYOR.");
} else {
    // Este else final lo agregamos por si el usuario ingresa un número negativo
    console.log("Error: La edad ingresada no es válida.");
}