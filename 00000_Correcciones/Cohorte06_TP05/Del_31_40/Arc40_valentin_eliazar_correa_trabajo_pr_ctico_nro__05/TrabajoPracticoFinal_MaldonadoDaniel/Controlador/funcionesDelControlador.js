import {fnRecuperarUniversidades, fnRecuperarUniversidadesCombinadas} from "../Modelo/funcionesDelModelo.js";
import {fnRender,fnUniversidadesToView,fnUniversidadToView} from "../Vista/funcionesDeLaVista.js"


window.onload = () =>{  

    const idButtonRecuperar = document.querySelector("#idButtonRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
    const idButtonUniCombinadas = document.querySelector("#idButtonUniCombinadas");

    idButtonUniCombinadas.onclick = async ()=>{

        const universidadesCombinadas = await fnRecuperarUniversidadesCombinadas();

        console.log(`El total de las universidades combinadas son de ${universidadesCombinadas.length}`);
    }
    

    idButtonRecuperar.onclick = async ()=>{
        //aqui saco el pais elegido
        const paisElegido = Number(idSelectorPais.value);

        console.log(paisElegido);

        const datos = await fnRecuperarUniversidades(paisElegido);

        console.log(datos);

        console.log(datos[0]);

        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        const filas = fnUniversidadesToView(datos);
        console.log(filas);

        fnRender(filas,idCuerpoDeTabla);
    };

};
