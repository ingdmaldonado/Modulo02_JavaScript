
//import {paises} from "./datos.js";
import {fnObtenerTodosLosPaises,fnObtenerPaisPorId} from "./modeloPais.js";
import {fnCompletarSelelector} from "./vistaPais.js";


window.addEventListener("load",()=>
    {
        const idSelectorPais = document.querySelector("#idSelectorPais");   
        const idBtnPaisElegido = document.querySelector("#idBtnPaisElegido");

        const paises = fnObtenerTodosLosPaises();
        console.log(paises);  
        
        const contenedor = document.querySelector("#idContenedorPaises");
        
        
        fnCompletarSelelector(paises,idSelectorPais);

        idBtnPaisElegido.addEventListener("click",()=>
        {
            // esta función sale del modeloPais.js //
            const paisElegido = fnObtenerPaisPorId(parseInt(idSelectorPais.value));
            console.log(paisElegido);        
        });     


        paises.forEach(({ nombrePais, bandera }) => {
            const divPais = document.createElement("div");
        
            const nombre = document.createElement("p");
            nombre.textContent = nombrePais;
        
            const img = document.createElement("img");
            img.src = bandera;
            img.alt = `Bandera de ${nombrePais}`;
            img.width = 80;
        
            divPais.appendChild(nombre);
            divPais.appendChild(img);
        
            contenedor.appendChild(divPais);
          });

    })