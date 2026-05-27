import {servicioAgua} from "./modelo.js"

const estadoAplicacion = {

    importeBase: 0,
}

window.onload = () => {

    const idImporteBase = document.querySelector("#idImporteBase")
    const btnCalcular = document.querySelector("#btnCalcular")
    const idMostrar = document.querySelector("#idMostrar")
    const idGuardar = document.querySelector("#idGuardar")
    const idRecuperar = document.querySelector("#idRecuperar")

    idImporteBase.oninput = () => {

        estadoAplicacion.importeBase = Number(idImporteBase.value)
    }

    btnCalcular.onclick = () => {

        let resultado = servicioAgua(estadoAplicacion.importeBase)
        idMostrar.textContent = `el monto final a pagar es de: ${resultado}`
    }

    idGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion.importeBase)
        localStorage.setItem("facturaImpuesto", datosJSON)
    }

    idRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("facturaImpuesto")

        if(datosJSON){

            let datosRecuperados = JSON.parse(datosJSON)

            estadoAplicacion.importeBase = datosRecuperados
            idImporteBase.value = estadoAplicacion.importeBase
        }
    }
}