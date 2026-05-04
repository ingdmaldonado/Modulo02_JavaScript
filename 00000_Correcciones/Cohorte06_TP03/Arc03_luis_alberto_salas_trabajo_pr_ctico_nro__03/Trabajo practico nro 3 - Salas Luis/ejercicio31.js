import {conOSinNumero} from "./modelo.js"

const estadoApp = {
    frase: "",
}

window.onload = ()=>{

    const idTexto = document.querySelector("#idTexto")
    const idBotonAceptar = document.querySelector("#idBotonAceptar")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idTexto.oninput = ()=>{
        estadoApp.frase = idTexto.value
    }

    idBotonAceptar.onclick = ()=>{
        let resultado = conOSinNumero(estadoApp.frase)
        idMostrarResultado.textContent = resultado
    }

    idBotonGuardar.onclick = ()=>{
        let convertir = JSON.stringify(estadoApp)
        localStorage.setItem("conNumeroOSinNumero", convertir)
    }

    idBotonRecuperar.onclick = ()=>{
        let recuperar = localStorage.getItem("conNumeroOSinNumero")

        if(recuperar)
        {
            let datos = JSON.parse(recuperar)

            estadoApp.frase = datos.frase
            idTexto.value = estadoApp.frase
        }
    }


}