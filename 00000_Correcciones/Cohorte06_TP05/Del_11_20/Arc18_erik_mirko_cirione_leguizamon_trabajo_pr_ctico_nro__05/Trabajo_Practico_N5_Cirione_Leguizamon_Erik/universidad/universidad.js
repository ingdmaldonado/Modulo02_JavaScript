
import { fnRecuperarUniversidades } from "./universidadModelo.js";

import { fnRender, fnUniversdadToView, fnUnniversiidadesToView } from "./universidadVista.js";


window.onload= ()=> {

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector ("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

    idBtnRecuperar.onclick = async ()=> {

        console.log ('Recuperando Universidades');

        const paisElegido = Number (idSelectorPais.value);

        console.log (paisElegido);

        const datosRecuperados = await fnRecuperarUniversidades (paisElegido);

        console.log (datosRecuperados);

        const fila = fnUniversdadToView (datosRecuperados[0]);

        console.log (fila);

        const filas = fnUnniversiidadesToView (datosRecuperados);
        console.log (filas);

        fnRender (filas, idCuerpoDeTabla);
    }

};