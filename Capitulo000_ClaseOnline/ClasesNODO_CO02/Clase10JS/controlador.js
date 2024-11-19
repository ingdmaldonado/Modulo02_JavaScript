/*

6) Ejercicio propuesto Nro. 13:
	Realizar una función que pueda calcular y determinar la dosis 
    de insulina recomendada para un paciente diabético. 
    Basada en tres datos importantes para el cálculo.

1)	Nivel de glucosa en sangre
2)	Peso Corporal (en kilogramos)
3)	Tipo de diabetes
a.	Tipo 1
b.	Tipo 2

Para Tipo 1: El cálculo es el 50% del Peso corporal 
del paciente
 + el 50% del nivel de glucosa en sangre, 
 este último termino solamente si la glucosa 
 es mayor a 180.

Para Tipo 2: El cálculo es el 20% del Peso corporal 
del paciente + el 50% del nivel de glucosa en sangre,
 este último termino solamente si la glucosa es mayor a  180.

La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Nota: expresar las funciones de forma tradicional y como arrow functions

*/

// primero siempre van los import
import {fnCalcularDosisDeInsulina,Cuadrado} from "./modelo.js"


const fnResolverProblema = ()=>
    {
         
        let tipoDeDiabetes = Number(idSelTipoDeDiabetes.value);
        let pesoCorporal = Number(idPesoCorporal.value);
        let nivelDeGlucosa = Number(idNivelDeGlucosa.value);

    //    console.log(tipoDeDiabetes,pesoCorporal,nivelDeGlucosa);

        /* aqui debería invocar una
        función. que obviamente la haremos
        con una arrow function. para que
        calcule el nivel de insulina */

        let dosisResultado = fnCalcularDosisDeInsulina(tipoDeDiabetes,pesoCorporal,nivelDeGlucosa);
    //    console.log(dosisResultado);
        idResultado.textContent = `El nivel de Insulina Recomendado es ${dosisResultado} mg/dl`;


    }

// va la captura del evento load y la delegación del evento en una arrow function //
window.addEventListener("load",()=>
    {
        console.log("corriendo");

        const idSelTipoDeDiabetes = document.querySelector("#idSelTipoDeDiabetes");
        const idPesoCorporal = document.querySelector("#idPesoCorporal");
        const idNivelDeGlucosa = document.querySelector("#idNivelDeGlucosa");
        const idBtnCalcular = document.querySelector("#idBtnCalcular");
        const idResultado = document.querySelector("#idResultado");

        console.log(idSelTipoDeDiabetes);
        console.log(idPesoCorporal);
        console.log(idNivelDeGlucosa);
        console.log(idBtnCalcular);
        console.log(idResultado);

        // implementamos el evento change del selector //
        idSelTipoDeDiabetes.addEventListener("change",()=>
            {
                fnResolverProblema();
            })

        
        idPesoCorporal.addEventListener("input",()=>
            {
                fnResolverProblema();
            })


        idNivelDeGlucosa.addEventListener("input",()=>
            { 
                fnResolverProblema();
            })

        // aqui delegue el evento click en una arrow funcion //
        idBtnCalcular.addEventListener("click",()=>
            {
                fnResolverProblema();
            })


    })