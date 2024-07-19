

window.onload = function()
{

    /* Ejemplo 01 - con este ejemplo visualizamos el 
    problema que se puede presentar con el asinconismo */
    
    fnDemora5Segundos();

    fnDemora2Segundos();

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