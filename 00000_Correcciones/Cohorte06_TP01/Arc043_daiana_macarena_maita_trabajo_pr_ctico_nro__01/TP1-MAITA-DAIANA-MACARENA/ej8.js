function ejecutar() {
    let edad = Number(prompt("Edad:"));

    if (edad >= 0 && edad <= 12) {
        console.log("Niño");
    } else if (edad <= 17) {
        console.log("Adolescente");
    } else if (edad <= 64) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}