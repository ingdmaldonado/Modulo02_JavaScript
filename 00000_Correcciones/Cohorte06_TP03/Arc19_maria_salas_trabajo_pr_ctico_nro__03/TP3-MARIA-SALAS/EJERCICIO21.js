import {devolucionDeExamen} from "./modelo.js"

const estadoAplicacion = {
    notaX:0,
}

window.onload = () => {

    const idNotaX = document.querySelector("#idNotaX")
    const idCalcular = document.querySelector("#idCalcular")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")
    const idGuardar = document.querySelector("#idGuardar")
    const idRecuperar = document.querySelector("#idRecuperar")

    idNotaX.oninput = () => {

        estadoAplicacion.notaX = Number(idNotaX.value)
        console.log(estadoAplicacion)
    }

    idCalcular.onclick = () => {

        let resultado = devolucionDeExamen(estadoAplicacion.notaX)
        idMostrarResultado.textContent = `${resultado}`

    }

    idGuardar.onclick = () => {
        
        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("notaPromedio",datosJSON)
    }
    idRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("notaPromedio")

        if(datosJSON)
        {
            let datosRecuperados = JSON.parse(datosJSON)

            estadoAplicacion.notaX = datosRecuperados.notaX
            idNotaX.value = estadoAplicacion.notaX
        }
    }

    


}