
/* DOCUMENT OBJECT MODEL => DOM */


/* forma tradicional de hacer funciones 
momento1 => defifinición de la función
*/
function fnCuadrado (numero) 
{
    return numero * numero;
}

/* exprese en forma de arrow function */
const fnCuadrado2 = (numero)=>
    {
        return numero * numero;
    }


/* EVENTO => SUCESO QUE SE PRODUCE EN LA PÁGINA WEB

    click en un boton => click
    la pagina se carga => load


    - cuando hago doble click sobre un elemento
    - cuando paso el mouse por arriba de un elemento
    - cuando presiono una tecla dentro de un elemento

*/

/*
    cada evento del DOM => DOCUMENT OBJECT MODEL 
    tiene que ser atendido por una función
    
    1 EVENTO => 1 FUNCION
    
*/

/* DELEGACION DE EVENTO */


/* onload => evento que se ejecuta cuando la página
termino de renderizar, dibujar y preparar todos
los elementos del documento HTML */


/* función anónima que atiende la delegación del evento
*/


/* aqui en esta forma. lo que hice es

    1ro) Crear una función. que tenga un nombre y 
    y a dentro poner el codigo que necesito */

function fnOnload()
{

}

/* 2do) cuando la página se cargue, lo que le digo
es que al evento onload, será atendido por la función
fnOnload; */

window.onload = fnOnload;

window.onload = function()
{
    
     console.log(`la aplicación esta corriendo`);

    /* momento2 => invocación de la función */
    console.log(fnCuadrado(9));

    console.log(fnCuadrado2(9));

}

