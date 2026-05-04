import {cantidadVocales} from "./modelo.js"

const estadoApp = {
    cadenaTexto : "",
}

window.onload = ()=>{

    const idTexto = document.querySelector("#idTexto")
    const idBotonAceptar = document.querySelector("#idBotonAceptar")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idTexto.oninput = ()=>{
        estadoApp.cadenaTexto = idTexto.value
    }

    idBotonAceptar.onclick = ()=>{
        let resultado = cantidadVocales(estadoApp.cadenaTexto)

        idMostrarResultado.textContent = `La cantidad de vocales es de: ${resultado}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertirDatos = JSON.stringify(estadoApp)
        localStorage.setItem("cantidadVocales", convertirDatos)
    }

    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("cantidadVocales")

        if(datosRecuperados)
        {
            let datos = JSON.parse(datosRecuperados)

            estadoApp.cadenaTexto = datos.cadenaTexto

            idTexto.value = estadoApp.cadenaTexto
        }
    }



}