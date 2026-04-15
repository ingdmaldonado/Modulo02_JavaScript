/*
Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.
*/
{
    let numero = 0;
    numero = Number(prompt("Ingrese un número:"));

    let resultadoIf = "";
    let resultadoTernario = "";

    if (numero >= 0) {
        resultadoIf = "Positivo";
    } else {
        resultadoIf = "Negativo";
    }

    resultadoTernario = numero >= 0 ? "Positivo" : "Negativo";

    console.log(`Según el if/else el número es ${resultadoIf}. Según el operador ternario el número es ${resultadoTernario}.`);
}