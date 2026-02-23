

window.onload = function()
{

    //**************************************************//
    // Controlador para el Ejemplo 01 - stopPropagation //
    //**************************************************//

    const idBtnUno = document.querySelector("#idBtnUno");
    const idBtnDos = document.querySelector("#idBtnDos");
    const idContenedor1 = document.querySelector("#idContenedor1");
    const idContenedor2 = document.querySelector("#idContenedor2");

    console.log(idBtnUno,idBtnDos,idContenedor1,idContenedor2);

    idContenedor1.onclick = function()
    {
        alert("soy el contenedor 1");
    }

    idContenedor2.onclick = function()
    {
        alert("soy el contenedor 2");
    }

    idBtnUno.onclick = function()
    {
        alert("soy el boton 1");
    }

    idBtnDos.onclick = function(event)
    {
        alert("soy el boton 2");
        event.stopPropagation();
    }

    //**************************************************//
    // Controlador para el Ejemplo 02 - preventDefault  //
    //**************************************************//

    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    idBtnAceptar.onclick = function(event)
    {
        alert("este es el boton aceptar");
       // event.preventDefault();
    }

    //**************************************************//
    // Controlador para el Ejemplo 03 - preventDefault  //
    //**************************************************//

    const idBtnFormaTradicional = document.querySelector("#idBtnFormaTradicional");
    const idBtnFormaMultiple = document.querySelector("#idBtnFormaMultiple");

    // forma tradicional de asignarle una función delegada //
        idBtnFormaTradicional.onclick = function()
        {
            alert("funcion delegada numero 1");
        }

        idBtnFormaTradicional.onclick = function()
        {
            alert("funcion delgada numero 2");
        }

        idBtnFormaTradicional.onclick = function()
        {
            alert("funcion delgada numero 3");
        }

    // forma nueva de asignarle funcionalidad múltiple //
    
    idBtnFormaMultiple.addEventListener("click",function()
    {
        alert("soy la funcion delegada 1 y soy una funcion anonima");
    })

    function funcionDelegadaDos()
    {
        alert("soy la funcion delegada 2 y soy una funcion nombrada")
    }

    idBtnFormaMultiple.addEventListener("click",funcionDelegadaDos);

    idBtnFormaMultiple.addEventListener("click",()=>
        {
            alert("soy una funcion delegada 3 y soy una arrow function");
        })
    

}