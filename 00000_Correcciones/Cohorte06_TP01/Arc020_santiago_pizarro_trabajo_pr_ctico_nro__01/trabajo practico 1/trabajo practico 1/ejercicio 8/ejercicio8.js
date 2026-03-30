{
    let edad = Number(prompt("Ingrese su edad:"));

    if (edad >= 0 && edad <= 12) {
        console.log("Usted es niño");
    }
    
    else if (edad >= 13 && edad <= 17) {
        console.log("Usted es adolescente");
    }
    
    else if (edad >= 18 && edad <= 64) {
        console.log("Usted es adulto");
    }
    
    else if (edad >= 65) {
        console.log("Usted es adulto mayor");
    }
    
    else {
        console.log("El número ingresado es incorrecto");
    }
}