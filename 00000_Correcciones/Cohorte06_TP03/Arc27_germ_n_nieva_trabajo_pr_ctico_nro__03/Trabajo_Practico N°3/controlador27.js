import { contarVocales } from "./modelo27.js"

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
        const cantidad = contarVocales(estadoAplicacion.texto)
        resultado.textContent = `La cantidad de vocales es: ${cantidad}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj27", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj27"))
        if (guardado) {
            inputTexto.value = guardado.texto
            estadoAplicacion.texto = guardado.texto
        }
    }
}
