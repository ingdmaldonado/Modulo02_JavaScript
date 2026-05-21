import { tieneTresEspacios } from "./modelo30.js"

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
        const tiene = tieneTresEspacios(estadoAplicacion.texto)
        resultado.textContent = tiene ? "El texto contiene al menos 3 espacios en blanco" : "El texto NO contiene 3 espacios en blanco"
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj30", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj30"))
        if (guardado) {
            inputTexto.value = guardado.texto
            estadoAplicacion.texto = guardado.texto
        }
    }
}
