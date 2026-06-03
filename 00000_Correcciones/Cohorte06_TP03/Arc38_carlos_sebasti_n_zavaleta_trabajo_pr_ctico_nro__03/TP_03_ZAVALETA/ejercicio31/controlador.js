import { fnTieneNumeros } from "./modelo.js";

const estadoAplicacion = {
    texto:""
}

window.onload = () => {
    const texto = document.querySelector("#idTexto");
    const botonCalcluar = document.querySelector("#idBtnCalcular");
    const respuesta = document.querySelector("#idRespuesta");
    const botonGuardar = document.querySelector("#idBtnGuardar");
    const botonRecuperar = document.querySelector("#idBtnRecuperar");
    
    botonCalcluar.onclick = () => {
        if (fnTieneNumeros(texto.value) === true ){
            respuesta.textContent = `El texto Tiene Números`;
        } else {
            respuesta.textContent = `El texto no contiene Números`;
        }
        estadoAplicacion.texto = texto.value;
    }

    const fnGuardarDatos = () => {
        estadoAplicacion.texto = texto.value;
        localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
    }
    const fnRecuperarDatos = () => {
        let datos;
        let recupera = localStorage.getItem("estadoApp");
        if (recupera){
            datos = JSON.parse(recupera);
            texto.value = datos.texto;
        }
    }
    botonGuardar.onclick = () => {
        fnGuardarDatos();
    }
    botonRecuperar.onclick = () => {
        fnRecuperarDatos();
    }



}