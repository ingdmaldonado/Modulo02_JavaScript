
/* SINCRONICO: => 
    ejecución
    de código javascript linea a linea 

    
    linea1;linea2;linea3; ...

    ASINCRONISMO: no existe una 
    secuencia lógica y ordenada de pasos.
*/

window.addEventListener("load",()=>
    {
        console.log("paso 1");

        // demora de ejecución del codigo //

        /* abre como una linea de ejecución
        secundaria. de un código que se ejecutará
        posteriormente. pasado tantos segundos 
        
        espera unos segundos y ejecuta el codigo

        */

        setTimeout(()=>{

            console.log("paso 2");

        },7000);

        console.log("paso 3");

        /* proceso asíncrono. que
        repite codigo cada determinada
        cantidad de milisegundos 
        */

        const proceso = setInterval(()=>{

            console.log("paso 4");

        },2000)


        /* corriendo un conjunto
        de procesos que no están
        anidados uno dentro del otro 
        
        son procesos aislados que se ejecutan
        en "hilos secundarios";

        LA GRAN MAYORIA DE LAS COSAS SON
            SINCRONAS:

                foreEach => sincrono
                map
                find
                reduce
        */

        /* los unicos procesos
        asincronos que existen
        en el front End son

            - setTimeOut
            - setInterval
            - promesas
            - async & await
            - fetch
        */

    })