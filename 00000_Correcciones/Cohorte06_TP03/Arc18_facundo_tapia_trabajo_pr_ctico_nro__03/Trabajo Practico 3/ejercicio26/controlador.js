/*Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.*/

import { calcularInsulina }
from "./modelo.js";

window.onload = () => {

    // Estado aplicación
    const estadoAplicacion = {

        glucosa: 0,
        peso: 0,
        tipoDiabetes: 1

    };

    const idGlucosa = document.querySelector("#idGlucosa");
    const idPeso = document.querySelector("#idPeso");
    const idTipoDiabetes =document.querySelector("#idTipoDiabetes");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar =document.querySelector("#idBtnGuardar");
    const idBtnRecuperar =document.querySelector("#idBtnRecuperar");
    const idResultado =document.querySelector("#idResultado");


    idGlucosa.oninput = () => {

        estadoAplicacion.glucosa =Number(idGlucosa.value);

    };

    idPeso.oninput = () => {

        estadoAplicacion.peso = Number(idPeso.value);

    };

    idTipoDiabetes.onchange = () => {

        estadoAplicacion.tipoDiabetes = Number(idTipoDiabetes.value);

    };


    
    idBtnCalcular.onclick = () => {

        let resultado =calcularInsulina(estadoAplicacion.glucosa,estadoAplicacion.peso,estadoAplicacion.tipoDiabetes);

        idResultado.textContent =`Dosis recomendada: ${resultado}`;

    };


    // Guardar
    idBtnGuardar.onclick = () => {

        let datosJSON =JSON.stringify(estadoAplicacion);

        localStorage.setItem( "datosAPP",datosJSON);

    };

    idBtnRecuperar.onclick = () => {

        let datosJSON =localStorage.getItem("datosAPP");

        let datosObjeto =JSON.parse(datosJSON);

        idGlucosa.value =datosObjeto.glucosa;

        idPeso.value =datosObjeto.peso;

        idTipoDiabetes.value =datosObjeto.tipoDiabetes;

        estadoAplicacion.glucosa =datosObjeto.glucosa;

        estadoAplicacion.peso = datosObjeto.peso;

        estadoAplicacion.tipoDiabetes = datosObjeto.tipoDiabetes;

    };

};