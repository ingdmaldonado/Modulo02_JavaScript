
window.onload = function()
{ 
    /* En este ejemplo fnDemora5Segundos es una
    función callback y recibe como aprametro una función
    siguiente que será la que se ejecute posteriormente
    al terminar */

    fnDemora5Segundos(fnDemora2Segundos);

    fnDemora5Segundos(fnDemora3Segundos);

}


/* funcion diseñada especialmente para que
demore 5 segundos */


/* En ese ejemplo refactorizamos la primera función
con la intención de que cuando termine el proceso de la
función de 5 segundos invoque a la fnSiguiente que 
es la que se le está pasando como parametro. */

const fnDemora5Segundos = (fnSiguiente)=>
    {
        setTimeout(()=>{
            console.log("esta funcion debe esperar 5 segundos");

            fnSiguiente(); /* aquí está el cambio */
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
demore 2 segundos */
const fnDemora3Segundos = ()=>
    {
        setTimeout(()=>{
            console.log("esta función debe esperar 3 segundos");
        },3000);  
    }