// Ejercicio Nro. 08: Clasificación por Edad

// Ingresar la edad de una persona
let edad = parseInt(prompt("Ingrese la edad de la persona:"));

let clasificacion;

if (edad >= 0 && edad <= 12) {
    clasificacion = "niño";
} else if (edad >= 13 && edad <= 17) {
    clasificacion = "adolescente";
} else if (edad >= 18 && edad <= 64) {
    clasificacion = "adulto";
} else if (edad > 64) {
    clasificacion = "adulto mayor";
} else {
    clasificacion = "edad inválida"; // Para edades negativas o no numéricas
}

console.log("La persona tiene", edad, "años y es clasificada como:", clasificacion + ".");