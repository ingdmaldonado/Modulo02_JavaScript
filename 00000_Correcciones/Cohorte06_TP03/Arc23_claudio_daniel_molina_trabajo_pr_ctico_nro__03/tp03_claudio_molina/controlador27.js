/* Ejercicio Nro. 27 */

import { contarVocales } from "./modelo.js";


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
        let cantidadVocales = contarVocales(cadena);
        idResultado.textContent = `La cantidad de vocales en la cadena es: ${cantidadVocales}`;
        console.log(cantidadVocales);
    };
     
    idResultado.textContent = `La cantidad de vocales en la cadena es: ${contarVocales(idCadenaTexto.value)}`;

    idBtnGuardar.onclick = () => {
        let cadenaAGuardar = JSON.stringify(estadoAplicacion);
        localStorage.setItem("cadenaLista", cadenaAGuardar);
        console.log(cadenaAGuardar);
    };

    
    idBtnRecuperar.onclick = () => {
        let cadenaAGuardar = localStorage.getItem("cadenaLista");
        console.log(cadenaAGuardar);
        let cadenaRecuperada = JSON.parse(cadenaAGuardar);
        idCadenaTexto.value = cadenaRecuperada.cadenaTexto;
        idResultado.textContent = `La cantidad de vocales en la cadena es: ${contarVocales(cadenaRecuperada.cadenaTexto)}`;
    };

      
};