import {funcionPromedioNotas} from "./modelo.js"

const estadoAplicacion = {
    nota1: 0,
    nota2: 0,
    nota3: 0,
}

window.onload = ()=>{

    const idNota1 = document.querySelector("#idNota1")
    const idNota2 = document.querySelector("#idNota2")
    const idNota3 = document.querySelector("#idNota3")
    const idBotonAceptar = document.querySelector("#idBotonAceptar")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarPromedio = document.querySelector("#idMostrarPromedio")

    idNota1.oninput = ()=>{
        estadoAplicacion.nota1 = Number(idNota1.value)
        console.log(estadoAplicacion)
    }
    idNota2.oninput = ()=>{
        estadoAplicacion.nota2 = Number(idNota2.value)
        console.log(estadoAplicacion)
    }
    idNota3.oninput = ()=>{
        estadoAplicacion.nota3 = Number(idNota3.value)
        console.log(estadoAplicacion)
    }

    idBotonAceptar.onclick = ()=>{
        let resultado = funcionPromedioNotas(estadoAplicacion.nota1,estadoAplicacion.nota2,estadoAplicacion.nota3)
        idMostrarPromedio.textContent = `El promedio de las 3 notas es: ${resultado.toFixed(2)}`
    }

    idBotonGuardar.onclick = ()=>{
        let datosConvertidos = JSON.stringify(estadoAplicacion)
        localStorage.setItem("promedioNotas", datosConvertidos)
    }

    idBotonRecuperar.onclick = ()=>{
        let datos = localStorage.getItem("promedioNotas")
        if(datos)
        {
            let datosRecuperados = JSON.parse(datos)

            estadoAplicacion.nota1 = datosRecuperados.nota1
            estadoAplicacion.nota2 = datosRecuperados.nota2
            estadoAplicacion.nota3 = datosRecuperados.nota3

            idNota1.value = estadoAplicacion.nota1
            idNota2.value = estadoAplicacion.nota2
            idNota3.value = estadoAplicacion.nota3
        }
    }

}