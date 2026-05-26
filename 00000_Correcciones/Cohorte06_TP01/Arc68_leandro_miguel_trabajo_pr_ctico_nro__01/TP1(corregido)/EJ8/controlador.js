// ejercicio N8

 let Edad = Number(prompt("Ingrese su edad:"));

if (Edad >= 0 && Edad <= 12) {
    console.log("Usted es un niño");
} if (Edad >= 13 && Edad <= 17) {
    console.log("Usted es un adolescente");
} else if (Edad >= 18 && Edad <= 64) {
    console.log("Usted es un adulto");
} else if (Edad >= 65) {
    console.log("Usted es un anciano");
}

