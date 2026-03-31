/*
Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.
*/

// Solicitar el número al usuario
let numero = Number(prompt('Ingrese un numero'));

// Mostrando if/else
    if (numero>0) {
        console.log(`El numero ${numero} es positivo`);
    }
    else{
        console.log(`El numero ${numero} es negativo`)
    }

// Operador ternario
    let resultado = (numero>0) ? `El numero ${numero} es positivo` : `El numero ${numero} es negativo`;
    console.log(resultado);

    