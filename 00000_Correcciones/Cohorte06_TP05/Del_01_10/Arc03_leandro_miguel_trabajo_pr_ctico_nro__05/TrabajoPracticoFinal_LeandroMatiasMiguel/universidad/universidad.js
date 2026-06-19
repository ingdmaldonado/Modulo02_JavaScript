import { fnRecuperarUniversidades } from "./universidadmodelo.js";
import { fnUniversidadToView,fnUniversidadesToViews,fnRender } from "./universidadvista.js";


window.onload = () => {

const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idSelectorPais = document.querySelector("#idSelectorPais");
const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");


idBtnRecuperar.onclick = async () => {

    const paisElegido = Number(idSelectorPais.value)

    console.log(paisElegido);

    const datos = await fnRecuperarUniversidades(paisElegido);

    console.log(datos);

    console.log(datos[0])

    const fila = fnUniversidadToView(datos[0])
    console.log(fila)

    const filas = fnUniversidadesToViews(datos);
    console.log(filas);
       
    fnRender(filas,idCuerpoDeTabla);
};

};
