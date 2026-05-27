/* Ejercicio Nro. 31 */


import { noContieneDigitos } from "./modelo.js";

window.onload = () => {
    console.log(`la aplicación corriendo`);

  const estadoAplicacion = {
        cadenaTexto: ""
    };

    const idCadenaTexto = document.querySelector("#idCadenaTexto");
    const idBtnVerificar = document.querySelector("#idBtnVerificar");
    const idResultado = document.querySelector("#idResultado");
    
    idCadenaTexto.oninput = () => {
        estadoAplicacion.cadenaTexto = idCadenaTexto.value;
        console.log(estadoAplicacion);
    };

    idBtnVerificar.onclick = () => {
        let cadena = idCadenaTexto.value;
        let resultado = noContieneDigitos(cadena);
        if (resultado) {
            idResultado.textContent = `La cadena no contiene al menos un dígito numérico.`;
        } else {
            idResultado.textContent = `La cadena contiene dígitos numéricos.`;
        }
        console.log(resultado);    
    };
    idResultado.textContent = `¿La cadena no contiene dígitos numéricos? ${noContieneDigitos(idCadenaTexto.value)}`;
    
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
        idResultado.textContent = `¿La cadena no contiene dígitos numéricos? ${noContieneDigitos(cadenaRecuperada)}`;
    };
    
};



    


