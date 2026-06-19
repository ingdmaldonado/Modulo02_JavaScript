import {fnRecuperarUniversidades} from "./universidadModelo.js";
import{fnUniversidadToView, fnuniversidadesToViews, fnRender} from "./universidadVista.js"

window.onload = ()=>{

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");


    // aqui es cuando estoy haciendo click en el boton recuperar
    idBtnRecuperar.onclick = async ()=>{

        // aqui saco un pais elegido
        const paisElegido = Number(idSelectorPais.value);

        console.log(paisElegido);

        // esto me devuelve un listado de universidades
        const datos = await fnRecuperarUniversidades (paisElegido);

        // aqui estoy mostrando todas las universidades
        console.log(datos);

        // aqui estoy diciendo que me muestre la primera universidad del listado
        console.log(datos[0]);

        // aqui estoy pasando solo una universidad
        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        // aqui estoy pasando todas las universidades y devolviendolas en filas
        const filas = fnuniversidadesToViews (datos);
        console.log(filas);

        // ahora lo unico que me falta es invocar a la funcion que renderiza las views
        fnRender(filas, idCuerpoDeTabla);

    };

};