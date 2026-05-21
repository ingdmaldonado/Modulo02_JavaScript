import { contarConsonantes } from "./modelo28.js"

const estadoAplicacion = {
    texto: ""
}

window.onload = () => {

    const inputTexto = document.querySelector("#texto")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputTexto.oninput = () => { estadoAplicacion.texto = inputTexto.value }

    botonCalcular.onclick = () => {
        const cantidad = contarConsonantes(estadoAplicacion.texto)
        resultado.textContent = `La cantidad de consonantes es: ${cantidad}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj28", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj28"))
        if (guardado) {
            inputTexto.value = guardado.texto
            estadoAplicacion.texto = guardado.texto
        }
    }
}
