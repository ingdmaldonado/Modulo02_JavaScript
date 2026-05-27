let edad = Number(prompt("Ingrese una edad"));

if (edad >= 0){
    if (edad <= 12){
        console.log("Es niño");
    }
    if (edad >= 13 && edad <= 17){
        console.log("Es adolescente");
    }
    if (edad >= 18 && edad <= 64){
        console.log("Es adulto");
    }
    if (edad > 64){
        console.log("Es adulto mayor");
    }
}
else
{
    console.log("Ingrese una edad válida");
}