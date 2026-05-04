import {funcionCantidadConsonantes} from "./modelo.js"

const estadoApp = {
    cadenaDeTexto: "",
}

window.onload = ()=>{

    const idTexto = document.querySelector("#idTexto")
    const idBotonAceptar = document.querySelector("#idBotonAceptar")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idTexto.oninput = ()=>{
        estadoApp.cadenaDeTexto = idTexto.value
    }

    idBotonAceptar.onclick = ()=>{
        let resultado = funcionCantidadConsonantes(estadoApp.cadenaDeTexto)

        idMostrarResultado.textContent = `La cantidad de consonantes es: ${resultado}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertir = JSON.stringify(estadoApp)
        localStorage.setItem("cantidadConsonantes", convertir)
    }

    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("cantidadConsonantes")

        if(datosRecuperados)
        {
            let datosObjeto = JSON.parse(datosRecuperados)

            estadoApp.cadenaDeTexto = datosObjeto.cadenaDeTexto

            idTexto.value = estadoApp.cadenaDeTexto
        }
    }

}