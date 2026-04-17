{
    let edad = parseInt(prompt("Ingrese la edad de una persona: "));

    if( edad <= 12) {
        console.log("La persona es un niño.");
    }
    else if( edad > 13 && edad <= 17) {
        console.log("La persona es un adolescente.");
    }
    else if( edad >= 18 && edad <= 64) {
        console.log("La persona es un adulto.");
    }
    else if ( edad > 64) {
        console.log("La persona es un adulto mayor.");
    }

}