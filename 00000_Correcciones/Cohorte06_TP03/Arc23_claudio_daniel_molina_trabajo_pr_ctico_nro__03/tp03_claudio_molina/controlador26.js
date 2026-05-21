/* Ejercicio Nro. 26*/ 


import { calcularDosisInsulina } from "./modelo.js";

window.onload = () => {
    console.log(`la aplicación corriendo`);
    const estadoAplicacion = {
        nivelGlucosa: 0,
        pesoCorporal: 0,
        tipoDiabetes: ""
    };
    const idNivelGlucosa = document.querySelector("#idNivelGlucosa");
    const idPesoCorporal = document.querySelector("#idPesoCorporal");
    const idTipoDiabetes = document.querySelector("#idTipoDiabetes");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    
    idNivelGlucosa.oninput = () => {
        estadoAplicacion.nivelGlucosa = Number(idNivelGlucosa.value);
        console.log(estadoAplicacion);
    };
    idPesoCorporal.oninput = () => {
        estadoAplicacion.pesoCorporal = Number(idPesoCorporal.value);
        console.log(estadoAplicacion);
    };
    idTipoDiabetes.oninput = () => {
        estadoAplicacion.tipoDiabetes = Number(idTipoDiabetes.value);
        console.log(estadoAplicacion);
    };
    idBtnCalcular.onclick = () => {
        let dosis = calcularDosisInsulina(estadoAplicacion.nivelGlucosa, estadoAplicacion.pesoCorporal, estadoAplicacion.tipoDiabetes);
        idResultado.textContent = `La dosis de insulina recomendada es: ${dosis.toFixed(0)} unidades`;
        console.log(dosis);
    };

    idBtnGuardar.onclick = () => {
        let dosisaGuardar = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datoListo", dosisaGuardar);
        console.log(dosisaGuardar);
    };
    
    idBtnRecuperar.onclick = () => {
        let dosisaGuardar = localStorage.getItem("datoListo");
        console.log(dosisaGuardar);
        let dosisRecuperados = JSON.parse(dosisaGuardar);
        console.log(dosisRecuperados);
         idNivelGlucosa.value = dosisRecuperados.nivelGlucosa;
         idPesoCorporal.value = dosisRecuperados.pesoCorporal;
         idTipoDiabetes.value = dosisRecuperados.tipoDiabetes;
         idResultado.textContent = `La dosis de insulina recomendada es: ${calcularDosisInsulina(dosisRecuperados.nivelGlucosa, dosisRecuperados.pesoCorporal, dosisRecuperados.tipoDiabetes).toFixed(0)} unidades`;
    };


}
