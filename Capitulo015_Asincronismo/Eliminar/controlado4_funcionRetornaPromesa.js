

window.onload = function()
{
    console.log("la aplicación está renderizada");

    /*
    fnDemora5Segundos();
    fnDemora2Segundos();
    */

    EjecutarPromesa(fnDemora5Segundos,fnDemora2Segundos)
        .then(
               ()=>{
                    return new Promise(fnDemora2Segundos);
               }
            )
        .then(()=>{
            console.log("El proceso 2 termino satisfactoriamente !!!");
        })
        .catch((error)=>{console.log("hubo algún problema en la ejecución del programa")});

}

/* proceso ó función que demorará 
cinco segundos en terminar e imprimir
el console.log */

const fnDemora5Segundos = (resolve,reject)=>
    {
        setTimeout(()=>{

            const salioTodoBien = true;

            if(salioTodoBien)
            {
                resolve();
            }
            else
            {
                reject();
            }

            console.log("este proceso demora 5 segundos en salir");
        },5000)
    }

/* proceso ó función que demorará dos
segundos en terminar e imprimir el console.log */

const fnDemora2Segundos = (resolve,reject)=>
    {
        setTimeout(()=>{
            
            console.log("este proceso demora 2 segundos en salir");

            const salioTodoBien = false;

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


function EjecutarPromesa()
{

    return new Promise(fnDemora5Segundos)

}