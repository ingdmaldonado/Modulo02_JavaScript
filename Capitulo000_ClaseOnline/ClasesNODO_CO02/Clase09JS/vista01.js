
/* forma tradicional. antigua
del javaScript antiguo */
function fnCuadrado(numero)
{
    return numero * numero;
}

/* arrow function o función flecha */
const fnCuadradoV2 = (numero)=>
    {
        return numero * numero;
    }

const fnPromedioDeTres = (p1,p2,p3)=>
    {
        let resultado = 0;
        resultado = (p1 + p2 + p3)/3;
        return resultado;
    }


/* cuando la pagina se termino
de renderizar */
window.onload = function()
{

    console.log("corriendo");

    console.log(fnCuadrado(9));

    let resultado1 = fnCuadrado(7);
    console.log(resultado1);

    let resultado2 = fnCuadrado(2) * 3 + fnCuadrado(4);
    console.log(resultado2);

    let resultado3 = fnCuadradoV2(3);
    console.log(resultado3);

    let resultado4 = fnPromedioDeTres(15,7,21);
    console.log(resultado4);

}