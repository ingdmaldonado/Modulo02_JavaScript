/*
    Ejercicio Nro. 04: Estructuras Condicionales (if/else)
    Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario.
*/

{
    let numero = 0;
    numero = Number(prompt(`Ingrese un Número:`));

    /* Estructura IF/ELSE */
    if(numero > 0){
        console.log(`Estructura IF/ELSE`);

        console.log(`El Número ingresado es Positivo.`);
    }
    else{
        if(numero === 0){
            console.log(`Estructura IF/ELSE`);

            console.log(`El Número ingresado es 0.`);
        }
        else{
            console.log(`Estructura IF/ELSE`);

            console.log(`El Número ingresado es Negativo.`);
        }
    }


    /* OPERADOR TERNARIO */
    console.log(`OPERADOR TERNARIO`);

    numero = numero >= 0? console.log(`El Número ingresado es Positivo.`) : console.log(`El Número ingresado es Negativo.`)
}