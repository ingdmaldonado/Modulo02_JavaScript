

/* cuando se dispara el eventon onload 
le asignamos una única función delegada
que atiende ese evento
*/

function clickBoton2()
{
    console.log(`click en el boton 2`);
}


window.onload = function()
{
    console.log(`la aplicación está corriendo`);

    const idBtn1 = document.querySelector("#idBtn1");
    const idBtn2 = document.querySelector("#idBtn2");

    /* delegando una función que la estoy creando
    en ese preciso momento. esto se llama delegación
    de una función anonima */
    idBtn1.onclick = function()
    {
        console.log(`me estan haciendo click en el boton 1`);
    }

    idBtn1.onclick = function()
    {
        console.log(`este es otra función delegada. `)
    }

    /* las dos opciones son validas */
    idBtn2.onclick = clickBoton2;

    console.log(idBtn1,idBtn2);

    let totalFacturado = 200000;
    totalFacturado = 150000;

    console.log(totalFacturado);

}

/* click en el boton 1 => funcion1 ... funcion2 */

/* 
    addEventListener

    add => agregar

    Event => evento

    Listener => escuchador


*/

