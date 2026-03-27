/*

Ejercicio Nro. 04: Estructuras Condicionales (if/else) 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario.

*/

{

    let numero = 0;

    numero = Number(prompt(`Ingrese un valor:`));

    if (numero > 0) {
        console.log(`El numero es positivo`);
    } else if(numero < 0){
        console.log(`El numero es negativo`);
    }else {
        console.log(`El numero es cero`);
    }

    numero = Number(prompt(`Ingrese otro numero:`));

    numero = numero > 0 ? `el numero es positivo` : numero < 0 ? `el numero es negarivo` : `el numero es cero`;

    console.log(numero);

}