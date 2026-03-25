

window.addEventListener("load",()=>{

    console.log("este es el paso 1");

    /* me hace una demora en la ejeución
    de la función que se pasa por parametro 
    
    EL ASINCRONISMO en JAVASCRIPT ya esta definido
    por un conjunto de funciones que ya están definidas.

    */

    setTimeout(()=>{

        console.log("este es el paso 2");

    },4000)

    
    console.log("este es el paso 3");

    /* TODO PROCESO que depende de TERCEROS
    o depende de un proceso que no es de la línea
    de ejecución o hilo de ejecución de javasCript
    se hace de forma ASÍNCRONA */

    

})