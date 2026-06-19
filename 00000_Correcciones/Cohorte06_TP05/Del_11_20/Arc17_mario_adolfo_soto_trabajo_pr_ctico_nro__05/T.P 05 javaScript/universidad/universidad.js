
import {fnRecuperarUniversidades} from "./universidadModelo.js";
import {fnUniversidadToView,fnUniversidadesToViews,fnRender} from "./universidadvista.js"

window.onload = ()=>{

    const idBtonRecuperar = document.querySelector("#idBtonRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");


    idBtonRecuperar.onclick = async ()=>{
        const paisElegido = Number(idSelectorPais.value);
        console.log(paisElegido);
         
       const datos =await fnRecuperarUniversidades (paisElegido);
       console.log(datos);

       const fila = fnUniversidadToView(datos[0]); 
       console.log(fila)

       const filas = fnUniversidadesToViews (datos);
       console.log(filas);

       fnRender (filas,idCuerpoDeTabla);

    };


 
};