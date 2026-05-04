import {tasaSubsuelo} from "./modelo.js"

const estadoApp = {
    importeFactura: 0,
}

window.onload = ()=>{

    const idSubsuelo = document.querySelector("#idSubsuelo")
    const idBotonCalcular = document.querySelector("#idBotonCalcular")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idSubsuelo.oninput = ()=>{
        estadoApp.importeFactura = Number(idSubsuelo.value)
        console.log(estadoApp)
    }

    idBotonCalcular.onclick = ()=>{
        let resultado = tasaSubsuelo(estadoApp.importeFactura)
        idMostrarResultado.textContent = `La tasa de subsuelo es de: $${resultado}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertirDatos = JSON.stringify(estadoApp)
        localStorage.setItem("tasaSubsuelo", convertirDatos)
    }

    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("tasaSubsuelo")
        if(datosRecuperados)
        {
            let datos = JSON.parse(datosRecuperados)

            estadoApp.importeFactura = datos.importeFactura
            idSubsuelo.value = estadoApp.importeFactura
        }
    }

}