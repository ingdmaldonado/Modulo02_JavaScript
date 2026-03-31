/* Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario. */

let numero = Number(prompt("Ingrese un número:"));
if (numero > 0) 
    {
    console.log(`El número ${numero} es positivo.`);
    }
else 
    if (numero < 0) 
    {
    console.log(`El número ${numero} es negativo.`);
    }
else 
    {
    console.log(`El número ${numero} es cero.`);
    }

    let resultado = (numero > 0) ? `El número ${numero} es positivo.` : (numero < 0) ? `El número ${numero} es negativo.` : `El número ${numero} es cero.`;


