import {paises} from "./datos.js";
import {fnGenerarOpcionesDinamicas,fnAgregarOpcionesAlSelector} from "./vistaSelectorPaises.js";
import {fnChangeSelectorPais} from "./controladorSelectorPais.js";

/* aqui guardo el estado de la aplicación */


window.addEventListener("load",()=>
    {

        const idSelectorPais = document.querySelector("#idSelectorPais");
        const idBtnDatos = document.querySelector("#idBtnDatos");
        const idNombrePais = document.querySelector("#idNombrePais");
        const idCapitalPais = document.querySelector("#idCapitalPais");
        const idBanderaPais = document.querySelector("#idBanderaPais");


        const opcionesDelSelector = fnGenerarOpcionesDinamicas(paises);
        fnAgregarOpcionesAlSelector(opcionesDelSelector,idSelectorPais);

        /* cada vez que el selector cambie de valor
        guardo ese dato en el estado de la aplicacion 
        */

        idSelectorPais.addEventListener("change",fnChangeSelectorPais);
        idBtnDatos.addEventListener("click",fnChangeSelectorPais);

    })