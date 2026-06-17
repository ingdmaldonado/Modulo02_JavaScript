import {paises} from "./modelo.js";
import {fnGenerarItems,fnRenderizarItems} from "./vista.js";

window.onload = ()=>{

    const idBtnEjemplo01 = document.querySelector("#idBtnEjemplo01");
    const idListaOrdenada = document.querySelector("#idListaOrdenada");
    const idListaDesornedada = document.querySelector("#idListaDesornedada");

    //console.log(paises);

    idBtnEjemplo01.onclick = ()=>{

        console.log("aqui deberia renderizar");

        /* (1ro) map => aplica sobre cada item una función
        de transformación me devuelve un vector */

        const listaPaisesEnItems = fnGenerarItems(paises);

        /* (2do) Invoco la función que se encarga
        de tomar la salida de la función anterior y 
        renderizarla en el DOM. */

        fnRenderizarItems(listaPaisesEnItems,idListaOrdenada);
        
        fnRenderizarItems(listaPaisesEnItems,idListaDesornedada);
        

    };

};

/* 
    PATRON DE DISEÑO MODELO VISTA CONTROLADOR


    VISTA => HTML(estatico) + CSS + Tailwind

        + ALGO NUEVO

            Todo codigo que genera elementos
            en el DOM, y los renderiza es
            parte de la vista.




    MODELO => DATOS (vectores)
                + 
            funciones que recuperan datos desde APIs.

                esas APIS => devuelven datos en formato JSON => convertirlos a vectores
                u objetos

                +

            funciones especificas de calculo.

    CONTROLADOR => MANEJO DE EVENTOS DEL DOM






*/