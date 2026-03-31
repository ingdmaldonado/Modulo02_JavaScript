/*Ejercicio Nro. 04: Estructuras Condicionales (if/else) 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario.*/

{
    let nro = Number(prompt(`Ingrese un número positivo o negativo:`));
    
    if(nro < 0)
    {
        console.log(`El número ingresado es negativo.`);
    }
    else
    {
        console.log(`El número ingresado es positivo.`)
    }

    resultado = nro >= 0 ? "Número positivo" : "Número negativo";
    console.log(resultado);
}
