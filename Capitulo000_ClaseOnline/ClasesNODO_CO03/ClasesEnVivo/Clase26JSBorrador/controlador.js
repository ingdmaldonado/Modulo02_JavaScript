
/* callBack */
/* Promesas 

    Permite Encadenar procesos asíncronos
    sin entrar en tantos procesos problema
    como las callBack
*/

const salioBienProceso1 = true;

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
                        fnSiFalla("el proceso 1 fallo");    
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
                            fnSiFalla2("el proceso 2 fallo");
                        }

                    },7000);
            })

    }

const fnPrincipal = ()=>
{
    fnProcesoAsincrono01()
        .then(()=>{
            console.log("el proceso1 termino con exito");
            return fnProcesoAsincrono02();
        }) // aqui iria la función siguiente
        .then(()=>
            {
                console.log("el proceso2 termino con exito");
            })
        .catch((error)=>{
            console.log("por algun motivo el proceso fallo",error);
        }); // aqui iria la función si cancela
}

const fnProcesoAsincrono3 = ()=>
    {
        console.log("este es un proceso 3 sin promesa");
    }


const fnPrincipal2 = async ()=>{

    try {

        await fnProcesoAsincrono01();
        console.log("el proceso 1 finalizo con exito");
    
        await fnProcesoAsincrono02();
        console.log("el proceso 2 finalizo con exito");

        await fnProcesoAsincrono3();
        
    } catch (error) {
        console.log("se produjo un error en la ejecución de los procesos",error);
    }
}

window.addEventListener("load",()=>
    {
        console.log("running controlador 1");

        /* lanzamiento en cadena de los
        procesos asíncronos */

        //fnPrincipal();

        fnPrincipal2();

    })