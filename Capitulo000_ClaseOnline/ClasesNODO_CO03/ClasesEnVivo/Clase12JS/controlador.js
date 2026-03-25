
/* 
    html = documento de hipertexto
    css = hoja de estilos
   
    javasCript = codigo de programación.

    DOM => DOCUMENT OBJECT MODEL

*/

/* Forma tradicional de crear una funcion */

function CuadradoDeUnNumero(numero)
{
    return (numero * numero);
}

/* Forma de crear una variable o constante y 
dentro de ella guardar una función */

const CuadradoDeUnNumeroVersion2 = function(numero)
{
    return (numero * numero);
}

/* Es cuando la página HTML, con su CSS y con
sus imagenes estén completemente cargados, habrá
un evento que puedo "capturar" que se llama
onload y está dentro de un objeto que se llama
window. 

Lo que hago aqui, es "delegar" en una función
el comportamiento ó el control de ese evento 

    Delegacion de Eventos

    1 Evento => una función 

*/


window.onload = function()
{
    // capture el input del nombre
    const idNombre = document.getElementById("idNombre");
    console.log(idNombre);

    // capture el input del boton aceptar
    const idBtnAceptar = document.getElementById("idBtnAceptar");
    console.log(idBtnAceptar);

    /* Es decir aqui, voy a manejar el elemento
    del DOM cuyo id es "idBtnAceptar", que lo estoy
    manejando y manipulando a través de una constante
    que tiene el mismo nombre y como la constante en
    realidad es el boton, le puedo asignar o delegar
    el comportamiento onclick a una función.

        1 evento (onclick) => function
    */

    idBtnAceptar.onclick = function()
    {

        /* aqui estoy accediendo al atributo value
        que tiene el input apellidoYNombre, ese
        input lo manejo desde javaScript con la constante
        que tiene su mismo nombre */

        let apeynom = idNombre.value;

        console.log(apeynom);



        alert("hola soy un boton y tengo codigo javascript dentro");
    }

    /********************************************* */

    /* ESTA PARTE QUE ESTA AQUI ES SOLAMENTE UN EJEMPLO
    DE COMO CREAR FUNCIONES Y ASIGNARSELAS A CONSTANTES
    PARA PODER COMPRENDER */

    // esta función se definió de la manera tradicional
    console.log(CuadradoDeUnNumero(2));

    // esta función se guardó dentro de una variable o constante
    console.log(CuadradoDeUnNumeroVersion2(4));

    console.log("running!!!");

}

/* RESUMEN PRIMERA PARTE

    1) DOM => document puedo acceder a los elementos
    del HTML

    2) creamos constantes que apuntan a los elementos
    HTML, que generalmente siempre recomiendo
    que sean y que tengan el mismo nombre que el elemento
    en el html.

    3) Vimos como "delegar eventos"

        window.onload = function()
        {

        }

    4) Vimos como delegar el evento click
    de un boton por medio del nombre de
    la constante que apunta al boton

        idBtnAcepar.onclick = function()
        {
        
        }
*/