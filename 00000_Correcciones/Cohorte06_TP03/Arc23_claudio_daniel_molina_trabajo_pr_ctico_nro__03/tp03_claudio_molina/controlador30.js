/* Ejercicio Nro. 30 */

import { contieneTresEspacios } from "./modelo.js";

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
        let resultado = contieneTresEspacios(cadena);
        if (resultado) {
            idResultado.textContent = `El texto contiene al menos tres espacios en blanco.`;
        } else {
            idResultado.textContent = `El texto NO contiene al menos tres espacios en blanco.`;
        }
        console.log(resultado);
    };

    idResultado.textContent = `¿El Texto contiene al menos tres espacios en blanco? ${contieneTresEspacios(idCadenaTexto.value)}`;

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
        console.log(cadenaRecuperada);
        idResultado.textContent = `¿El Texto contiene al menos tres espacios en blanco? ${contieneTresEspacios(cadenaRecuperada)}`;
    };

};

