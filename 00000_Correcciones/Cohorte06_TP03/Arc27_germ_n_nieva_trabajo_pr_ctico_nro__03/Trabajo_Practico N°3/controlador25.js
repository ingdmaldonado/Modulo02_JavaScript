import { calcularTasaENRE } from "./modelo25.js"

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
        const tasa = calcularTasaENRE(estadoAplicacion.importeBase)
        resultado.textContent = `La Tasa de Fiscalización ENRE es: $${tasa.toFixed(2)}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj25", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj25"))
        if (guardado) {
            inputImporte.value = guardado.importeBase
            estadoAplicacion.importeBase = guardado.importeBase
        }
    }
}
