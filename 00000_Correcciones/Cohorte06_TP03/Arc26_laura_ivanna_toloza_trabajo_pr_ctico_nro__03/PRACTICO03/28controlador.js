/* Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). 
Es decir consideramos consonante a todo carácter que NO SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número. */

// Importar función

import {contarConsonantes} from "./28modelo.js";


window.onload = ()=>{

    const estadoAplicacion = {
        texto:"",
        cantidadConsonantes:0,
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
        const resultado = contarConsonantes(estadoAplicacion.texto);
        estadoAplicacion.cantidadConsonantes = resultado;
        idResultado.textContent = `Cantidad de consonantes: ${resultado}`;
    };

    idBtnGuardar.onclick = ()=>{
        let datosJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datosAPP", datosJSON);
    };

    idBtnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem("datosAPP");

        let datosObjeto = JSON.parse(datosJSON);
        estadoAplicacion.texto = datosObjeto.texto;
        estadoAplicacion.cantidadConsonantes = datosObjeto.cantidadConsonantes;
        idTexto.value = estadoAplicacion.texto;
        idResultado.textContent = `Cantidad de consonantes: ${estadoAplicacion.cantidadConsonantes}`;
    };
};
