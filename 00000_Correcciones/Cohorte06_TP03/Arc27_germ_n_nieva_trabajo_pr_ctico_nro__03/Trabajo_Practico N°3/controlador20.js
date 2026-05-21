import { calcularPromedio } from "./modelo20.js"

const estadoAplicacion = {
    nota1: 0,
    nota2: 0,
    nota3: 0
}

window.onload = () => {

    const inputNota1 = document.querySelector("#nota1")
    const inputNota2 = document.querySelector("#nota2")
    const inputNota3 = document.querySelector("#nota3")
    const botonCalcular = document.querySelector("#calcular")
    const botonGuardar = document.querySelector("#guardar")
    const botonRecuperar = document.querySelector("#recuperar")
    const resultado = document.querySelector("#resultado")

    inputNota1.oninput = () => { estadoAplicacion.nota1 = inputNota1.value }
    inputNota2.oninput = () => { estadoAplicacion.nota2 = inputNota2.value }
    inputNota3.oninput = () => { estadoAplicacion.nota3 = inputNota3.value }

    botonCalcular.onclick = () => {
        const promedio = calcularPromedio(estadoAplicacion.nota1, estadoAplicacion.nota2, estadoAplicacion.nota3)
        resultado.textContent = `El promedio de las notas es: ${promedio}`
    }

    botonGuardar.onclick = () => {
        localStorage.setItem("estadoEj20", JSON.stringify(estadoAplicacion))
        alert("Estado guardado")
    }

    botonRecuperar.onclick = () => {
        const guardado = JSON.parse(localStorage.getItem("estadoEj20"))
        if (guardado) {
            inputNota1.value = guardado.nota1
            inputNota2.value = guardado.nota2
            inputNota3.value = guardado.nota3
            estadoAplicacion.nota1 = guardado.nota1
            estadoAplicacion.nota2 = guardado.nota2
            estadoAplicacion.nota3 = guardado.nota3
        }
    }
}
