import {tresEspacios} from "./modelo.js"

const estadoAplicacion = {

    cadena:"",
}

window.onload = () => {

    const idCadena = document.querySelector("#idCadena")
    const btnCalcular = document.querySelector("#btnCalcular")
    const btnGuardar = document.querySelector("#btnGuardar")
    const btnRecuperar = document.querySelector("#btnRecuperar")
    const idMostrar = document.querySelector("#idMostrar")

    idCadena.oninput = () => {

        estadoAplicacion.cadena = (idCadena.value)
    }

    btnCalcular.onclick = () => {

        let resultado = tresEspacios(estadoAplicacion.cadena)
        idMostrar.textContent = `la frase contiene ${resultado} espacios`
    }

    btnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("espacios", datosJSON)
    }

    btnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("espacios")

        if(datosJSON){

            let datosRecuperados = JSON.parse(datosJSON)
            estadoAplicacion.cadena = datosRecuperados.cadena
            idCadena.value = estadoAplicacion.cadena
        }
    }
}