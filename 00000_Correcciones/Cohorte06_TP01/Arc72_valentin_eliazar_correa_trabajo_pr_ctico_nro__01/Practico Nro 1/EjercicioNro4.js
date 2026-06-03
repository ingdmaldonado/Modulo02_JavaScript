/*
Ejercicio Nro. 04: Estructuras Condicionales (if/else) 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario. 




{
    let numero = 0;

    numero = Number(prompt(`Ingrese el numero`));

    if (numero >= 0)
    {
        console.log(`El numero es positivo`);
    }
    else
    {
        console.log(`El numero es negativo`);
    }
}


        */


{
                // operador ternario

    let numero = 0;

    numero = Number(prompt(`Ingrese el numero`));

    numero >= 0 ? console.log(`El numero es positivo`) : console.log(`El numero es negativo`);
}
