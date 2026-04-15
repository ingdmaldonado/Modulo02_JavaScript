// Ingreso el número
let numero = Number(prompt("Ingrese un numero"));

// Primera forma: if - else
if (numero >= 0) {
    console.log("El numero es positivo");
} else {
    console.log("El numero es negativo");
}

// Aqui utilizo ternario
let resultado = (numero >= 0) ? "TERNARIO: El numero es positivo" : "TERNARIO: El numero es negativo";

console.log(resultado);