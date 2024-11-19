

/* las Arrow function. son otra forma de implementar
las funciones. actualmente por la simplicidad que tiene
es más utilizada la arrow function.*/

const fnCuadrado = (numero)=>
    {
        return numero * numero;
    }

const fnSumarNumeros = (numero1,numero2) =>
    {
        return numero1 + numero2;
    }

    
/* Una Arrow Function Completa */
const ivaFactura = (importeFactura) =>
    {
        return (importeFactura * 21)/100;
    }


/* Si las Arrow Function reciben un solo parametro
de entrada y tienen una única operación de cálculo ó
expresión, se pueden obviar los siguientes datos

    - no es necesario que estén los parentesis del parametro ()
    - no es necesario que estén las {} llaves del cuerpo
    - no es necesario colocar la palabra return
*/

const ivaFactura2 = importeFactura => importeFactura * 21/100;

/* Si las Arrow Function reciben un solo parametro, 
es posible eliminar los () parentesis de los parametros */

const DevolverTasaMunicipal = importeFactura =>
{
    if (importeFactura > 0)
    {
        return (importeFactura * 3)/100;
    }
    else
    {
        return 0;
    }
}

const fnSumarNumerosV2 = (numero1,numero2) => (numero1 + numero2);

window.onload = function()
{
    console.log("running");

    let resultadoCuadrado = 0;
    resultadoCuadrado = Cuadrado(4);
    console.log(resultadoCuadrado);

}


window.onload = ()=>
    {
        
    }