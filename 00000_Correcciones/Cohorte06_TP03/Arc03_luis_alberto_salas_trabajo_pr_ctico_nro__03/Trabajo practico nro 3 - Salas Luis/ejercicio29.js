import {funcionDosLetrasS} from "./modelo.js"

const estadoApp = {
    palabra: "",
}

window.onload = ()=>{

    const idPalabra = document.querySelector("#idPalabra")
    const idBotonAceptar = document.querySelector("#idBotonAceptar")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idPalabra.oninput = ()=>{
        estadoApp.palabra = idPalabra.value
    }

    idBotonAceptar.onclick = ()=>{
        let verificarDosLetrasS = funcionDosLetrasS(estadoApp.palabra)
        idMostrarResultado.textContent = `El resultado es ${verificarDosLetrasS}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertir = JSON.stringify(estadoApp)
        localStorage.setItem("dosLetrasS", convertir)
    }

    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("dosLetrasS")

        if(datosRecuperados)
        {
            let datos = JSON.parse(datosRecuperados)

            estadoApp.palabra = datos.palabra

            idPalabra.value = estadoApp.palabra
        }
    }


}