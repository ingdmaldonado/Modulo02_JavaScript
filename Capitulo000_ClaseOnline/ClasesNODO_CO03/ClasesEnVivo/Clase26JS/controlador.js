
/* 
    PROMESAS 
    ASYNC & AWAIT
    TECNICA DE CONTROL DE ERRORES
        TRY/CATCH
*/

/*
    PROCESOS ASINCRONOS => PROCESOS
    QUE SE GENERAN O SE LANZAN EN 
    SEGUNDO PLANO. Siempre generalmente
    en los proceso asincronos hay cosas
    que dependen de terceros o dependen 
    del SISTEMA OPERATIVO.

    javaScript (NAVEGADOR)

        - levantar un archivo de texto. SISTEMA OPERATIVO
        - pidiendo al servicio meteorologico nacional

    ENCADENAMIENTO DE PROMESAS.

     Que sucede cuando tengo dos proceso asíncronos
     que necesito, que para que siga uno, termine
     o finalice el primero.

*/


/* conseguir que dos procesos que son ASINCRONOS
funciones callBack (viejo) => promesas

    proceso1 => proceso2 => proceso3 =>

    producto eligio cliente => pagar producto => recibir el pago de la billetera virtual

    => confirmar el producto
*/

/* las promesas => encapuslar en funciones => deben
retornar una promesa */

const salioBienPaso1 = true;
const salioBienPaso2 = false;

// haciendo la definición de la función //
const fnPaso01 = ()=>
{
    return new Promise((fnExito,fnFracaso)=>
        {
            /* 
            esto es el cuerpo del proceso 1 asincrono 
            */

            setTimeout(()=>{

                console.log("estoy arrancando el paso 1");

                if(salioBienPaso1)//esto me lo dira un tercero
                {
                    fnExito("todo salio bien");
                }
                else
                {
                    fnFracaso("mensaje interno error");
                }
            },2000);
        });
}

/* los proceso asincronos se deben encapusular
dentro de funciones que retornen promesas */

/* que debe haber un proceso que se encargue
de invocar esas funciones asincronas, paso a paso
una x una en el orden que yo las necesito
y donde pueda capturar los errores */

// haciendo la definición de la función //
const fnPaso02 = ()=>
    {
        return new Promise((fnExito,fnFracaso)=>
            {
                /* 
                esto es el cuerpo del proceso 1 asincrono 
                */
    
                setTimeout(()=>{
    
                    console.log("estoy arrancando el paso 2");
    
                    if(salioBienPaso2)//esto me lo dira un tercero
                    {
                        fnExito("todo salio bien EN EL PASO 2");
                    }
                    else
                    {
                        fnFracaso("mensaje interno error del paso 2");
                    }
                },2000);
            });
    }


/* la idea de esto es que 
lance dos procesos asincronos

    primero el 1

    segundo el 2
*/

const fnLanzarProcesoCompleto = ()=>
{

    fnPaso01()
        .then(()=>{
            console.log("proceso 1 salio todo bien");

            return fnPaso02();

        })
        .then(()=>{
            console.log("el proceso 2 salio bien");
        }) // función exito
        .catch((error)=>{
            console.log("algo salio mal",error);
        }); // función de fracaso
}

/* esto se invento para cuando tengo
procesos asincronos pesados, y uno depende
del otro */

/* 
    primer paso => elige un producto

    segundo paso => billetera virtual y paga (naranja x)

    tercer paso => registrar en mi base de datos los pagos (backe end)
*/

/* 
    INTERCONECTIVIDAD DE APLICACIONES
    Y SERVICIOS. VILLETERAS VIRTUALES 
*/


/* ASYNC && AWAIT =>espera  */

const fnLanzarProcesoCompleto2 = async ()=>
    {

        try {
            await fnPaso01();

            await fnPaso02();
    
            console.log("todo salio bien");
            
        } catch (error) {
            console.log("algo salio mal",error);
        }
    }


/*

    CONSULTA A UN TERCERO QUE ME DEVUELVA DATOS.

    la velocidad en la que me va a responder esos
    datos el servicio meteor. nacional.

    internet
    conectividad
    paquete de datos

    PROCESO ASINCRONO. va a demorar unos segundos

    la ejecución de esos datos. no depende de mi
    de un monton de factores que son de tercros.

    fetch
    
*/

const fnConsultarTemperatura = async ()=>
    {
        // en una constante guardo el EndPoint del servicio meteorologico nacional */
        //const direccionInternet = "https://ws.smn.gob.ar/map_items/weather";

        const direccionInternet = "http://universities.hipolabs.com/search?country=Argentina";

        try {

            const resultado1 = await fetch(direccionInternet); // promesa 1 => request => stream

            const datosEnFormatoJSON = await resultado1.json(); // promesa 2 

           // console.log(datosEnFormatoJSON);

            return (datosEnFormatoJSON); // devuelvo ese vector a quien lo requiera
            
        } catch (error) {
            console.log("algo fallo, hubo un problema ",error);
        }

    }

window.addEventListener("load",async ()=>
    {
        console.log("running");

        //fnLanzarProcesoCompleto();

        //fnLanzarProcesoCompleto2();

        let vectorDeServicioMeteorologico = await fnConsultarTemperatura();

      //  console.log(vectorDeServicioMeteorologico);

        vectorDeServicioMeteorologico.forEach(universidad => 
            {
                console.log(universidad);
            })

        const universidadesDeCordoba = vectorDeServicioMeteorologico.
                filter(universidad => universidad["state-province"] === 'Córdoba');

        console.log(universidadesDeCordoba);


        /* ya es mio. puedo hacer lo que quiera.
        puedo mostrarlo en una tabla, con DOM DINAMICO
        puedo recorrer y contar cosas. puedo hacer un filter */

        /*

        vectorDeServicioMeteorologico.forEach(localidad => 
            {
                if(localidad.province === 'Catamarca')
                {
                    console.log(localidad.province);
                    console.log(localidad);
                }
            })

        */

    })