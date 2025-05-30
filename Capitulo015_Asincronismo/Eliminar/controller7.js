


window.onload = function()
{
    console.log("aplicación andando");

    /*
        invoco la función fnDevuelveUnaPromesa que como su
        nombre lo indica, retorna la promesa instanciada y 
        ejecutada. es decir, el proceso ya se dispara. 
        además es más flexible porque permite pasar como 
        parámetro la función y el proceso que deseo lanzar.
    */

        fnDevuelveUnaPromesa(fnDemora5Segundos)
            .then(
                ()=>
                    {
                        console.log("El proceso1 terminó correctamente");

                        // vuelvo a llamar la función que lanza promesas y la devuelvo con return //
                        return fnDevuelveUnaPromesa(fnDemora2Segundos);

                        /* Si quiero encadenar promesas. siempre por el lado de .then()
                        debo retornar una promesa nueva y debe llevar la palabra
                        return ...*/

                    }
            )
            .then(
                ()=>
                    {
                        /* duda => este cartel me está mostrando antes que termine 
                        el lanzado de la segunda promesa */
                        console.log("El proceso2 terminó correctamente");
                    }
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

            let salioTodoBien = true;

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

            let salioTodoBien = true;

            /* aqui tuvimos que realizar esta modificación para
            que sea un proceso que sea lanzable a través de una promesa.
            */
           
            if(salioTodoBien)
            {
                resolve(); 
            }
            else
            {
                reject();
            }

        },2000);  
    }


/* esta función esta diseñada para lanzar una
promesa que dentro lance el proceso asíncrono fnDemora5Segundos */

const fnDevuelveUnaPromesa = (fnParaLanzar)=>
    {
        return new Promise(fnParaLanzar);
    }