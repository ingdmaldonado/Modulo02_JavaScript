
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



/* =========================================================
   INCISO A — Destructuring dentro de la función callback
   Ejemplo didáctico previo: */

   const paisEjemplo1 = {
       name: { common: "País Demo" },
       population: 123456,      
       flags: { png: "https://ejemplo.com/bandera.png" }
   };
   const { name, capital = ["Sin dato"], population, flags } = paisEjemplo1;

   console.log(name.common)
   console.log(capital);
   console.log(population);
   console.log(flags);

  /* ========================================================= */


  
/* =========================================================
   INCISO B — Destructuring con alias
   Ejemplo didáctico previo: */
   const paisEjemplo2 = {
       name: { common: "País Alias" },
       capital: ["Capital Demo"],
       population: 999999,
       flags: { png: "https://ejemplo.com/bandera.png" }
   };
   const { name: nombre, capital: cap, population: poblacion, flags: bandera } = paisEjemplo2;
  
   console.log(nombre);
   console.log(cap);
   console.log(poblacion);
   console.log(bandera);


  /* ========================================================= */

  function mostrarPais({ name, capital, population, flags }) 
  {
    console.log("----- dentro de la funcion ------");
    console.log(name.common);
    console.log(capital[0]);
    console.log(population);
    console.log(flags.png);       
   }

   mostrarPais(paisEjemplo1);

   mostrarPais(paisEjemplo2);