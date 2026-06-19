
import {fnRecuperarUniversidades} from "./universidadModelo.js";

import { fnUniversidadToView, fnUniversidadesToViews, fnRender } from "./universidadVista.js";

/* ahora comenzamos a trabajar con las funcuiones de la vista 

    similar a generar un componente con React

*/



window.onload = ()=>{

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

    // aqui es cuando estoy haciendo click en el boton recuperar

    idBtnRecuperar.onclick = async ()=>{

        // aqui saco el pais elegido
        const paisElegido = Number(idSelectorPais.value);

        console.log(paisElegido);

        // esto me devuelve un listado de universidades 
        const datos = await fnRecuperarUniversidades(paisElegido);

        //  aqui estopy mostrando todas las unviersidades
        console.log(datos);

        // aqui le estoy diciendo que me muestre la primera unviersidad del listado
        console.log(datos[0]);

        // aqui estoy pasando solo una universidad
        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        // aqui estoy pasando todas las universidades y devolviendolas en filas
        const filas = fnUniversidadesToViews(datos);
        console.log(filas);

        // ahora lo unico que me falta, es invocar a la función que renderiza las views
        fnRender(filas, idCuerpoDeTabla);


    }

}


/*
    reglas

    modelo.js -> habla con el servidor (api.js)

    vista.js -> habla con el DOM

    controlador.js -> habla con el modelo y con la vista, 
                        nunca directamente con el servidor
*/