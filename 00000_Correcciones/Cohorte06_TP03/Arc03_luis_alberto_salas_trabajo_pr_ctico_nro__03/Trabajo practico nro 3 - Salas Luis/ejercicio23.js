import {calcularImporteAgua} from "./modelo.js"

const estadoApp = {
    metrosCubicos: 0,
}

window.onload = ()=>{

    const idMetrosCubicos = document.querySelector("#idMetrosCubicos")
    const idBotonCalcular = document.querySelector("#idBotonCalcular")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const IdMostrarResultado = document.querySelector("#IdMostrarResultado")

    idMetrosCubicos.oninput = ()=>{
        estadoApp.metrosCubicos = Number(idMetrosCubicos.value)
    }

    idBotonCalcular.onclick = ()=>{
        let resultado = calcularImporteAgua(estadoApp.metrosCubicos)
        IdMostrarResultado.textContent = `Total a pagar: $${resultado}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertir = JSON.stringify(estadoApp)
        localStorage.setItem("consumoAgua", convertir)
    }

    idBotonRecuperar.onclick = ()=>{
        let recuperar = localStorage.getItem("consumoAgua")

        if(recuperar)
        {
            let objeto = JSON.parse(recuperar)

            estadoApp.metrosCubicos = objeto.metrosCubicos
            idMetrosCubicos.value = estadoApp.metrosCubicos
        }
    }


}