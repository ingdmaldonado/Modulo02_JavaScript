import {funcionMensajeNota} from "./modelo.js"

const estadoApp = {
    notaIngresada:0,
}

window.onload = ()=>{

    const idNotaIngresada = document.querySelector("#idNotaIngresada")
    const idBotonMostrar = document.querySelector("#idBotonMostrar")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idNotaIngresada.oninput = ()=>{
        estadoApp.notaIngresada = Number(idNotaIngresada.value)
        console.log(estadoApp)
    }
    
    idBotonMostrar.onclick = ()=>{
        let resultado = funcionMensajeNota(estadoApp.notaIngresada)
        idMostrarResultado.textContent = `${resultado}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertirDatos = JSON.stringify(estadoApp)
        localStorage.setItem("mensajeNota", convertirDatos)
    }

    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("mensajeNota")
        if(datosRecuperados)
        {
            let datos = JSON.parse(datosRecuperados)

            estadoApp.notaIngresada = datos.notaIngresada
            idNotaIngresada.value = estadoApp.notaIngresada
        }
    }


    
}