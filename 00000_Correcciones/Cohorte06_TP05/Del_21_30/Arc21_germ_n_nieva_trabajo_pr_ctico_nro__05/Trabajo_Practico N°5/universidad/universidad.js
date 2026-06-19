// EL OBJETIVO DE ESTA FUNCION ES CONECTAR A UN ENDPOINT DE UNA API 

// UNA API ES UN CONJUNTO DE TODOS LOS ENDPOINT QUE EXPONE UNA EMPRESA, ORGANIZACION EN LA WEB, HAY ENDPOINTS INTERNOS Y EXTERNOS

import { fnRequestAPI } from "../api.js";
import { fnRecuperarUniversidades } from "./universidadModelo.js";
import { fnUniversidadToView,fnUniversidadestoviews,fnRender} from "./universidadVista.js";

window.onload = ()=> {
    const idbtnRecuperar = document.querySelector("#idbtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla")

    idbtnRecuperar.onclick = async ()=>{

        const paisElegido = Number(idSelectorPais.value);
        console.log(paisElegido);

        const datos= await fnRecuperarUniversidades(paisElegido);

        console.log(datos)

        const filas = fnUniversidadestoviews(datos); 
        console.log(filas);

        fnRender(filas,idCuerpoDeTabla);
        
    }


}

// reglas 
//  el modelo habla con el servidor
//  vista habla con el dom
//  controlador.js habla con el modelo y con la vista


