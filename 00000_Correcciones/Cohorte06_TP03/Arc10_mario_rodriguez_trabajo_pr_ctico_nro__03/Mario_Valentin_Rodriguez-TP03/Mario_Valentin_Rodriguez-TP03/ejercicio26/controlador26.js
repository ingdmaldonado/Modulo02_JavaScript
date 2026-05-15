import {fnCalcularInsulina} from "./modelo26.js";

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


window.onload = ()=>{

    const estadoAplicacion = {

        nivelGlucosa: 0,
        pesoCorporal: 0,
        tipoDiabetes: 1,

    };

    const idNivelGlucosa = document.querySelector("#idNivelGlucosa");
    const idPesoCorporal = document.querySelector("#idPesoCorporal");
    const idTipoDiabetes = document.querySelector("#idTipoDiabetes");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    idNivelGlucosa.oninput = ()=>{

        estadoAplicacion.nivelGlucosa = Number(idNivelGlucosa.value);

        console.log(estadoAplicacion);

    };

    idPesoCorporal.oninput = ()=>{

        estadoAplicacion.pesoCorporal = Number(idPesoCorporal.value);

        console.log(estadoAplicacion);

    };

    idTipoDiabetes.onchange = ()=>{

        estadoAplicacion.tipoDiabetes = Number(idTipoDiabetes.value);

        console.log(estadoAplicacion);

    };

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularInsulina(estadoAplicacion.nivelGlucosa, estadoAplicacion.pesoCorporal, estadoAplicacion.tipoDiabetes);

        console.log(resultado);

        idResultado.textContent = `DOSIS DE INSULINA: ${resultado}`;

    };

};