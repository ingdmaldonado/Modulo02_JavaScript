import { sinDigitos } from "./modelo31.js"

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
        const resultado2 = sinDigitos(estadoAplicacion.texto)
        resultado.textContent = resultado2 ? "El texto NO contiene dígitos numéricos" : "El texto contiene al menos un dígito numérico"
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj31", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj31"))
        if (guardado) {
            inputTexto.value = guardado.texto
            estadoAplicacion.texto = guardado.texto
        }
    }
}
