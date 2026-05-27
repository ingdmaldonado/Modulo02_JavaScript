/* Ejercicio Nro. 29 */

import { contarLetrasS } from "./modelo.js";


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
        let palabra = idCadenaTexto.value;
        let resultado = contarLetrasS(palabra);
        if (resultado) {
            idResultado.textContent = `El texto contiene al menos dos letras "s".`;
        } else {
            idResultado.textContent = `El texto NO contiene al menos dos letras "s".`;
        }
        console.log(resultado);
    };

    idResultado.textContent = `¿El Texto contiene al menos dos letras "s"? ${contarLetrasS(idCadenaTexto.value)}`;

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
        idResultado.textContent = `¿El Texto contiene al menos dos letras "s"? ${contarLetrasS(cadenaRecuperada)}`;
    };

};


