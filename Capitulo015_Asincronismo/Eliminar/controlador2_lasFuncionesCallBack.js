

window.onload = function()
{
    console.log("aplicación renderizada");

    /* Ejemplo 01 - con este ejemplo visualizamos el 
    problema que se puede presentar con el asinconismo */

    /* 
    fnDemora5Segundos();
    fnDemora2Segundos();
    */

   
    /* Ejemplo 02 - Refactorizamos la función 1
    para que reciba como parametro una función
    y la ejecute dentro para hacer una función
    CallBack */

    fnDemora5SegundosII(fnDemora2Segundos);

    /* Ejemplo 03 - En ejemplo no le pasamos
    como parametro la función, simplemente 
    dentro del cuerpo de la función, la invocamos
    a la segunda al terminar el proceso */

    fnDemora5SegundosIII();
}

/* funcion diseñada especialmente para que
demore 5 segundos */
const fnDemora5Segundos = ()=>
    {
        setTimeout(()=>{
            console.log("esta funcion debe esperar 5 segundos");
        },5000);
    }

/* función diseñada especialmente para que 
demore 2 segundos */
const fnDemora2Segundos = ()=>
    {
        setTimeout(()=>{
            console.log("esta función debe esperar 2 segundos");
        },2000);  
    }

/* vamos a reescribir la función 1 que esta 
diseñada para demorarse 5 segundos y le vamos 
a pasar como parametro la función 2. esto 
de re-hacer una función, un comportamiento, un
cambio importante se llama refactorizar */

const fnDemora5SegundosII = (fnPosterior)=>{

    setTimeout(()=>{

        console.log("esta función debe esperar 5 segundos y ejecutar despues la función que reciba como parametro");

        fnPosterior(); // aquí ejecuto la función dentro de la función 2

    },5000);
}


/* otra forma es refactorizar la función II y en lugar
de recibir como parametro la función a ejecutar y 
aprovechando que las funciones son entidades de primera
clase, puedo invocarla a la otra función directamente */


const fnDemora5SegundosIII = ()=>{

    setTimeout(()=>{

        console.log("esta función debe esperar 5 segundos y ejecutar despues la función que reciba como parametro");

        fnDemora2Segundos();

    },5000);
}