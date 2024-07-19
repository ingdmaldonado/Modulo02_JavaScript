
window.onload = function()
{ 
    fnDemora5Segundos();
}


/* funcion diseñada especialmente para que
demore 5 segundos */


/* En ese ejemplo refactorizamos la primera función
con la intención de que cuando termine el proceso de la
función de 5 segundos. la invoque a la siguiente */

const fnDemora5Segundos = ()=>
    {
        setTimeout(()=>{
            console.log("esta funcion debe esperar 5 segundos");

            fnDemora2Segundos(); /* aquí está el cambio */
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