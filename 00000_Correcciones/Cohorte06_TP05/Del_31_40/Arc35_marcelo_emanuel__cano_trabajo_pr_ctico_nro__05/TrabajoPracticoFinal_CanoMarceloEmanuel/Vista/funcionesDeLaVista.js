import {fnObtenerPaises,fnPunto02IncisoA,fnPunto02IncisoB,fnPunto02IncisoC,fnPunto03IncisoE,fnPunto03IncisoF,fnPaisToViews,fnRenderPais,fnPunto05IncisoG} from "../Controlador/funcincionesDelControlador.js";

window.onload = () => {

    
    const boton = document.querySelector("#idBtnRecuperar");
    const idSelectorContinente = document.querySelector("#idSelectorContinente");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla"); 
    
    
    boton.onclick = async () => {
    
        console.log(idSelectorContinente.value);
        let todoPaises = await fnObtenerPaises(idSelectorContinente.value);

       // fnPunto02IncisoA(todoPaises);
       // fnPunto02IncisoB(todoPaises);
       // fnPunto02IncisoC(todoPaises);

       let todoPaises1 = await fnObtenerPaises('europe');
       //let todoPaises2 = await fnObtenerPaises("africa");
       //fnPunto03IncisoE(todoPaises,todoPaises1);
       
       fnPunto03IncisoF(todoPaises)

       fnPunto05IncisoG();

       const filas = await fnPaisToViews(todoPaises); // PAso todas los paises
       console.log(filas);

        /** Ahora se invoca la funcion que renderiza las views */
        fnRenderPais(filas,idCuerpoDeTabla);
     
    };

    
    
};