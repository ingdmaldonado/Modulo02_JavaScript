import {fnCalcularDosisInsulina} from "./modelo26.js";

const inputNivelGlucosa = document.getElementById("idGlucosaSangre");

const inputPesoCorporal = document.getElementById("idPesoCorporal");

const inputTipo= document.getElementById("idTipo");

const boton = document.getElementById("idBotonCalcular");

const resultado = document.getElementById("resultado");

const recuperar = document.getElementById("recuperar");


const estadoAplicacion = {

    nivelGlucosa : 0,
    pesoCorporal : 0,
    tipoDiabetes : 0

};

inputNivelGlucosa.oninput = ()=> {
    estadoAplicacion.nivelGlucosa = Number (inputNivelGlucosa.value);

    localStorage.setItem("estadoARecuperar", JSON.stringify(estadoAplicacion));
    console.log(`Aqui se esta tomando el nivel de glucosa:${estadoAplicacion.nivelGlucosa}`);

};

inputPesoCorporal.oninput =()=> {

    estadoAplicacion.pesoCorporal = Number (inputPesoCorporal.value);

    localStorage.setItem("estadoARecuperar", JSON.stringify(estadoAplicacion));

    console.log(`Aqui se esta tomando el peso corporal: ${estadoAplicacion.pesoCorporal}`);
};

inputTipo.onchange =()=> {

estadoAplicacion.tipoDiabetes = Number
(inputTipo.value);

localStorage.setItem("estadoARecuperar", JSON.stringify(estadoAplicacion));

console.log (`Aqui se esta tomando el tipo de diabetes: ${estadoAplicacion.tipoDiabetes}`);

}

boton.onclick = () => {

    const nivelGlucosa = Number (inputNivelGlucosa.value);

    const pesoCorporal = Number (inputPesoCorporal.value);

    const tipoDiabetes= Number (inputTipo.value);

    const dosisInsulina = fnCalcularDosisInsulina(nivelGlucosa, pesoCorporal, tipoDiabetes);

    resultado.textContent = `La dosis de insulina recomendado para el paciente es: ${dosisInsulina.toFixed(2)} unidades. `; 
};

recuperar.onclick = () => {
    const datosARecuperar = localStorage.getItem("estadoARecuperar");

    if (datosARecuperar){

        const estadoRecuperar = JSON.parse (datosARecuperar);

        inputNivelGlucosa.value = estadoRecuperar.nivelGlucosa;

        inputPesoCorporal.value = estadoRecuperar.pesoCorporal;

        inputTipo.value = estadoRecuperar.tipoDiabetes;
    }
}