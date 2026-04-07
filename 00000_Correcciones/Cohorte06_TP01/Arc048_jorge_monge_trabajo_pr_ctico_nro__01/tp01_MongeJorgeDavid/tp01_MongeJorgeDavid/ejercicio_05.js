// Pedir número al usuario
let X = parseInt(prompt("Ingrese un número:"));

// Determinar si es par o impar usando if/else
if (X % 2 === 0) {
    console.log("El número " + X + " es PAR");
} else {
    console.log("El número " + X + " es IMPAR");
}

//usando operador ternario

let resultado = (X % 2 === 0) ? "PAR" : "IMPAR";
console.log("El número " + X + " es " + resultado);