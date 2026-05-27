import { tieneDosS } from "./modelo29.js"

const estadoAplicacion = {
    palabra: ""
}

window.onload = () => {

    const inputPalabra = document.querySelector("#palabra")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputPalabra.oninput = () => { estadoAplicacion.palabra = inputPalabra.value }

    botonCalcular.onclick = () => {
        const tiene = tieneDosS(estadoAplicacion.palabra)
        resultado.textContent = tiene ? "La palabra contiene al menos dos letras 's'" : "La palabra NO contiene dos letras 's'"
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj29", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj29"))
        if (guardado) {
            inputPalabra.value = guardado.palabra
            estadoAplicacion.palabra = guardado.palabra
        }
    }
}
