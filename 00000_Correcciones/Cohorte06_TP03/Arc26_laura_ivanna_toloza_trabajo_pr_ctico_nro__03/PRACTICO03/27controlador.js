/*Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número. */

import {contarVocales} from "./27modelo.js";

window.onload = ()=>{

    const estadoAplicacion = {
        texto:"",
        cantidadVocales:0,
    };

    const idTexto = document.querySelector("#idTexto");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    idTexto.oninput = ()=>{
        estadoAplicacion.texto = idTexto.value;
    };

    idBtnCalcular.onclick = ()=>{
        const resultado = contarVocales(estadoAplicacion.texto);
        estadoAplicacion.cantidadVocales = resultado;
        idResultado.textContent = `Cantidad de vocales: ${resultado}`;
    };

    idBtnGuardar.onclick = ()=>{
        let datosJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datosAPP", datosJSON);
    };

    idBtnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem("datosAPP");
        let datosObjeto = JSON.parse(datosJSON);

        estadoAplicacion.texto = datosObjeto.texto;
        estadoAplicacion.cantidadVocales = datosObjeto.cantidadVocales;

        idTexto.value = estadoAplicacion.texto;
        idResultado.textContent = `Cantidad de vocales: ${estadoAplicacion.cantidadVocales}`;
    };
};

