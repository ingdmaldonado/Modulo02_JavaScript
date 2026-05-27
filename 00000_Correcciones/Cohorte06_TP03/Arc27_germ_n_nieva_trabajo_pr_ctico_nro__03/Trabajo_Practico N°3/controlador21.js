import { obtenerCalificacion } from "./modelo21.js"

const estadoAplicacion = {
    promedio: 0
}

window.onload = () => {

    const inputPromedio = document.querySelector("#promedio")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputPromedio.oninput = () => { estadoAplicacion.promedio = inputPromedio.value }

    botonCalcular.onclick = () => {
        const calificacion = obtenerCalificacion(estadoAplicacion.promedio)
        resultado.textContent = `La calificación es: ${calificacion}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj21", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj21"))
        if (guardado) {
            inputPromedio.value = guardado.promedio
            estadoAplicacion.promedio = guardado.promedio
        }
    }
}
