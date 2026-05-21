import { calcularImporteAgua } from "./modelo23.js"

const estadoAplicacion = {
    metros: 0
}

window.onload = () => {

    const inputMetros = document.querySelector("#metros")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputMetros.oninput = () => { estadoAplicacion.metros = inputMetros.value }

    botonCalcular.onclick = () => {
        const importe = calcularImporteAgua(estadoAplicacion.metros)
        resultado.textContent = `El importe a pagar es: $${importe.toFixed(2)}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj23", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj23"))
        if (guardado) {
            inputMetros.value = guardado.metros
            estadoAplicacion.metros = guardado.metros
        }
    }
}
