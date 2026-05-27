import {contadorVocales} from "./modelo.js"

const estadoAplicacion = {

    texto:""
}

window.onload = () => {

    const idTexto = document.querySelector("#idTexto")
    const btnVocales = document.querySelector("#btnVocales")
    const idMostrar = document.querySelector("#idMostrar")
    const idGuardar = document.querySelector("#idGuardar")
    const idRecuperar = document.querySelector("#idRecuperar")

    idTexto.oninput = () => {

        estadoAplicacion.texto = (idTexto.value)
    }

    btnVocales.onclick = () => {

        let resultado = contadorVocales(estadoAplicacion.texto)
        idMostrar.textContent = `la cantidad de vocales contadas en el texto es: ${resultado}`
    }

    idGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("contadorDeVocales", datosJSON)
    }
    
    idRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("contadorDeVocales")
        
        if(datosJSON){
            let datosRecuperados = JSON.parse(datosJSON)

            estadoAplicacion.texto = datosRecuperados.texto
            idTexto.value = estadoAplicacion.texto
        }
    }
}