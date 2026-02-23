

/* Repaso de funciones */

// FUNCIÓN CLASICA
function cuadrado(numero)
{
    return numero * numero;
}

// UNA ARROW FUNCTION //
const cuadrado2 = (numero)=>
    {
        return numero * numero;
    }

/* PARTICULARIDADES DE LAS ARROW FUNCTION 

    1) Si la arrow function recibe un solo
    parametro. si y solo si un solo parametro.
    se pueden obviar los () de los parametros

*/

const cuadrado3 = numero =>
    {
        return numero * numero;
    }

/* 
    2) Si la arrow function tiene una sola instrucción
    en el cuerpo de la función. 
        se pueden obviar las {}
        se puede obviar la palabra return
*/

const cuadrado4 = numero => numero*numero;


