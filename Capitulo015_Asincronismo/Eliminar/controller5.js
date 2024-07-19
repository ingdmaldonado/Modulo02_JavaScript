
window.onload = function()
{
    console.log("aplicación andando");

    /*
        invoco la función fnDevuelveUnaPromesa que como su
        nombre lo indica, retorna la promesa instanciada y 
        ejecutada. es decir, el proceso ya se dispara. 
    */

        fnDevuelveUnaPromesa()
            .then(
                ()=>{console.log("El proceso terminó correctamente");}
            )
            .catch(
                ()=>{console.log("algo fallo en el proceso");}
                
            );
}


/* funcion diseñada especialmente para que
demore 5 segundos */

const fnDemora5Segundos = (resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("esta funcion debe esperar 5 segundos"); 
            /*aqui refactorizamos y cuando sabemos que la función1 terminó.
            desde a dentro de la función lanzamos el segundo proceso 
            */

            /*esta variable sirve para simular si dentro del proceso
            algo falló o No, es para determinar si lanzamos 
            resolve o reject */

            let salioTodoBien = false;

            if(salioTodoBien)
            {
                resolve(); 
            }
            else
            {
                reject();
            }
            

        },5000);
    }

/* función diseñada especialmente para que 
demore 2 segundos */

const fnDemora2Segundos = (resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("esta función debe esperar 2 segundos");
        },2000);  
    }


/* esta función esta diseñada para lanzar una
promesa que dentro lance el proceso asíncrono fnDemora5Segundos */

const fnDevuelveUnaPromesa = ()=>
    {
        return new Promise(fnDemora5Segundos);
    }