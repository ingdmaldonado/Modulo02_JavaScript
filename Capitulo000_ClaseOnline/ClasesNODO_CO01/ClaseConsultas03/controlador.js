
function soyElClickDelboton()
{
    console.log("soy el click del boton 2");
}



window.addEventListener("load",()=>
    {

        /* tres formas 
        
        1) la mas vieja de todas => la de incorporar
        funcionamiento ó comportamiento en el HTML.

        HTML, CSS Y JAVASCRIPT. 

            HTML => DCUMENTO
            CSS => ESTE EN OTRO DOCUMENTO
            JAVASCRIPT => O EN OTROS ...
        
        */

        

        const idBoton1 = document.querySelector("#idBoton1");

        /* esto */
        idBoton1.onclick = function()
        {
            console.log("soy el botoncito y me estan presionando 1");
        }

        /* se sobre escribió con esto */
        idBoton1.onclick = soyElClickDelboton;
        

        /* a partir del 2015 
        
        ECMA JAVASCRIPT 2015 => html5, css y javascript 
        
        */

        idBoton1.addEventListener("click",()=>{

            console.log("esta sera la respuesta 1");


        })

        idBoton1.addEventListener("click",()=>
            {
                console.log("esta sera la respuesta 1");
                console.log("esta es la respuesta 2");
            })



    })