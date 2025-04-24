
//import {paises} from "./datos.js";
import {fnObtenerTodosLosPaises,fnObtenerPaisPorId} from "./modeloPais.js";
import {fnCompletarSelelector} from "./vistaPais.js";


window.addEventListener("load",()=>
    {
        const idSelectorPais = document.querySelector("#idSelectorPais");   
        const idBtnPaisElegido = document.querySelector("#idBtnPaisElegido");

        const paises = fnObtenerTodosLosPaises();
        console.log(paises);        
        
        
        fnCompletarSelelector(paises,idSelectorPais);

        idBtnPaisElegido.addEventListener("click",()=>
        {
            // esta función sale del modeloPais.js //
            const paisElegido = fnObtenerPaisPorId(parseInt(idSelectorPais.value));
            console.log(paisElegido);        
        });     
    })