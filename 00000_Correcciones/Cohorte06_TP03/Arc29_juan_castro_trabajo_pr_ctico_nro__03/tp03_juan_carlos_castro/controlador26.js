/*

Ejercicio Nro. 26: 
 
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un 
paciente diabético; Basada en tres datos importantes para el cálculo. 
 
1) Nivel de glucosa en sangre 
2) Peso Corporal (en kilogramos) 
3) Tipo de diabetes 
a. Tipo 1 
b. Tipo 2 
 
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,  
 este último término solamente si la glucosa es mayor a 180. 
 
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, 
 este último término solamente si la glucosa es mayor a  180. 
 
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada 
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.  
 
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente. 

*/

import { fnDosisInsulina } from "./modelo26.js";
import { fnGuardar } from "./modelo26.js";
import { fnRecuperar } from "./modelo26.js";

window.onload = () => {

    const estadoAplicacion = {
        glucosa: 0,
        peso: 0,
        tipo: 0
    };

    const idGlucosa = document.querySelector("#idGlucosa");
    const idPeso = document.querySelector("#idPeso");
    const idTipo = document.querySelector("#idTipo");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    fnRecuperar();

    idGlucosa.oninput = () => {
        estadoAplicacion.glucosa = Number(idGlucosa.value);
        fnGuardar(estadoAplicacion);
    };

    idPeso.oninput = () => {
        estadoAplicacion.peso = Number(idPeso.value);
        fnGuardar(estadoAplicacion);
    };

    idTipo.oninput = () => {
        estadoAplicacion.tipo = Number(idTipo.value);
        fnGuardar(estadoAplicacion);
    };

    idBtnCalcular.onclick = () => {
        let resultado = fnDosisInsulina(estadoAplicacion.glucosa, estadoAplicacion.peso, estadoAplicacion.tipo)
        idResultado.textContent = `La insulina recomendada es ${resultado}`;
    };
};