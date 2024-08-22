


/* el evento onload se produce cuando la página
se termino de renderizar, se cargó todo el document
el documento HTML y el usuario está en condiciones
de comenzar a operar con la página */

const fnClickDelBoton2 = ()=>
    {
        alert("me estan haciendo click en el boton 2");
    }


window.onload = function()
{
    console.log("la aplicación web esta funcionando");

 
    const idBtnUno = document.querySelector("#idBtnUno");
    console.log(idBtnUno);

    const idBtnDos = document.querySelector("#idBtnDos");
    console.log(idBtnDos);

    const idBtnTres = document.querySelector("#idBtnTres");
    console.log(idBtnTres);

    const idContenedor1 = document.querySelector("#idContenedor1");
    console.log(idContenedor1);

    /* FORMA 1: a estas funciones se las conocen como funciones anonimas 
        Esta forma, se llama delegación de eventos a un objeto
        HTML por medio de una función que la estoy creando
        ahí en el mismo momento que estoy haciendo la delegación.


    */
    idBtnUno.onclick = function()
    {
        alert("me estan haciendo click en el boton 1");
    }

    /* FORMA 2: en este caso, lo haremos de otra forma 
        en el segundo ejemplo.

        1ro) crear la función y lo hice de la manera tradicional
        2do) me fui al controlador y le dije al boton, cuando 
        te hagan click la función que se va a encargar
        de responder a ese evento es la función fnClickDelBoton2

    */

    idBtnDos.onclick = fnClickDelBoton2; //delegación del evento //


    /* FORMA 3: creando una arrow funcion y asignandosela a un evento */

    idBtnTres.onclick = ()=>{
        alert("soy el boton 3 y esta es otra forma de delegación de eventos")
    }

    
    idBtnTres.onclick = ()=>{
        alert("habiamos quedado que no hablabamos de FUTBOL. !!!");
    }

    /* FORMA 4: haciendo un incorporación o acumulación de eventos y funciones
    que responden a ese evento. */

    idContenedor1.addEventListener("click",()=>{

        alert("SOY UN DIV MENSAJE 1");

    });

    
    idContenedor1.addEventListener("click",()=>{

        let numero1 = 10;
        let numero2 = 20;

        let suma = numero1 + numero2;

        console.log(suma);

    })






}


