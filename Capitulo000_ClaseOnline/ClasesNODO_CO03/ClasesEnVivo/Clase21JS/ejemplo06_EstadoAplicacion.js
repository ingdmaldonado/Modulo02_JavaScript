

const EstadoAplicacion = 
{
    importeLuz:0,
    importeAgua:0
}

window.addEventListener("load",()=>{

    const idFacturaLuz = document.querySelector("#idFacturaLuz");
    const idFacturaAgua = document.querySelector("#idFacturaAgua");
    const idBtnSuma = document.querySelector("#idBtnSuma");
    const idBtnResta = document.querySelector("#idBtnResta");

    console.log(idFacturaAgua,idFacturaLuz,idBtnSuma);

    idBtnSuma.addEventListener("click",()=>
        {
           
            console.log(EstadoAplicacion);

            localStorage.setItem("estado",JSON.stringify(EstadoAplicacion));

            console.log("datos guardados");

        })

    idBtnResta.addEventListener("click",()=>
        {
            let estadoGuardado = JSON.parse(localStorage.getItem("estado"));

            console.log(estadoGuardado);
            
        })

    /* en cualquier instante de tiempo de ejecucion 
    de una aplicacion web, tengo o debería saber
    el valor que tienen todos los objetos visuales
    que me interesan capturar 

        React => estado aplicacion 
        Angular => 

        JAVASCRIPT 

    */

    /* cuando alguien cambia un valor en el input
    ese input reporta el valor que tiene al objeto
    que se llama EstadoAplicacion */

    idFacturaLuz.addEventListener("change",()=>
        {
            let luz = Number(idFacturaLuz.value);
            console.log(luz);

            EstadoAplicacion.importeLuz = luz;

        })

    
    /* cuando alguien cambia un valor en el input
    ese input reporta el valor que tiene al objeto
    que se llama EstadoAplicacion */

    idFacturaAgua.addEventListener("change",()=>
        {
            let agua = Number(idFacturaAgua.value);
            console.log(agua);

            EstadoAplicacion.importeAgua = agua;

        })

    

})