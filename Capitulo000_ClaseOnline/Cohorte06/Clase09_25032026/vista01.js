
/*
Evaluación de riesgo crediticio

Enunciado:
Realizar una función que reciba como parámetros 
el ingreso mensual de una persona, el monto de sus 
deudas actuales y su antigüedad laboral en años, 
y devuelva su nivel de riesgo crediticio:

“Bajo”
“Medio”
“Alto”

Reglas:

1) Si la deuda es menor al 30% del ingreso 
y la antigüedad laboral es mayor o igual a 3 años → “Bajo”

2) Si la deuda está entre el 30% y el 50% del ingreso → “Medio”

3) Si la deuda supera el 50% del ingreso o la antigüedad 
laboral es menor a 1 año → “Alto”


*/

/* 
    - ingresos mensuales
    - monto de deuda 
    - antiguedad laboral

*/

/* 1ra) Parte => Definición de la Función. 
que es crearla a la función y decir que parametros
de entrada recibe, cómo es el cuerpo de la función
. que es lo que retorna ?. */


function evaluacionDeRiesgo(ingresos,deuda,antiguedad)
{
    let porcentajeDeuda = (deuda/ingresos)*100;

    //console.log(porcentajeDeuda);

    // caso 1 - riesgo bajo 
    if((porcentajeDeuda <30) && (antiguedad >= 3))
    {
       // console.log("riesgo bajo");

        return `bajo`; // corta la ejecución de la función y devuelve ese valor
    }

    if((porcentajeDeuda >= 30) && (porcentajeDeuda <= 50))
    {
       // console.log("riesgo medio");
        return 'medio';
    }

    if((porcentajeDeuda > 50) || (antiguedad <= 1))
    {
       // console.log("riesgo alto");
        return `alto`;
    }

    return `no definido`;

    // definir cuales son esos casos ?. //

}

/* ANTERIOR AL 2015 */

function calcularIVA (importeBase)
{
    return (importeBase * 21)/100;
}

/* DESDE EL 2015 HACIA ADELANTE. 
    Al guardar en una constante una función, el nombre
    que tiene la función y por el cual se la va a invocar.
    es el nombre de la constante.
*/

const calcularIVA2 = function(importeBase)
{
     return (importeBase * 21)/100;
}

/* Arrow Function => Funciones Flecha ()=>{} */

const calcularIVA3 = (importeBase)=>
    {
        return (importeBase * 21)/100;
    };


/* código principal de la aplicación */
{

    /* (2da.) parte => Invocación de la función */

    /*
    console.log(`Invocacion 1`);
    evaluacionDeRiesgo(1800000,250000,5);

    console.log(`Invocacion 2`);
    evaluacionDeRiesgo(1200000,550000,0);

    console.log(`Invocacion 3`);
    evaluacionDeRiesgo(1000000,600000,10);

    console.log(`Invocacion 4`);
    evaluacionDeRiesgo(1000000,0,1);

    */

    console.log(`Invocacion 5`);
    /* aqui en este ejemplo, a la salida de la función
    la guardé en una variable, luego puedo operar con esa variable */

    /*
    let ingresosSS = 0;
    let deudaAA = 0;
    let antiguedadlaboral = 0;

    ingresosSS = Number(prompt(`Indique los Ingresos del cliente`));

    deudaAA = Number(prompt(`Ingrese la deuda del cliente`));

    antiguedadlaboral = Number(prompt(`Antiguedad Laboral ?`));
    */

    /* CAJA NEGRA: el nombre de los parametros de entrada
    son totalmente independientes, en nombre con respecto
    a la invocación de las funciones 
    
    LA FUNCIÓN dice ?. yo necesito ingresos,deuda y antiguedad.

    
    */

    /*
    let salida5 = evaluacionDeRiesgo(ingresosSS,deudaAA,antiguedadlaboral);
    console.log(salida5);
    */

    let IVA1 = calcularIVA(100000);
    console.log(IVA1);

    let IVA2 = calcularIVA2(25000);
    console.log(IVA2);

    let IVA3 = calcularIVA3(125000);
    console.log(IVA3);


}

/* 90% FUNCIONES !!!. 

    - ANTES DEL 2015 => function

    - DESDE EL 2015 => 
        * funciones son ciudadanos de primera clase => function
        * puedo tener "n" funciones
        * una f1(n) puede invocar a otra función f2(m)
        * las funciones se pueden guardar en variables y/o constantes.
        * salieron las arrow function (parametros ...)=>{cuerpo funcion};

*/

