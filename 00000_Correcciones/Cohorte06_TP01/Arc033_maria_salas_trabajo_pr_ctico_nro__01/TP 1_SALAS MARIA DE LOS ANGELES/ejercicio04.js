/*
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario.
 */

{
    let valorX = 0;
    valorX = Number(prompt(`ingrese un valor numérico`))

    if(valorX > 0)
        {
            console.log(`el valor es positivo`)
        }
    else
        {
            console.log(`el valor es negativo`)
        }

    

}

{
    let x = 0;
    x = Number(prompt(`ingrese un valor`))

    let resultado = x >= 0 ? "el valor es positivo" : "el valor es negativo"
    
    console.log(resultado)
    
}