let edad = prompt("Ingrese su edad: ");

if (edad >= 0 && edad <= 6) {
    console.log("Niño")
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolecente")
} else if (edad >= 18 && edad <= 64) {
    console.log("Adulto")
} else {
    console.log("Adulto mayor")
}