import { calculos, validarNumero, validarTipo, agregarCalculo } from "./datos20.js";

/* Ejercicio Nro. 20:
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1

Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript
Módulo: JavaScript
b. Tipo 2

Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente. */

// Arrow function para calcular dosis de insulina
const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {
    let dosis = 0;
    
    if (tipoDiabetes === "1") {
        dosis = peso * 0.5;
    } else if (tipoDiabetes === "2") {
        dosis = peso * 0.2;
    }
    
    if (glucosa > 180) {
        dosis += glucosa * 0.5;
    }
    
    return dosis;
};

window.onload = () => {
    const idGlucosa = document.querySelector("#idGlucosa");
    const idPeso = document.querySelector("#idPeso");
    const idTipoDiabetes = document.querySelector("#idTipoDiabetes");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idListaResultados = document.querySelector("#idListaResultados");
    
    console.log("Elementos capturados:", idGlucosa, idPeso, idTipoDiabetes, idBtnCalcular, idResultado, idListaResultados);
    
    idBtnCalcular.onclick = () => {
        const glucosa = parseFloat(idGlucosa.value);
        const peso = parseFloat(idPeso.value);
        const tipoDiabetes = idTipoDiabetes.value;
        
        console.log("Valores:", { glucosa, peso, tipoDiabetes });
        
        if (!validarNumero(glucosa)) {
            alert("Ingrese un nivel de glucosa valido");
            return;
        }
        
        if (!validarNumero(peso)) {
            alert("Ingrese un peso valido");
            return;
        }
        
        if (!validarTipo(tipoDiabetes)) {
            alert("Seleccione un tipo de diabetes");
            return;
        }
        
        const dosisRecomendada = calcularDosisInsulina(glucosa, peso, tipoDiabetes);
        
        const calculo = {
            glucosa: glucosa,
            peso: peso,
            tipoDiabetes: tipoDiabetes,
            dosis: dosisRecomendada,
            fecha: new Date().toLocaleString()
        };
        
        agregarCalculo(calculo);
        
        console.log("Dosis calculada:", dosisRecomendada);
        
        const tipoTexto = tipoDiabetes === "1" ? "Tipo 1" : "Tipo 2";
        idResultado.textContent = "Dosis recomendada: " + dosisRecomendada.toFixed(2) + " unidades (Diabetes " + tipoTexto + ")";
        
        const todosLosCalculos = calculos.map(c => {
            const tipo = c.tipoDiabetes === "1" ? "Tipo 1" : "Tipo 2";
            return "Dosis: " + c.dosis.toFixed(2) + " unidades (" + tipo + ")";
        });
        
        console.log("Todos los calculos:", todosLosCalculos);
        console.log("Total calculos:", calculos.length);
        
        const nuevoResultado = document.createElement("p");
        const tipoMostrar = tipoDiabetes === "1" ? "Tipo 1" : "Tipo 2";
        nuevoResultado.textContent = "Glucosa: " + glucosa + "mg/dL - Peso: " + peso + "kg - " + tipoMostrar + " - Dosis: " + dosisRecomendada.toFixed(2) + " unidades";
        idListaResultados.appendChild(nuevoResultado);
        
        idGlucosa.value = "";
        idPeso.value = "";
        idTipoDiabetes.value = "";
    };
};