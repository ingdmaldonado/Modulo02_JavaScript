import {fnRecuperarUniversidades} from "./universidadModelo.js";
import{fnUniversidadToView, fnUniversidadesToViews, fnRender}from"./universidadvista.js";
 
window.onload = ()=>{

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");



    idBtnRecuperar.onclick = async ()=>{

        const paisElegido = Number(idSelectorPais.value);

        console.log(paisElegido);

        const datos = await fnRecuperarUniversidades(paisElegido);

        //aquí muestro todas las universidades//
        console.log(datos);

        //aquí estoy mostrando como eligió el profesor la primer universidad del listado//
        console.log(datos[0]);

        //aquí paso solo una universidad
        const fila = fnUniversidadToView(datos [0]);
        console.log(fila);

        //ahora tomo todas las universidades y devuelvo todas las filas
        const filas = fnUniversidadesToViews (datos);
        console.log(filas);

        //invoco la función que renderiza las views
        fnRender(filas, idCuerpoDeTabla);
    };

};