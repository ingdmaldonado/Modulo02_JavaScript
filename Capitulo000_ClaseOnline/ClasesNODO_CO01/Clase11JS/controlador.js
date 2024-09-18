


/*********************************************************/
/* PARTICULARIDAD DE LAS ARROW FUNCTION                  */
/*********************************************************/

/* una arrow function que calcula el cuadrado */

const fnCalcularCuadrado = (numero)=>
    {
        return numero * numero;
    }

/* si se recibe un solo parametro de entrada
se puede prescindir de los () que engloban
el parametro
*/

const fnCalcularCuadrado2 = numero =>
{
    return numero * numero;
}

/* se pueden obviar los () que engloban el parametro, siempre y cuando sea uno solo
y también se pueden obviar las {} siempre y cuando haya una sola instrucción en el 
return */

const fnCalcularCuadrado3 = numero => numero * numero;

/*******************************************/
/* FUNCIONES CALLBACK                      *
/*******************************************/

/* la definición de la función llamadora ó 
función de orden superior.
cuando es una función, que recibe como parametro
otra función y la invoca a dentro de su propio cuerpo
*/
    const fnLLamadora = (fn,valor)=>
        {
            let resultado = fn(valor);
            console.log(resultado);
        }


window.addEventListener("load",()=>{

    console.log("esto esta funcionando");

    console.log(fnCalcularCuadrado(2));

    console.log(fnCalcularCuadrado2(2));

    console.log(fnCalcularCuadrado3(2));


    /* función llamadora o de orden superior */

    fnLLamadora(fnCalcularCuadrado,2);
    fnLLamadora(fnCalcularCuadrado2,4);
    fnLLamadora(numero =>{return numero * numero * numero},5);

    /* función callback */

    /* VECTORES */

    let a = "DANIEL";
    let b = 200;

    const c = "JUAN ROMAN RIQUELME SE TIENE  QUE IR DE BOCA";


    const Vector = [200,45,"esta ES UNA CLASE DE VECTORES",a,b,"SE VIENE LA PRIMAVERA","EL CUMPLEAÑOS DEL NODO EL 21"];

    console.log(Vector);

    /* CARACTERISTICAS DE LOS VECTORES 
    
        Es una estructura lineal elástica
    */

    console.log(Vector[2]);

    let elemento0 = Vector[0];
    let elemento1 = Vector[1];

    console.log(elemento0);
    console.log(elemento1);

    console.log(Vector.length);

    /* Vamos a realizar un proceso que recorra ó itere las posiciones del vector */

    console.log("a continuación vamos a mostrar los elementos del vector");

    for(let indice = 0; indice < Vector.length;indice = indice + 1)
    {
        console.log(Vector[indice]);
    }

    /* OBJETOS LITERALES */


    /* atributos y valores */

    let persona1 = {dni:454545,apellido:"MESSI",nombres:"LIONEL ANDRES"};

    let persona2 = {dni:46465577,apellido:"ROMERO",nombres:"CUTI"};

    console.log(persona1);
    console.log(persona2);

    const VectorDePersonas = [persona1,persona2,{dni:89292828,apellido:"DE PAUL",nombres:"RODRIGO"}];

    console.log(VectorDePersonas);

    /*
    
        - particularidades de las arrow function
        - funcion de orden superior que llama a otras y esas otras se llaman
            funciones callback.
                - pueden estar definidas y declaradas antes
                - se pueden definir dentro de la invocación de la función superior

        - objetos literales

        - vector de objetos literales
        

    */




})