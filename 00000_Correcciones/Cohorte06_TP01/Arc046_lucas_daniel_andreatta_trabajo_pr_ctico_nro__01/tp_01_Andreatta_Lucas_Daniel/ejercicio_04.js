/*

Ejercicio Nro. 04: Estructuras Condicionales (if/else) 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario.

*/

{

    let numero = 0;

    numero = Number(prompt(`Ingrese un numero:`));

    // con estructura if/else
    if (numero>=0) {
        
        console.log(`(IF/ELSE) El número ingresado es POSITIVO`);

    } else {

        console.log(`(IF/ELSE) El número ingresado es NEGATIVO`);
    }

    // con operador ternario
    console.log(`(TERNARIO) El número ingresado es ${numero >= 0 ? "POSITIVO":"NEGATIVO"}`);

}