
/* Declaro la función de forma tradicional */

function raizCuadrada(numero)
{
    if (numero > 0) return Math.sqrt(numero);
    return -1;
}

/* Declaro la función como una expresión y arrow
functions */

const raizCuadrada2 = (numero)=>
{
    if (numero > 0) return Math.sqrt(numero);
    return -1;
}


{

    let Resultado1 = raizCuadrada(-25);

    let Resultado2 = raizCuadrada2(-25);

    console.log(`La Raiz Cuadrada es: ${Resultado1}`);

    console.log(`La Raiz Cuadrada es: ${Resultado2}`);


}