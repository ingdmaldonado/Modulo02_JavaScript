import {tasaEnre} from "./modelo.js"

const estadoApp = {
    importeFactura:0,
}

window.onload = ()=>{

    const idEnre = document.querySelector("#idEnre")
    const idBotonCalcular = document.querySelector("#idBotonCalcular")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idEnre.oninput = ()=>{
        estadoApp.importeFactura = Number(idEnre.value)
        console.log(estadoApp)
    }

    idBotonCalcular.onclick = ()=>{
        let resultado = tasaEnre(estadoApp.importeFactura)
        idMostrarResultado.textContent = `la Tasa de Fiscalización ENRE es de: $${resultado}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertirDatos = JSON.stringify(estadoApp)
        localStorage.setItem("datosEnre", convertirDatos)
    }

    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("datosEnre")
        if(datosRecuperados)
        {
            let datos = JSON.parse(datosRecuperados)

            estadoApp.importeFactura = datos.importeFactura
            idEnre.value = estadoApp.importeFactura
        }
    }

}