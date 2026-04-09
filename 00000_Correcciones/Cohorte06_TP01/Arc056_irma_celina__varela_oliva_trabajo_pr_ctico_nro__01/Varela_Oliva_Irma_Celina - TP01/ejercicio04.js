/*  Ejercicio Nro. 04: 

Estructuras Condicionales (if/else) 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario. 

*/

{
    let numero = 0;
    numero = Number(prompt(`Ingrese un numero:`));
    console.log(`El numero ingresado es: ${numero}`);

    // utilizando if/else
    if(numero > 0)
    {
        console.log(`El numero ingresado es POSITIVO`);
    }
    else {
        if(numero < 0){
            console.log(`El numero ingresado es NEGATIVO`); 
        }
        else{
            console.log(`El numero ingresado es NEUTRO (cero)`);
        }
    }

    //utilizando un operador ternario
    let mensaje = (numero > 0) ? "El numero es POSITVO" : "El numero es NEGATIVO o CERO";
    console.log(mensaje);
}