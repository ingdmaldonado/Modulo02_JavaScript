import {insulinaRecomendada} from "./modelo.js"

const estadoApp = {
    nivelGlucosa:0,
    pesoCorporal:0,
    tipoDiabetes: "1"
}

window.onload = ()=>{

    const idNivelGlucosa = document.querySelector("#idNivelGlucosa")
    const idPesoCorporal = document.querySelector("#idPesoCorporal")
    const idTipoDiabetes = document.querySelector("#idTipoDiabetes")
    const idBotonCalcular = document.querySelector("#idBotonCalcular")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")
    const idMostrarResultado = document.querySelector("#idMostrarResultado")

    idNivelGlucosa.oninput = ()=>{
        estadoApp.nivelGlucosa = Number(idNivelGlucosa.value)
    }
    idPesoCorporal.oninput = ()=>{
        estadoApp.pesoCorporal = Number(idPesoCorporal.value)
    }
    idTipoDiabetes.onchange = ()=>{
        estadoApp.tipoDiabetes = Number(idTipoDiabetes.value)
    }
    idBotonCalcular.onclick = ()=>{
        let resultado = insulinaRecomendada(estadoApp.nivelGlucosa,estadoApp.pesoCorporal,estadoApp.tipoDiabetes)
        idMostrarResultado.textContent = `Su dosis recomendada es: ${resultado}`
    }
    idBotonGuardar.onclick = ()=>{
        let convertirDatos = JSON.stringify(estadoApp)
        localStorage.setItem("dosisRecomendada", convertirDatos)
    }
    idBotonRecuperar.onclick = ()=>{
        let datosRecuperados = localStorage.getItem("dosisRecomendada")

        if(datosRecuperados)
        {
            let datosObjeto = JSON.parse(datosRecuperados)

            estadoApp.nivelGlucosa = datosObjeto.nivelGlucosa
            estadoApp.pesoCorporal = datosObjeto.pesoCorporal
            estadoApp.tipoDiabetes = datosObjeto.tipoDiabetes

            idNivelGlucosa.value = estadoApp.nivelGlucosa
            idPesoCorporal.value = estadoApp.pesoCorporal
            idTipoDiabetes.value = estadoApp.tipoDiabetes
        }
    }






}