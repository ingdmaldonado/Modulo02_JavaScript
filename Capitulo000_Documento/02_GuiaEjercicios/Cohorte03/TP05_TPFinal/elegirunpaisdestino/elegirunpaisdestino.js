
import {paises} from "../datos.js";

import {fnObtenerPaisPorId} from "../modeloPais.js";


const estadoAplicacion = 
    {
        opcionesDinamicas:'',
    }

const fnGenerarOpciones = (paises)=>
    {
       return paises.map(({id,nombrePais})=>{

            const opcionSelector = document.createElement("option");
            opcionSelector.value = id;
            opcionSelector.id = id;
            opcionSelector.textContent = nombrePais;
            return opcionSelector;
       });
    }

const fnCompletarSelector = (idSelector,opcionesDinamicas)=>
{
    opcionesDinamicas.forEach(opcion => {

        idSelector.appendChild(opcion);
    }); 
}

window.addEventListener("load",()=>
    {
        console.log("running");

        const idSelector = document.querySelector("#idSelector");
        const idBtnConfirmarViaje = document.querySelector("#idBtnConfirmarViaje");

        estadoAplicacion.opcionesDinamicas = fnGenerarOpciones(paises);

        fnCompletarSelector(idSelector,estadoAplicacion.opcionesDinamicas);


        idBtnConfirmarViaje.addEventListener("click",()=>
            {
                let idViaje = Number(idSelector.value);
                
                console.log(idViaje);

                console.log(fnObtenerPaisPorId(idViaje));
            })


        idSelector.addEventListener("change",()=>
            {

            })

        console.log(estadoAplicacion.opcionesDinamicas);

    })