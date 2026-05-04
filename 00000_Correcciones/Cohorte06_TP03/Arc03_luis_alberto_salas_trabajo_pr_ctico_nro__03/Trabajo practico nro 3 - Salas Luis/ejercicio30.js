import {funcionTresEspaciosBlanco} from "./modelo.js"

const estadoApp = {
    cadenaTexto: "",
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
        let resultado = funcionTresEspaciosBlanco(estadoApp.cadenaTexto)
        idMostrarResultado.textContent = `El resultado es ${resultado}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertir = JSON.stringify(estadoApp)
        localStorage.setItem("espaciosEnBlanco", convertir)
    }

    idBotonRecuperar.onclick = ()=>{
        let recuperar = localStorage.getItem("espaciosEnBlanco")

        if(recuperar)
        {
            let objeto = JSON.parse(recuperar)

            estadoApp.cadenaTexto = objeto.cadenaTexto

            idTexto.value = estadoApp.cadenaTexto
        }
    }
    
}