

/* función cuadrado de un numero declarado de forma clásica */


function Cuadrado(numero)
{
    return numero * numero;
}

/* función cuadrado de un numero pero declarada como arrow function */

const Cuadrado2 = (numero)=>
{
    return numero * numero;
}

/* función cuadrado de forma abreviada. solamente cuando hay
un solo parametro de entrada, una sola instrucción en el {} 
cuerpo de la función. se pueden quitar

() los parentesis que encierran al parametro
{} las llaves que encierran el cuerpo
no es obligatorio poner la palabra return */

const Cuadrado3 = numero => numero * numero;
{

    let Resultado1 = Cuadrado(10);

    let Resultado2 = Cuadrado2(10);

    let Resultado3 = Cuadrado3(10);

    console.log(`Resultado 1 ${Resultado1} Resultado2 ${Resultado2} Resultado3 ${Resultado3}`);

}