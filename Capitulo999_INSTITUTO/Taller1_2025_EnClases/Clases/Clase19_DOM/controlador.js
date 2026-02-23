

/*

Delegación de Eventos => con Funciones

*/


/* el onload es el evento que se
dispara cuando la página se termino
de renderizar, cargo todas las imagenes.
aplico todos los estilos. hizo el maquetado
del documento HTML y está lista para mostrarse
*/

function fnDelegada()
{
    console.log("Este es el ejemplo 2");
}

const fnDelegada2 = ()=>
    {
        console.log("Soy la funcion 3 . y soy una arrow function");
    }

/*
EJEMPLO 01 - Delegación de Eventos 
Esto sería el nuevo programa principal 
*/
window.onload = function()
{
    console.log("Este es el ejemplo 01");

}

/* EJEMPLO 02 - Delegación de Eventos
con funciones. asignandole una función
que ya existe. está creada */

window.onload = fnDelegada2;

window.onload = fnDelegada;

window.onload = ()=>{

    console.log("soy la funcion delegada 4");

};



/*

let a = 20;


a = 30;

console.log(a);


*/

