

window.onload = function() 
{

    /* Ejemplo 01 - con este ejemplo visualizamos el 
    problema que se puede presentar con el asinconismo */
    
    /*
    fnDevuelvePromesa1()
        .then(()=>{
            console.log("cuando todo sale bien en la promesa 1");
            return fnDevuelvePromesa2();
        })
        .then(()=>{
            console.log("cuando todo sale bien en la promesa 2");
        })
        .catch(()=>
            {
                console.log("cuando algo sale mal en la promesa");
            }
        )
    */

    funcionLlamadoraAsincrona();

}

/* construyo una función que retornará una objeto promesa 
dentro del cuerpo de la promesa realizaré una demora de 5 segundos,
y luego invocaré a resolve() si todo salió bien y reject() si algo
salió mal*/

const fnDevuelvePromesa1 = ()=>
    {
        return new Promise((resolve,reject)=>{
          
            setTimeout(()=>
                {
                    console.log("esto saldra despues de los 5 segundos");

                    let salioTodoBien = true;

                    if(salioTodoBien)
                    {
                        resolve();
                    }
                    else
                    {
                        reject();
                    }

                },5000)    
        })
    }


/* construyo una función que retornará una objeto promesa 
dentro del cuerpo de la promesa realizaré una demora de 2 segundos,
y luego invocaré a resolve() si todo salió bien y reject() si algo
salió mal*/

const fnDevuelvePromesa2 = ()=>
    {
        return new Promise((resolve,reject)=>
            {
                setTimeout(()=>
                    {
                        console.log("esto saldrá despues de los 2 segundos");

                        let salioTodoBien = false;

                        if(salioTodoBien)
                        {
                            resolve();
                        }
                        else
                        {
                            reject();
                        }

                    },2000);

            })
    }

/* Esta función Async permite que la invocación 
a las promesas sea más clara, más transparente, 
más comoda, más legible */

const funcionLlamadoraAsincrona = async ()=>
    {

        /* con el bloque try/catch capturo los errores
        de cualquiera de las dos promesas que estén 
        dentro del bloque try */

        try
        {
            /* a la invocación de la promesas le 
            antepongo la palabra await */

            await fnDevuelvePromesa1();
            await fnDevuelvePromesa2();
        }
        catch(error)
        {
            console.log("algo salio mal en la promesa en la ejecución de las promesas");
        }
    }