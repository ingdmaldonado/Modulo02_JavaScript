import { calcularDosisInsulina } from "./modelo26.js"

const estadoAplicacion = {
    glucosa: 0,
    peso: 0,
    tipoDiabetes: "1"
}

window.onload = () => {

    const inputGlucosa = document.querySelector("#glucosa")
    const inputPeso = document.querySelector("#peso")
    const selectTipo = document.querySelector("#tipoDiabetes")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputGlucosa.oninput = () => { estadoAplicacion.glucosa = inputGlucosa.value }
    inputPeso.oninput = () => { estadoAplicacion.peso = inputPeso.value }
    selectTipo.onchange = () => { estadoAplicacion.tipoDiabetes = selectTipo.value }

    botonCalcular.onclick = () => {
        const dosis = calcularDosisInsulina(estadoAplicacion.glucosa, estadoAplicacion.peso, estadoAplicacion.tipoDiabetes)
        resultado.textContent = `La dosis de insulina recomendada es: ${dosis} unidades`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj26", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj26"))
        if (guardado) {
            inputGlucosa.value = guardado.glucosa
            inputPeso.value = guardado.peso
            selectTipo.value = guardado.tipoDiabetes
            estadoAplicacion.glucosa = guardado.glucosa
            estadoAplicacion.peso = guardado.peso
            estadoAplicacion.tipoDiabetes = guardado.tipoDiabetes
        }
    }
}
