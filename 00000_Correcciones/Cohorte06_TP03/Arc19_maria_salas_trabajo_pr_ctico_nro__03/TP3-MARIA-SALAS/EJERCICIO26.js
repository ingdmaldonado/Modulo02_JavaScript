import {dosisInsulina} from "./modelo.js"

const estadoAplicacion = {

    peso:0,
    glucosa:0,
    tipoDiabetes:0,
}

window.onload = () => {

    const idGlucosa = document.querySelector("#idGlucosa")
    const idPeso = document.querySelector("#idPeso")
    const idTipoDiabetes = document.querySelector("#idTipoDiabetes")
    const btnCalcular = document.querySelector("#btnCalcular")
    const idMostrar = document.querySelector("#idMostrar")
    const btnGuardar = document.querySelector("#btnGuardar")
    const btnRecuperar = document.querySelector("#btnRecuperar")

    idGlucosa.oninput = () => {

        estadoAplicacion.glucosa = Number(idGlucosa.value)
    }
    idPeso.oninput = () => {
        estadoAplicacion.peso = Number(idPeso.value)
    }
    idTipoDiabetes.oninput = () => {
        estadoAplicacion.tipoDiabetes = Number(idTipoDiabetes.value)
    }

    btnCalcular.onclick = () => {

        let resultado = dosisInsulina(estadoAplicacion.glucosa, estadoAplicacion.peso, estadoAplicacion.tipoDiabetes)
        idMostrar.textContent = `la dosis adecuada es: ${resultado}`
    }

    btnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("parametrosDosis", datosJSON)
    }  

    btnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("parametrosDosis")

        if(datosJSON){
            let datosRecuperados = JSON.parse(datosJSON)

            estadoAplicacion.glucosa = datosRecuperados.glucosa
            estadoAplicacion.peso = datosRecuperados.peso
            estadoAplicacion.tipoDiabetes = datosRecuperados.tipoDiabetes

            idGlucosa.value = estadoAplicacion.glucosa
            idPeso.value = estadoAplicacion.peso
            idTipoDiabetes.value = estadoAplicacion.tipoDiabetes
        }
    }
}