
window.onload = function()
{
    console.log("la aplicación esta renderizada");
    fnDemora5Segundos();
}


/* funcion diseñada especialmente para que
demore 5 segundos */

const fnDemora5Segundos = ()=>
    {
        setTimeout(()=>{
            console.log("esta funcion debe esperar 5 segundos"); 
            /*aqui refactorizamos y cuando sabemos que la función1 terminó.
            desde a dentro de la función lanzamos el segundo proceso 
            */

            fnDemora2Segundos(); // estoy lanzando la segunda función.

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