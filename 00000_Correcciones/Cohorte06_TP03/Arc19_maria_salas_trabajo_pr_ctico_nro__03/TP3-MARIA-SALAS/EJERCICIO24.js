import {tasaDeSubsuelo} from "./modelo.js"

const estadoAplicacion = {

    importeBase:0,
}

window.onload = () => {

    const idImporteBase = document.querySelector("#idImporteBase")
    const btnCalcular = document.querySelector("#btnCalcular")
    const idMostrarTasa = document.querySelector("#idMostrarTasa")
    const btnGuardar = document.querySelector("#btnGuardar")
    const btnRecuperar = document.querySelector("#btnRecuperar")

    idImporteBase.oninput = () => {

        estadoAplicacion.importeBase = Number(idImporteBase.value)
    }

    btnCalcular.onclick = () => {
        let resultado = tasaDeSubsuelo(estadoAplicacion.importeBase)
        idMostrarTasa.textContent = `el importe total es: ${resultado}`

    }

    btnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("calculoSub", datosJSON)
    }

    btnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("calculoSub")

        if(datosJSON){

            let datosRecuperados = JSON.parse(datosJSON)

            estadoAplicacion.importeBase = datosRecuperados.importeBase

            idImporteBase.value = estadoAplicacion.importeBase
        }

    }
}