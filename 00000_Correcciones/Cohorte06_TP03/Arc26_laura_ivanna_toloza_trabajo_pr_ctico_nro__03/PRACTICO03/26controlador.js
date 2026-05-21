/* Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un paciente diabético; 
Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente. */

import {calcularInsulina} from "./26modelo.js";

const idGlucosa = document.querySelector("#IdGlucosa");
const idPeso = document.querySelector("#idPeso");
const idTipo = document.querySelector("#idTipo");
const idBtnAceptar = document.querySelector("#idBtnAceptar");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idRecuperar = document.querySelector("#idRecuperar");
const idResultado = document.querySelector("#idResultado");

const estadoAplicacion = {
    glucosa: 0,
    peso: 0,
    tipo: 0,
    dosis: 0,
};

idGlucosa.oninput = () => {
        estadoAplicacion.glucosa = Number(idGlucosa.value);
    };

idPeso.oninput = () => {
        estadoAplicacion.peso = Number(idPeso.value);
    };

idTipo.onchange = () => {
        estadoAplicacion.tipo = Number(idTipo.value);
    };

idBtnAceptar.onclick = () => {
    let resultado = calcularInsulina(estadoAplicacion.glucosa, estadoAplicacion.peso, estadoAplicacion.tipo);
    estadoAplicacion.dosis = resultado;
    idResultado.textContent = `La insulina recomendada es: ${resultado.toFixed(2)}`;
};

idBtnGuardar.onclick = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("datosAPP", datosJSON);
};

idRecuperar.onclick = () => {
    let datosJSON = localStorage.getItem("datosAPP", );
    let datosObjeto = JSON.parse(datosJSON);

    estadoAplicacion.glucosa = datosObjeto.glucosa;
    estadoAplicacion.peso = datosObjeto.peso;
    estadoAplicacion.tipo = datosObjeto.tipo;
    estadoAplicacion.dosis = datosObjeto.dosis;

    idGlucosa.value = estadoAplicacion.glucosa;
    idPeso.value = estadoAplicacion.peso;
    idTipo.value = estadoAplicacion.tipo;
    idResultado.textContent = `La insulina recomendada es: ${estadoAplicacion.dosis.toFixed(2)}`;
};