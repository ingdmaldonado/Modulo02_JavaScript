let edad = Number(prompt("Ingrese la edad"));

if (edad >= 0 && edad <= 12) {
    console.log("Es un niño");
} else if (edad <= 17) {
    console.log("Es un adolescente");
} else if (edad <= 64) {
    console.log("Es un adulto");
} else {
    console.log("Es un adulto mayor");
}