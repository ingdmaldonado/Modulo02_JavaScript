
import {fnClickEnBotonRecuperarPaises} from "./controlador/funcionesdelcontrolador.js";
import {fnRenderizarPaises,fnRenderizarPaises2,fnRenderizarPaises3} from "./vista/funcionesDeLaVista.js";


/* cuantas veces se carga el load en la pagina ? */

/* el segundo parametro que recibe load como se llama
generalmente ?. función callBack */




window.addEventListener("load",()=>
{
    const idBtnRecuperarPaises = document.querySelector("#idBtnRecuperarPaises");

    console.log(idBtnRecuperarPaises);

    /* porque uso addEventListener ?. en lugar de famoso onclick 
    
        es para que se puedan delegar con el mismo evento
        varias funciones

        click => funcion1
        click => funcion2

        El segundo parametro como le decimos. una funcion
        callBack

        delegacion de eventos

        click => funcion

    */


    /* funciones callBack que tienen nombre
    y hay funciones callBack que no tienen nombre => anónimas 
    */

    idBtnRecuperarPaises.addEventListener("click",async ()=>{

        let datos = await fnClickEnBotonRecuperarPaises("https://restcountries.com/v3.1/region/africa");

        if(datos.ok)
        {
            console.log(datos.resultado);

            //fnRenderizarPaises(datos.resultado);
        
            //fnRenderizarPaises2(datos.resultado);

            fnRenderizarPaises3(datos.resultado);

        }

        else
        {
            console.log(datos.statusText);
        }


    });

   
})


