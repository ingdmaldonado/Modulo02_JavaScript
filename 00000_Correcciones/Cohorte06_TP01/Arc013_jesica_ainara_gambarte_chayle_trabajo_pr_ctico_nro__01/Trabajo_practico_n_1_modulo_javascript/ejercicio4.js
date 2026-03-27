let numero = parseFloat(prompt("Ingrese un número: "))

// if/else
if (numero > 0) {
    console.log("Positivo.")
} else if (numero < 0) {
    console.log("Negativo.")
}else {
    console.log("El número es 0.")
}

// Ternario
let resultado = (numero > 0)
? "El número es positivo."
: (numero < 0)
? "El número es negativo."
: "El número es 0"

console.log(resultado)
