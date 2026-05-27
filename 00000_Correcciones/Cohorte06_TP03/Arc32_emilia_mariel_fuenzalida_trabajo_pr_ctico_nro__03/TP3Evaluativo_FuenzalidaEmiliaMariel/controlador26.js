import { fnDosisInsulina } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";

/*
Ejercicio Nro. 26: 
Realizar una aplicación web que permita calcular y 
determinar la dosis de insulina recomendada para un 
paciente diabético; Basada en tres datos importantes para el cálculo. 

1) Nivel de glucosa en sangre 
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes 

a. Tipo 1
b. Tipo 2

Para Tipo 1:
El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,  
este último término solamente si la glucosa es mayor a 180. 

Para Tipo 2: 
El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, 
este último término solamente si la glucosa es mayor a  180. 
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada 
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.  


*/



window.onload = () => {

    const estadoAplicacion = {
        tipoDiabetes: 0,
        peso: 0,
        nivelGlucosa: 0
    };

    const idTipoDiabetes = document.querySelector("#idTipoDiabetes");
    const idPesoCorporal = document.querySelector("#idPesoCorporal");
    const idNivelGlucosa = document.querySelector("#idNivelGlucosa");
    const idCalculoInsulina = document.querySelector("#idCalculoInsulina");
    const idResultadoDosis = document.querySelector("#idResultadoDosis");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio26");

    idTipoDiabetes.onchange = () => {

        estadoAplicacion.tipoDiabetes = Number(idTipoDiabetes.value);
        fnGuardar("ejercicio26", estadoAplicacion);
    };

    idPesoCorporal.oninput = () => {

        estadoAplicacion.peso = Number(idPesoCorporal.value);
        fnGuardar(estadoAplicacion);
        console.log(estadoAplicacion);

    }
    idNivelGlucosa.oninput = () => {

        estadoAplicacion.nivelGlucosa = Number(idNivelGlucosa.value);
        fnGuardar(estadoAplicacion);
        console.log(estadoAplicacion);
    }

    idCalculoInsulina.onclick = () => {

        let dosisRecomendada = fnDosisInsulina(estadoAplicacion.tipoDiabetes, estadoAplicacion.peso, estadoAplicacion.nivelGlucosa);

        console.log(dosisRecomendada);

        idResultadoDosis.textContent = `-Tipo de diabetes: ${estadoAplicacion.tipoDiabetes}
        - Peso: ${estadoAplicacion.peso}kg
        - Dosis recomendada de Insulina: ${dosisRecomendada}`;
    }
    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio26", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio26");

        if (datos) {

            estadoAplicacion.tipoDiabetes = datos.tipoDiabetes;
            estadoAplicacion.peso = datos.peso;
            estadoAplicacion.nivelGlucosa = datos.nivelGlucosa;

            idTipoDiabetes.value = datos.tipoDiabetes;
            idPesoCorporal.value = datos.peso;
            idNivelGlucosa.value = datos.nivelGlucosa;
        }
    };
};