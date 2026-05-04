import {funcionSobreTasa} from "./modelo.js"

const estadoApp = {
    importeBase: 0,
    tipoBebida: "---"
}

window.onload = ()=>{

    const idImporteBase = document.querySelector("#idImporteBase")
    const idTipoBebida = document.querySelector("#idTipoBebida")
    const idBotonCalcular = document.querySelector("#idBotonCalcular")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idImporteBase.oninput = ()=>{
        estadoApp.importeBase = Number(idImporteBase.value)
        console.log(estadoApp)
    }

    idTipoBebida.onchange = ()=>{
        estadoApp.tipoBebida = idTipoBebida.value
        console.log(estadoApp)
    }

    idBotonCalcular.onclick = ()=>{
        let resultadoTasa = funcionSobreTasa(estadoApp.tipoBebida,estadoApp.importeBase)
        idMostrarResultado.textContent = `La sobre tasa para este producto es: ${resultadoTasa}`
    }

    idBotonGuardar.onclick = ()=>{
        let convertirDatos = JSON.stringify(estadoApp)
        localStorage.setItem("tasaBebida", convertirDatos)
    }

    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("tasaBebida")
        if(datosRecuperados)
        {
            let datos = JSON.parse(datosRecuperados)

            estadoApp.importeBase = datos.importeBase
            estadoApp.tipoBebida = datos.tipoBebida

            idImporteBase.value = estadoApp.importeBase
            idTipoBebida.value = estadoApp.tipoBebida
        }
    }

    
}