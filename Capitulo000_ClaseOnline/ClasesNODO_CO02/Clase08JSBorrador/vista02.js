

/* el onload de la página se ejecuta cuando
toda la página está renderizada y lista 
para interactuar con el usuario */

window.onload = function() 
{
    // mensaje por consola
    console.log("La pagina esta cargada"); 

    // creamos una variable y la vinculamos con el boton1
    const idBtn1 = document.getElementById("idBtn1"); 
    const idBtn2 = document.getElementById("idBtn2"); 

    const idBtnCambiarTextContent = document.getElementById("idBtnCambiarTextContent");

    const idResultadoH1 = document.getElementById("idResultadoH1");
    const idResultadoH3 = document.getElementById("idResultadoH3");
    const idResultadoLabel = document.getElementById("idResultadoLabel");
    const idResultadoParrafo = document.getElementById("idResultadoParrafo");
    const idBtnCambiarEstilos = document.getElementById("idBtnCambiarEstilos");

    const idContenedor = document.getElementById("idContenedor");

    // aqui vamos a mostrar las variables que capturamos en el paso anterior 

    console.log(idBtn1);
    console.log(idBtn2);
    console.log(idBtnCambiarTextContent);
    console.log(idResultadoH1);
    console.log(idResultadoH3);
    console.log(idResultadoLabel);
    console.log(idResultadoParrafo);
    console.log(idBtnCambiarEstilos);
    console.log(idContenedor);


    // al boton 1 le agregamos comportamiento a su evento click
    idBtn1.onclick = async function()
    {
        alert("hicieron click en el boton 1");
    }

    // al boton2 le agregamos comportamiento a su evento click
    idBtn2.onclick = function()
    {
        alert("hicieron click en el boton 2");
    }

    // agregamos comportamiento al documento
    document.onclick = function()
    {
        alert("hicieron click en el documento, en cualquier parte del documento");
    }

    // agregamos comporttamiento al boton cambiar propiedad text content //
    idBtnCambiarTextContent.onclick = function()
    {

        idResultadoH1.textContent = "Texto Modificado por Programacion";
        idResultadoH3.textContent = "Texto Modificado por Programacion";
        idResultadoLabel.textContent = "Texto Modificado por Programacion";
        idResultadoParrafo.textContent = "Texto Modificado por Programacion";
    }

    idBtnCambiarEstilos.onclick = function()
    {
        idContenedor.style.backgroundColor = "black";
        idContenedor.style.color = "white";
    }

}
