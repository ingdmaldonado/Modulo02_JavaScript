let numero = Number(prompt("Ingrese un número"));

//Usando if/else - Simple
if (numero > 0)
{
    console.log("El número es positivo");
}
else
{
    console.log("El número es negativo");
}

//Usando if/else - Complejo
if (numero != 0){
    if (numero > 0)
    {
        console.log("El número es positivo");
    }
    else
    {
        console.log("El número es negativo");
    }
}
else
{
    console.log("Ingrese un número distinto de cero");
}

//Usando operador ternario - Simple
console.log((numero > 0) ? "El número es positivo" : "El número es negativo");

//Usando operador ternario - Complejo
//Evitar usar, priorizar legibilidad del código
console.log((numero != 0) ? ((numero > 0) ? "El número es positivo" : "El número es negativo") : "Ingrese un número distinto de cero");