
import {calcularPromedio} from "./modelo.js"


const estadoAplicacion = {

    nota1: 0,
    nota2: 0,
    nota3: 0,
}

window.onload = () => {

    const idNota1 = document.querySelector("#idNota1")
    const idNota2 = document.querySelector("#idNota2")
    const idNota3 = document.querySelector("#idNota3")
    const idcalcularPromedio = document.querySelector("#idcalcularPromedio")
    const idMostrar = document.querySelector("#idMostrar")
    const idGuardar = document.querySelector("#idGuardar")
    const idRecuperar = document.querySelector("#idRecuperar")


    idNota1.oninput = () => {

        estadoAplicacion.nota1 = Number(idNota1.value)
    }
    idNota2.oninput = () => {

        estadoAplicacion.nota2 = Number(idNota2.value)
    }
    idNota3.oninput = () => {
        estadoAplicacion.nota3 = Number(idNota3.value)
    }

    idcalcularPromedio.onclick = () => {

        let resultado = calcularPromedio(estadoAplicacion.nota1,estadoAplicacion.nota2,estadoAplicacion.nota3)
        idMostrar.textContent = `el promedio es de: ${resultado}`
    }

    idGuardar.onclick = () => {

        let datos = JSON.stringify(estadoAplicacion)
        localStorage.setItem("promedio",datos)
    }

    idRecuperar.onclick = () => {

        let datosJ = localStorage.getItem("promedio")

        if(datosJ)
        {

            let datos = JSON.parse(datosJ)

            estadoAplicacion.nota1 = datos.nota1
            estadoAplicacion.nota2 = datos.nota2
            estadoAplicacion.nota3 = datos.nota3

            idNota1.value = estadoAplicacion.nota1
            idNota2.value = estadoAplicacion.nota2
            idNota3.value = estadoAplicacion.nota3
        }
    }

}