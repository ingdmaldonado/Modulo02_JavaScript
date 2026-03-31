/* Ejercicio Nro. 04: 
Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario. 
*/


function verificarNumero() {

    // Ingreso el número
    let numero = Number(prompt("Ingrese un número"));

    // Uso if/else
    if (numero >= 0) {
        console.log("El número es positivo");
    } else {
        console.log("El número es negativo");
    }

    // Uso operador ternario
    let resultado = (numero >= 0) ? "positivo" : "negativo";

    console.log(`(Ternario) El número es ${resultado}`);
}
