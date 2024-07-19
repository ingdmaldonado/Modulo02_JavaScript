

window.onload = function()
{
    console.log("la aplicación esta renderizada");

    /* aqui la modificación que hicimos es que podemos
    elegir pasandole como parametro a la primera función,
    cual proceso debe continuar 
    */

    fnDemora5Segundos(fnDemora3Segundos);

}


/* funcion diseñada especialmente para que
demore 5 segundos */

const fnDemora5Segundos = (fnSiguiente)=>
    {
        setTimeout(()=>{
            console.log("esta funcion debe esperar 5 segundos"); 
            /*aqui refactorizamos y cuando sabemos que la función1 terminó.
            desde a dentro de la función lanzamos el segundo proceso 
            */

            fnSiguiente(); // estoy lanzando la segunda función.

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


/* función diseñada especialmente para que
demore 3 segundos */
const fnDemora3Segundos = ()=>
    {
        setTimeout(()=>
            {
                console.log("esta función debe esperar 3 segundos");
            },3000);
    }


