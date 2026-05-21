import {calcularSobreTasa} from "./modelo.js"

const estadoAplicacion = {
    importeCompra:0,
    tipoBebida:0,
}

window.onload = () => {

    const idImporteBebida = document.querySelector("#idImporteBebida")
    const idTipoDeBebida = document.querySelector("#idTipoDeBebida")
    const btnCalcular = document.querySelector("#btnCalcular")
    const idResultado = document.querySelector("#idResultado")

    idImporteBebida.oninput = () => {

        estadoAplicacion.importeCompra = (idImporteBebida.value)
    }

    idTipoDeBebida.oninput = () => {

        estadoAplicacion.tipoBebida = (idTipoDeBebida.value)
    }

    btnCalcular.onclick = () => {

        let resultado = calcularSobreTasa(estadoAplicacion.tipoBebida, estadoAplicacion.importeCompra)
        idResultado.textContent = `el valor final es: ${resultado}`
    }
}