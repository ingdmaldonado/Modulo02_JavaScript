import { calcularSobreTasa } from "./modelo22.js"

const estadoAplicacion = {
    importeBase: 0,
    tipo: 1
}

window.onload = () => {

    const inputImporte = document.querySelector("#importeBase")
    const selectTipo = document.querySelector("#tipoBebida")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputImporte.oninput = () => { estadoAplicacion.importeBase = inputImporte.value }
    selectTipo.onchange = () => { estadoAplicacion.tipo = selectTipo.value }

    botonCalcular.onclick = () => {
        const sobreTasa = calcularSobreTasa(estadoAplicacion.importeBase, estadoAplicacion.tipo)
        resultado.textContent = `La Sobre Tasa es: $${sobreTasa.toFixed(2)}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj22", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj22"))
        if (guardado) {
            inputImporte.value = guardado.importeBase
            selectTipo.value = guardado.tipo
            estadoAplicacion.importeBase = guardado.importeBase
            estadoAplicacion.tipo = guardado.tipo
        }
    }
}
