
window.addEventListener("load",()=>{

    const idBoton1 = document.querySelector("#idBoton1");
    const idBoton2 = document.querySelector("#idBoton2");
    const idContenedor1 = document.querySelector("#idContenedor1");
    const idContenedor2 = document.querySelector("#idContenedor2");

    console.log(idBoton1);
    console.log(idBoton2);
    console.log(idContenedor1);
    console.log(idContenedor2);

    idBoton1.addEventListener("click",()=>{

        console.log("me estan haciendo click en el boton 1");

    })

    idBoton2.addEventListener("click",(e)=>
        {
            console.log("me estan haciendo click en el boton 2");
            e.stopPropagation();
        })

    idContenedor1.addEventListener("click",(e)=>
        {
            console.log("me estan haciendo click en el contenedor 1");
            e.stopPropagation();
        })

    idContenedor2.addEventListener("click",()=>{

        console.log("me estan haciendo click en el contenedor 2");
    })
    

    console.log("andando");


})