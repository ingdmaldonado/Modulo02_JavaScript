import {letrasS} from "./modelo.js"

const estadoAplicacion = {
    palabra: "",
}

window.onload = () => {

    const idPalabra = document.querySelector("#idPalabra")
    const btnCalcular = document.querySelector("#btnCalcular")
    const idmostrar = document.querySelector("#idmostrar")
    const btnGuardar = document.querySelector("#btnGuardar")
    const btnRecuperar = document.querySelector("#btnRecuperar")

    idPalabra.oninput = () => {

        estadoAplicacion.palabra = (idPalabra.value) 
    }

    btnCalcular.onclick = () => {

        let resultado = letrasS(estadoAplicacion.palabra)
        idmostrar.textContent = `en la palabras hay: ${resultado}`
    }

    btnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("contadorLetrasS", datosJSON)
    }

    btnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("contadorLetrasS")

        if(datosJSON){
            let datosRecuperados = JSON.parse(datosJSON)
            estadoAplicacion.palabra = datosRecuperados.palabra
            idPalabra.value = estadoAplicacion.palabra
        }
    }
}