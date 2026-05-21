/* Ejercicio Nro. 28*/

import { contarConsonantes } from "./modelo.js";

window.onload = () => {
    console.log(`la aplicación corriendo`);
    const estadoAplicacion = {
        cadenaTexto: ""
    };
    const idCadenaTexto = document.querySelector("#idCadenaTexto");
    const idBtnContar = document.querySelector("#idBtnContar");
    const idResultado = document.querySelector("#idResultado");
    
    idCadenaTexto.oninput = () => {
        estadoAplicacion.cadenaTexto = idCadenaTexto.value;
        console.log(estadoAplicacion);
    };

    idBtnContar.onclick = () => {
        let cadena = idCadenaTexto.value;
        let cantidadConsonantes = contarConsonantes(cadena);
        idResultado.textContent = `La cantidad de consonantes en la cadena es: ${cantidadConsonantes}`;
        console.log(cantidadConsonantes);
    };

    idResultado.textContent = `La cantidad de consonantes en la cadena es: ${contarConsonantes(idCadenaTexto.value)}`;

    idBtnGuardar.onclick = () => {
        let cadenaAGuardar = JSON.stringify(estadoAplicacion.cadenaTexto);
        localStorage.setItem("cadenaLista", cadenaAGuardar);
        console.log(cadenaAGuardar);
    };

    idBtnRecuperar.onclick = () => {
        let cadenaAGuardar = localStorage.getItem("cadenaLista");
        console.log(cadenaAGuardar);
        let cadenaRecuperada = JSON.parse(cadenaAGuardar);
        idCadenaTexto.value = cadenaRecuperada;
        idResultado.textContent = `La cantidad de consonantes en la cadena es: ${contarConsonantes(cadenaRecuperada)}`;
    };


};
