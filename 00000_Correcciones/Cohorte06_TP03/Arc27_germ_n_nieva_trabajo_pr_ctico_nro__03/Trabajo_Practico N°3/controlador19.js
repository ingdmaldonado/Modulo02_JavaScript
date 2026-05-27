import { calcular } from "./modelo19.js"

const estadoAplicacion = {
    importeProducto: 0,
    margenGanancia: 0
}

window.onload = () => {

    const valorProducto = document.querySelector("#importeProducto")
    const margenGanancia = document.querySelector("#margenGanancia")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultadoh3 = document.querySelector("#resultado")

    valorProducto.oninput = () => { estadoAplicacion.importeProducto = valorProducto.value }
    margenGanancia.oninput = () => { estadoAplicacion.margenGanancia = margenGanancia.value }

    botonCalcular.onclick = () => {
        const importeFinal = calcular(estadoAplicacion.importeProducto, estadoAplicacion.margenGanancia)
        resultadoh3.textContent = `El importe final con el margen de ganancia sera: ${importeFinal}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj19", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj19"))
        if (guardado) {
            valorProducto.value = guardado.importeProducto
            margenGanancia.value = guardado.margenGanancia
            estadoAplicacion.importeProducto = guardado.importeProducto
            estadoAplicacion.margenGanancia = guardado.margenGanancia
        }
    }
}