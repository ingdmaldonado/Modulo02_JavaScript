{
    let numero = 0;
    numero = Number(prompt(`Ingrese un numero`))

    if(numero >= 0)
    {
        console.log(`El numero es positivo`)
    }
    else
    {
        console.log(`El numero es negativo`)
    }

    let mensaje = numero >= 0 ? `El numero es positivo` : `El numero es negativo`;
    console.log(mensaje);

}