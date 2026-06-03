/* Ejercicio 21 */

import { calificacion } from "./modelo.js";

console.log(` La calificación es ${calificacion(7)}`);


const estadoAplicacion = {
    nota: 0
}


window.onload = () => {
    const nota = document.querySelector("#idNota");
    const botonMensaje = document.querySelector("#idBtnMensaje");
    const mensaje = document.querySelector("#idMensaje");
    const guardarEstado = document.querySelector("#idBtnGuardarEstado");
    const recuperarEstado = document.querySelector("#idBtnRecuperarEstado");

    const fnGuardarEstado = () => {
        let estadoApp = JSON.stringify(estadoAplicacion);
        localStorage.setItem("estadoApp",estadoApp);
    }


    const fnRecuperarEstado = () => {
        let datos;
        let recupera = localStorage.getItem("estadoApp");
        if (recupera){
            datos = JSON.parse(datosRecuperados);
            nota.value = datos.nota;
        }
    }

    botonMensaje.onclick = () => {
        mensaje.textContent = calificacion(nota.value);
    }

    guardarEstado.onclick = () => {
        fnGuardarEstado();
    }
    recuperarEstado.onclick = () => {
        fnRecuperarEstado();
    }

}

