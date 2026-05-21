import { calcularTasaSubsuelo } from "./modelo24.js"

const estadoAplicacion = {
    importeBase: 0
}

window.onload = () => {

    const inputImporte = document.querySelector("#importeBase")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputImporte.oninput = () => { estadoAplicacion.importeBase = inputImporte.value }

    botonCalcular.onclick = () => {
        const tasa = calcularTasaSubsuelo(estadoAplicacion.importeBase)
        resultado.textContent = `La Tasa de Subsuelo es: $${tasa.toFixed(2)}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj24", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj24"))
        if (guardado) {
            inputImporte.value = guardado.importeBase
            estadoAplicacion.importeBase = guardado.importeBase
        }
    }
}
