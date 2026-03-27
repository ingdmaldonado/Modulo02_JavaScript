
/*Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.*/

{
    let numero = Number(prompt(`ingrese un número`));


    if (numero > 0) {

        console.log(`El número es positivo`);

    }
    else if (numero < 0) {

        console.log(`El número es negativo`);
    }
    else {

        console.log(`El número es cero`);
    }

    numero = numero > 0 ? `El número es positivo` : numero < 0 ? `El número es negativo` : `El número es cero`;

    console.log(numero);
}


