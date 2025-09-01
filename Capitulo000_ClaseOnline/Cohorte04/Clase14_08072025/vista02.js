

/* A partir de la clase 14 

    TODAS LAS FUNCIONES LAS VAMOS A EXPRESAR COMO 

    ARROW FUNCTION

    const fnCuadrado = ()=>{}

*/

window.addEventListener("load",()=>{

    console.log(`la aplicación esta corriendo`);

    const idBtn1 = document.querySelector("#idBtn1");
    
    /* aqui estoy "AGREGANDO UN ESCUCHADOR DE EVENTOS" */
    idBtn1.addEventListener("click",()=>{

        console.log(`me estan haciendo click en el boton 1`);

    })

    /* aqui estoy "AGREGANDO UN NUEVO ESCUCHADOR DE EVENTOS " */
    idBtn1.addEventListener("click",()=>{

        console.log(`esto es otra función`);

    })

});