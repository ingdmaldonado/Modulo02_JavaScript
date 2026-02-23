
/* estaria haciendo un función
que recibe como parametro un numero
y calcula el cuadrado y lo devuelve */
function cuadrado1 (numero)
{
    return numero * numero; // el return es explicito
}

const cuadrado2 = function(numero)
{
    return numero * numero; // el return es explicito
}

// funciones flecha o arrow function //

const cuadrado3 = (numero) => 
    {
        return numero * numero; // el return es explicito
    }

/* cuando es un arrow function que recibe
como parametro un solo valor y el cálculo
que se realiza en el cuerpo es únicamente
de una sola sentencia.
tiene un return implícito.
*/

const cuadrado4 = numero => numero * numero; // el return es implícito


window.addEventListener("load",function() {

    console.log("pagina cargada");

    let resultado1 = cuadrado1(4);

    let resultado2 = cuadrado2(6);

    let resultado3 = cuadrado3(7);

    let resultado4 = cuadrado4(9)

    console.log(resultado1,resultado2,resultado3,resultado4);

})