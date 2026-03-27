/* Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario.
*/

{
let numero = parseFloat(prompt("Ingrese un número:"));

// Usando if/else
if (numero > 0)
{
    console.log("El número es positivo.");
} 
else
{
    if (numero < 0) 
    {
        console.log("El número es negativo.");
    } 
    else 
    {
        console.log("El número es cero.");
    }
}

// Usando operador ternario
let resultado = (numero > 0) ? "El número es positivo.": (numero < 0) ? "El número es negativo.": "El número es cero.";
console.log(resultado);
}