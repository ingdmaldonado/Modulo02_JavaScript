/* Ejercicio Nro. 26:
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
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente. */

import {calcularInsulina} from "./modelo26.js";

window.onload = ()=>{
    console.log (`Aplicacion corriendo`);

    const estadoAplicacion = {
        insulina: 0,
        glucosa: 0,
        pesoCorporal: 0,
        diabetes: 0,
    };

    const idNivelGlucosa = document.querySelector ("#idNivelGlucosa");
    const IdPesoCorporal = document.querySelector ("#IdPesoCorporal");
    const IdDiabetesTipo = document. querySelector ("#IdDiabetesTipo");
    const IdBtnCalcular = document.querySelector ("#IdBtnCalcular");
    const IdResultado = document.querySelector ("#IdResultado");
    const IdBtnGuardar = document. querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar = document. querySelector ("#IdBtnRecuperar");


    idNivelGlucosa.oninput = () => {
        estadoAplicacion.glucosa = Number (idNivelGlucosa.value);
    };
    
    IdPesoCorporal.oninput = () => {
        estadoAplicacion.pesoCorporal = Number(IdPesoCorporal.value);

    };

    IdDiabetesTipo.oninput = () => {estadoAplicacion.diabetes = Number (IdDiabetesTipo.value);

    };

    IdBtnCalcular.onclick = () => {
        const resultado = calcularInsulina (
            estadoAplicacion.glucosa, 
            estadoAplicacion.pesoCorporal, 
            estadoAplicacion.diabetes);

        estadoAplicacion.insulina= resultado;

        console.log (`Dosis recomendada ${resultado}`);

    IdResultado.textContent = `Dosis recomendada ${resultado}`;

    };

     IdBtnGuardar.onclick = ()=>{
        console.log (estadoAplicacion);
        let estadoJSON= JSON.stringify (estadoAplicacion);
        console.log (estadoJSON);
        localStorage.setItem ("estadoApp", estadoJSON);
    };

        IdBtnRecuperar.onclick = ()=>{
        let estadoGuardado= localStorage.getItem ("estadoApp");

        if (estadoGuardado)
        {
        let estadoObjeto= JSON.parse (estadoGuardado);

        estadoAplicacion.glucosa = estadoObjeto.glucosa; 
        estadoAplicacion.pesoCorporal= estadoObjeto.pesoCorporal;
        estadoAplicacion.diabetes = estadoObjeto.diabetes;
        estadoAplicacion.insulina = estadoObjeto.insulina;

        IdResultado.textContent = `Dosis recomendada ${estadoAplicacion.insulina}`;

        console.log("Recuperado:", estadoObjeto);
        };

    
};   
}; 