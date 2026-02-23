
/* existen procesos que son
asincronos por naturaleza.
entonces quiere decir, que
son procesos que corren de forma
independiente uno del otro.

pero hay situaciones, donde necesito
a partir de esos procesos asincronos
convertirlos o forzarlos a que sean
SINCRONOS !!! 
*/

/* 
    pasarelas de pago =>
        tarjeta naranja
        mercado pago
        banco nacion
        red link
        red banelco

        1ro) auntenticarme. 

            usuario y contraseña

        2do) Enviame los datos 
        de las facturas a cobrar.
        numero de factura y el importe
        total a pagar

        3ro) Esperar que el usuario
        de nuestra aplicación => redirección
        al sitio del tercero. paga
        y a la salida de esa función

        4to) pago =>
            {
                result:ok
                {
                }
            }

            no pago =>

        5to) Se conecta con los 
        distribuidores
            => andreani
            => oca
            => correo argentino

*/

/*
    Si aprueba taller 2 => paga el asado para TODOS
*/

/* 
    si uno quiere tener una secuencia de pasos
    asíncronos => se conviertan en SINCRONOS
    vas a tener que implementarlo con PROMESAS

    si sale bien promesa1 => promesa2 => promesa3

    

*/

/* javaScript tanto del FrontEnd
como del BackEnd tiene una
Clase => objetos
*/

const salioBienProceso1 = true;
const salioBienProceso2 = false;

/* un proceso asincrono dentro
de una funcion que retorna una promesa
*/

const fnProceso1 = ()=>
{
    return new Promise((fnSiSaleBien,fnSiSaleMal) => 
    {
        /* 
            tiene que ser si o si un proceso asincrono
        */

        setTimeout(()=>
            {
                console.log("este es el cuerpo del proceso asincrono 1");

                if(salioBienProceso1)
                {
                    fnSiSaleBien();
                }
                else
                {
                    fnSiSaleMal();
                }
            },5000)
    })
}


/* este sería el proceso numero 2
que se tiene que ejecutar despues
que haya terminado el 1. y siempre
y cuando. el uno haya salido bien
*/

const fnProceso2 = ()=>
{
    return new Promise((fnSiSaleBien2,fnSiSaleMal2) => 
    {
        /* 
            tiene que ser si o si un proceso asincrono
        */

        setTimeout(()=>
            {
                console.log("este es el cuerpo del proceso asincrono 2");

                if(salioBienProceso1)
                {
                    fnSiSaleBien2();
                }
                else
                {
                    fnSiSaleMal2();
                }
            },7000)
    })
}

/* en el 2017. fines del 2017 .
toda la INDUSTRIA CAMBIO de PROMESAS
a ASYNC & AWAIT. donde dicen
vamos a simplificar la forma de 
invocar las promesas */

/*
    1ro) crear un proceso global
    llamador que tenga la palabra
    async => aqui dentro 
    se ejecutará código asincrono

    2do) para que esos procesos
    asíncronos. esperen, a que 
    se termine uno y siga el otro
    lo unico que se hace es poner
    la palabra await



*/

const fnLLamadoraGloba = async ()=>
    {
        try 
        {
            await fnProceso1();

            console.log("arrancando el proceso 2");

            await fnProceso2();
            
        } catch (error) 
        {
            console.log("algo fallo");
        }
    }


window.addEventListener("load",()=>
    {
        console.log("aplication is running");

        /*
            ESTE ES EL EJEMPLO 
            DE LANZAR UNA SOLA PROMESA
        */

        /*

        fnProceso1()
            .then(()=>
                {
                    console.log("el proceso salio bien");
                }) // programo la función en caso de que todo salio bien
            .catch(()=>
                {
                    console.log("algo salio mal");
                }); // programo la función en caso de que algo salio mal
        */

        /* 
        VOY A MOSTRAR EL EJEMPLO DONDE
        VOY A ENGANCHAR DOS PROMESAS.
        ES DECIR, SI LA PRIMERA SALE BIEN.
        SIGUE CON LA SEGUNDA 
        */

        /*

        fnProceso1()
            .then(()=>
                {
                    console.log("salio bien el 1 y lanzo el 2");
                    return fnProceso2();
                })
            .then(()=>
                {
                    console.log("termino bien el 2 y aqui se termino");
                })
            .catch(()=>{

                console.log("algo salio mal, se anula");

            });

        */


        fnLLamadoraGloba();

    })
