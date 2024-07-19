

window.onload = function()
{
    console.log("aplicación andando");

    /* creo un objeto de la clase Promesa y le paso
    como parametro en el constructor el proceso que 
    quiero que lance y espere */

    const Promesa = new Promise(fnDemora5Segundos);
    
    Promesa
        .then( //aqui iria la función resolve, que le estoy pasando una función flecha y anonima
                ()=>
                    {
                        console.log("el proceso termino y salio bien");
                    }
            )
        .catch( // aquí iria la función reject, que le estoy pasando una función flecha y anónima
            ()=>
                {
                    console.log("algo fallo en el proceso");
                }
        )
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

