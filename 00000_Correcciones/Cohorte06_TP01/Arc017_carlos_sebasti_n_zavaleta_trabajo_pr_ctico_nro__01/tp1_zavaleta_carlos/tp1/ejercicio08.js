let edad = 0;
edad = Number(prompt("Por favor escriba su edad "));

if (edad > 0 && edad <= 12){
    console.log("La persona es un niño");
}
if (edad > 12 && edad <= 17){
    console.log("La persona es un adolescente");
}
if (edad>= 18 && edad <= 64){
    console.log("La persona es un adulto");
}
if (edad > 64 && edad < 130){
    console.log("La persona es un adulto mayor");
}
if (edad >= 130){
    console.log("Se habrá equivocado la edad, o es un vampiro, o un highlander!");
}