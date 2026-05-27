/*Ejercicio Nro. 26:
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript
Módulo: JavaScript
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.*/


import { dosisInsulina } from "./modelo26.js";

const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idNivelGlucosa.value = estadoObjeto.nivelGlucosa;
        idPeso.value = estadoObjeto.peso;
        idTipoDiabetes.value = estadoObjeto.tipoDiabetes;
    }
};

window.onload = () => {

    const estadoAplicacion = {
        nivelGlucosa: 0,        
        peso: 0,           
        tipoDiabetes: 0    
    }

    const idNivelGlucosa = document.querySelector("#idNivelGlucosa");
    const idPeso = document.querySelector("#idPeso");
    const idTipoDiabetes = document.querySelector("#idTipoDiabetes");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    recuperarEstado();  

    idNivelGlucosa.oninput = () => {
        estadoAplicacion.nivelGlucosa = Number(idNivelGlucosa.value);
    }
    idPeso.oninput = () => {
        estadoAplicacion.peso = Number(idPeso.value);
    }
    idTipoDiabetes.oninput = () => {
        estadoAplicacion.tipoDiabetes = Number(idTipoDiabetes.value);
    }

    idBtnCalcular.onclick = () => {
       let resultado = dosisInsulina(estadoAplicacion.nivelGlucosa, estadoAplicacion.peso, estadoAplicacion.tipoDiabetes);

        idResultado.textContent = `El nivel de glucosa es ${estadoAplicacion.nivelGlucosa}, el peso es ${estadoAplicacion.peso}, el tipo de diabetes es ${estadoAplicacion.tipoDiabetes} y la dosis de insulina recomendada es ${resultado}`;
    };
};