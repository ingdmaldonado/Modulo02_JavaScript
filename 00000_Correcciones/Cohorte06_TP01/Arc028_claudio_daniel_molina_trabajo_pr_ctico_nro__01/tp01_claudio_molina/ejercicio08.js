
let edad = Number(prompt(`Ingrese su edad:`));
console.log(`La edad ingresada es: ${edad}`);



if (edad >= 0 && edad <= 12) 
    {
    console.log(`Eres un niño.`);
    } 
else 
    if (edad >= 13 && edad <= 17) 
    {
    console.log(`Eres un adolescente.`);
    } 
else 
    if (edad >= 18 && edad <= 64) 
    {
    console.log(`Eres un adulto.`);
    } 
else 
    {
    console.log(`Eres un adulto mayor.`);
    }