import {recuperarUniversidades} from "./universidadModel.js"
 import { universidadToView,universidadesToviews,render } from "./universidadVista.js";   
window.onload = ()=> {

const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idSelectPais = document.querySelector("#idSelectPais");
const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
idBtnRecuperar.onclick = async () =>{

    const paisElegido = Number(idSelectPais.value);

    console.log (paisElegido);
    const datos = await recuperarUniversidades(paisElegido);

    console.log(datos);

    console.log(datos[0]);

   const fila = universidadToView(datos[0]);

    console.log(fila);
   
    const filas = universidadesToviews(datos);
    console.log(filas);

    /*invocar a la funcion que renderiza las views*/
    render(filas,idCuerpoDeTabla);
};

};