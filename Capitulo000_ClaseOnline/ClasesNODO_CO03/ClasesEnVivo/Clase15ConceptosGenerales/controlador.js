

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


    idBtnUno.onclick = function(event)
    {
        alert("soy el boton 1");
        event.stopPropagation();
    }

    idBtnDos.onclick = function()
    {
        alert("soy el boton 2");
    }

    idContenedor2.onclick = function()
    {
        alert("soy el contenedor 2, el contenedor interno")
    }

    idContenedor1.onclick = function()
    {
        alert("soy el contenedor 1, el contenedor principal");
    }

    /*****************************************************************/
    /****************************** EJEMPLO 02 **********************/
    /*****************************************************************/

    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    idBtnAceptar.onclick = function(event)
    {
        alert("soy el boton aceptar");

        if(1 > 2) // si llega a existir algun error. retengo el formulario.
        {
            console.log("es un error, no se deberia enviar la pagina");
            event.preventDefault(); // lo que hace esto es evitar que haga una recarga y renderizado de la pagina.
        }
        else
        {

        }
    }

    /*****************************************************************/
    /****************************** EJEMPLO 03 ***********************/
    /*****************************************************************/

    /* antes del 2015 */

    const idBtnFormaTradicional = document.querySelector("#idBtnFormaTradicional");
    const idBtnFormaMultiple = document.querySelector("#idBtnFormaMultiple");


    idBtnFormaTradicional.onclick = function()
    {
        alert("soy el boton tradicional y soy la funcion 1");
    }

    idBtnFormaTradicional.onclick = function()
    {
        alert("soy el boton tradicional y soy la funcion 2");
    }

    let importeTransferencia = 0;
    importeTransferencia = 200;
    console.log(importeTransferencia);

    importeTransferencia = 500;
    console.log(importeTransferencia);


    idBtnFormaMultiple.onclick = function()
    {
        alert("soy un mensaje de una funcion agregada por onclick");
    }

    idBtnFormaMultiple.addEventListener("click",function()
    {
        alert("soy un mensaje 2");
    })

    idBtnFormaMultiple.addEventListener("click",function(){
        console.log("esto sale por consola");
    })

    const evento1 = function()
    {
        alert("soy un mensaje guardado dentro de una funcion que esta en una constante");
    }

}