

/* callBack */
/* Promesas 

    Permite Encadenar procesos asíncronos
    sin entrar en tantos procesos problema
    como las callBack



*/

const salioBienProceso1 = false;

const salioBienProceso2 = true;

const fnProcesoAsincrono01 = ()=>
    {
        return new Promise((fnSiguiente,fnSiFalla)=>
            {
                setTimeout(()=>{

                    console.log("inicia proceso asincrono 1");

                    if(salioBienProceso1)
                    {
                        fnSiguiente();
                    }
                    else
                    {
                        fnSiFalla();    
                    }

                },5000);
            })
    }

const fnProcesoAsincrono02 = ()=>
    {
        return new Promise((fnSiguiente2,fnSiFalla2)=>
            {
                setTimeout(()=>
                    {
                        console.log("inicio del proceso asincrono 2");

                        if(salioBienProceso2)
                        {
                            fnSiguiente2();
                        }
                        else
                        {
                            fnSiFalla2();
                        }

                    },7000);
            })

    }

const fnPrincipal = async ()=>
{
    try {
        
        await fnProcesoAsincrono01();
        console.log("el proceso 1 termino bien");

        await fnProcesoAsincrono02();
        console.log("el proceso 2 termino bien");

    } catch (error) {
       console.log(error);
    }

   
   
    
}


window.addEventListener("load",()=>
    {
        console.log("running controlador 2");

        /* lanzamiento en cadena de los
        procesos asíncronos */

        fnPrincipal();

    })