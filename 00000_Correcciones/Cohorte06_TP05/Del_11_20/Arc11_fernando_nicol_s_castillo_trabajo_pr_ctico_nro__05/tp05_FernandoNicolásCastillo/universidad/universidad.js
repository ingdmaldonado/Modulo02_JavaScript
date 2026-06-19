import {fnRecuperarUniversidades} from "./universidadModelo.js";
import { fnUniversidadToView,fnUniversidadesToView,fnRender} from "./universidadvista.js"; "./universidadVista.js";


window.onload = ()=>{
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const ididSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

    idBtnRecuperar.onclick = async ()=>{

        /*saco el país elegido*/
        const paisElegido = Number(idSelectorPais.value);
        console.log(paisElegido);

        /*me devuelve un listado de universidades*/
        const datos = await fnRecuperarUniversidades (paisElegido);

        /*muestro todas las universidades*/
        console.log(datos);

        /*Aquí le paso 1 sola universidad*/
        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        /*Aquí le paso todas las universidades y devolviendolas en filas*/
        const filas = fnUniversidadesToView(datos);
        console.log(filas);

    /* Lo único que falta es invocar a la función que renderiza las views*/

        fnRender(filas,idCuerpoDeTabla);
    };
}