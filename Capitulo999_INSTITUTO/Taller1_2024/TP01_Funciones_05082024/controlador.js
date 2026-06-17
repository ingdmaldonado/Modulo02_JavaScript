
/* declarar un sub-proceso que
para el mundo javaScript se denominan
funciones. y que reciben como parametro
un numero */

/* sintaxis mas común de todas o la mas
vieja */

/* las funciones y los procedimientos
no deben mostrar resultados. */

function Cuadrado(numero)
{
    let resultado = numero * numero;

    return(resultado);

    //console.log("veamos si esto sale");
}


function Cubo(numero)
{
    if(typeof(numero) === "number")
    {
        return numero * Cuadrado(numero);
    }
    else
    {
        console.log("vos sos bolo ?. tiene que ser numero");
        return 0;

    }
}


function FuncionSecundaria(x)
{
    return 2 * x + 1;
}

window.onload = function()
{

    console.log("running !!!");

    /* el efecto de llamar una función
    en cualquier parte se llama INVOCACIÓN 
    */

    /* Diferentes ejemplos de invocación */

    // Ejemplo 1
    console.log(Cuadrado(2));

    // Ejemplo 2
    let resultado = Cuadrado(9);
    console.log(resultado);

    // Ejemplo 3

    let resultado2 = 2 * Cuadrado(4) - 1;
    console.log(resultado2);

    let resultado3 = Cuadrado(Cuadrado(5));
    console.log(resultado3);

    /* Ejemplo 4 */

    let x = 7;

    let numero = Cuadrado(x);

    console.log(numero);

    /* Ejemplo  5 */

    let z = Cubo(3);
    console.log(z);

    let y = Cubo("3");
    console.log(y);

    /* Ejemplo 6 */

    let resultado6 = Cubo(Cuadrado(3) + 3 * Cubo(2)) - 2 * Cubo(Cuadrado(2));

    console.log(resultado6);

    /* Ejemplo 7 */

    let y1 = FuncionSecundaria(2);
    console.log(y1);

    let y2 = FuncionSecundaria(-23);
    console.log(y2);

}