
import {fnCalcularNivelDeInsulina} from "./modelo.js";

/*
const fnCalcularNivelDeInsulina = ()=>
    {
        return 100;
    }
*/


window.addEventListener("load",()=>
    {
        const idSelTipoDiabetes = document.querySelector("#idSelTipoDiabetes");
        const idNivelDeGlucosa = document.querySelector("#idNivelDeGlucosa");
        const idPesoCorporal = document.querySelector("#idPesoCorporal");
        const idBtnCalcular = document.querySelector("#idBtnCalcular");

        console.log(idSelTipoDiabetes);
        console.log(idNivelDeGlucosa);
        console.log(idPesoCorporal);
        console.log(idBtnCalcular);

        idBtnCalcular.addEventListener("click",()=>{

            let tipoDeDiabetes = Number(idSelTipoDiabetes.value);
            let nivelDeGlucosa = Number(idNivelDeGlucosa.value);
            let pesoCorporal = Number(idPesoCorporal.value);

            console.log(tipoDeDiabetes);
            console.log(nivelDeGlucosa);
            console.log(pesoCorporal);

            console.log(fnCalcularNivelDeInsulina(tipoDeDiabetes,pesoCorporal,nivelDeGlucosa));
        })

        console.log("running");

    })