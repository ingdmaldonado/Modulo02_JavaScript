
window.onload = function()
{
    console.log("la aplicación web esta renderizada");


    /******************************************************/
    /* EJEMPLO 1 - INVOCACIÓN DE 1 SOLO PROCESO ASÍNCRONO */
    /******************************************************/

    /*
    const PromesaEjemplo1 = new Promise(fnDemora5Segundos);

    PromesaEjemplo1
        .then(()=>{console.log("termino la ejecución, salio todo ok")})
        .catch(()=>{console.log("algo salio mal dentro del proceso")})
    */

    /***************************************************************/
    /* EJEMPLO 2 - INVOCACIÓN DE 2 PROCESOS ASÍNCRONOS ENCADENADOS */
    /****************************************************************/

    /*

    const PromesaEjemplo2 = new Promise(fnDemora5Segundos)

    PromesaEjemplo2
        .then(
            ()=>
                {
                    console.log("la Promesa 1 salió bien y lanzo la segunda");
                    const Promesa3 = new Promise(fnDemora2Segundos);

                    Promesa3
                        .then(()=>{
                            console.log("La Promesa 2 salio todo ok ");
                            })
                        .catch(
                            ()=>{
                                console.log("Algo salió mal en la promesa 2");
                            }
                        )

                }
        )
        .catch(
            ()=>
                {
                    console.log("algo salió mal en la promesa 1");
                }
        )

        */

    /***************************************************************/
    /* EJEMPLO 3 - INVOCACIÓN DE 2 PROCESOS ASÍNCRONOS ENCADENADOS */
    /****************************************************************/

    /* Con este ejemplo, lo que quiero hacer es refactorizar el ejemplo 2
    para que todos los .then queden a la misma altura y todos los catch
    también queden a la misma altura, al mismo nivel, sea legible 
    y lo más humanamente comprensible. para ello, debo poner la palabra
    return new Promise en los .then, es decir lo que le digo al programa
    es que cuando salga bien algo, retorno una nueva promesa 
    ahora bien. de esta forma solamente puedo capturar un solo catch()
    es decir si todo va bien se irán encadenando procesos tras procesos,
    y si algo sale mal, un solo catch capturará la detención de esa
    */

    const PromesaEjemplo3 = new Promise()

    PromesaEjemplo3
    .then(
        ()=>
            {
                console.log("la Promesa 1 salió bien y lanzo la segunda");
                return new Promise(fnDemora2Segundos);
            }
    )
    .then(()=>{
        console.log("La Promesa 2 salio todo ok ");
        })
    .catch(
        ()=>
            {
                console.log("algo salió mal en el árbol de ejecución de procesos");
            }
        )
}


/*****************************************************************/
/* PRIMER EJEMPLO => PROMESA SIMPLE, es decir
que ejecute un proceso asíncrono, espere y al terminar
simplemente diga terminamos la promesa */
/*****************************************************************/


    /* funcion diseñada especialmente para que
    demore 5 segundos */
    const fnDemora5Segundos = (resolve,reject)=>
        {
            setTimeout(()=>{
                
                console.log("esta funcion debe esperar 5 segundos");

                const salioTodoBien = true;

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


/*****************************************************************/
/* 
    SEGUNDO EJEMPLO => DOS PROMESAS ENCADENADAS. Es decir
    un proceso demorará 5 segundos y el otro 2, el segundo
    se debe ejecutar si y solo si, el primero se ejecutó bien.
*/
/*****************************************************************/

    /* función diseñada especialmente para que 
    demore 2 segundos */
    const fnDemora2Segundos = (resolve,reject)=>
        {
            setTimeout(()=>{
                console.log("esta función debe esperar 2 segundos");

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