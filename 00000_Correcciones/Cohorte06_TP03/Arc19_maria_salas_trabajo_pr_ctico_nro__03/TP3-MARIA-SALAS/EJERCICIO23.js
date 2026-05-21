import {calcularImporteAgua} from "./modelo.js"

const estadoAplicacion = {

    metrosCubicos:0,
}

window.onload = () => {

    const idMetrosCubicos = document.querySelector("#idMetrosCubicos")
    const idCalcular = document.querySelector("#idCalcular")
    const idResultado = document.querySelector("#idResultado")
    const btnGuardar = document.querySelector("#btnGuardar")
    const btnRecuperar = document.querySelector("#btnRecuperar")

    idMetrosCubicos.oninput = () => {
        estadoAplicacion.metrosCubicos = (idMetrosCubicos.value)
    }

    idCalcular.onclick = () => {

        let resultado = calcularImporteAgua(estadoAplicacion.metrosCubicos)
        idResultado.textContent = `el importe final es: $${resultado}`
    }

    btnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("importeAgua", datosJSON)
    }

    btnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("importeAgua")

        if(datosJSON){

            let datosRecuperados = JSON.parse(datosJSON)
            estadoAplicacion.metrosCubicos = datosRecuperados.metrosCubicos
            idMetrosCubicos.value = estadoAplicacion.metrosCubicos
        }
    }
}