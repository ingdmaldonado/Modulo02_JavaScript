


// esta función suma dos parametros //
const SumaDeDos = (numero1,numero2) => 
    {
        return numero1+numero2;
    }

// esta función recibe un numero y devuelve el cubo
const Cubo = numero => numero * numero * numero;


/* aqui voy a implementar una función 
callBack 
*/

/*
    las funciones pueden recibir como parametro
    de entrada otras funciones y ejecutarlas
    a dentro.
*/

/*
    1 funcion Madre o Llamadora
    1 funcion llamada = callBack
*/

const fnLLamadora = (unaFuncion) => 
    {
        unaFuncion(); // funcion callBack
    }

const fnSaludar = ()=>{
    console.log("hola soy la funcion saludar");
};

const fnDespedir = ()=> 
    {
        console.log("chau, soy la funcion despedir");
    }


window.addEventListener("load",()=>
{
    console.log(`funciones callBack`);

    /* Invocar una función y al resultado lo guardo 
    en una variable */

    let resultado1 = SumaDeDos(5,15);
    console.log(resultado1);

    /* Al resultado de la función. lo voy 
    a pasar como parametro de la segunda
    función que calcula el cubo */

    let resultado2 = Cubo(resultado1);
    console.log(resultado2);

    let resultado3 = Cubo(SumaDeDos(5,15));
    console.log(resultado3);

    /* aqui llama a dos funciones
    que ya estan definidas */

    fnLLamadora(fnSaludar);

    fnLLamadora(fnDespedir);

    fnLLamadora(()=>{

        console.log(`soy una función callBack llamada desde la llamadora y soy anonima`)

    });


})