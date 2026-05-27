import {fnInsulinaRecomendad} from "./modelo.js";
/* Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
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
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente*/




window.onload = ()=>{
    console.log (`La pagina esta cargada =P`);
    const estadoAplicacion ={pesoCorporal : 0,
                            nivelGlucosa :0,
                            idTipoDiabete:0,};

    const idPesoCorporal = document.querySelector ("#idPesoCorporal");
    const idNivelGlucosa = document.querySelector ("#idNivelGlucosa");
    const idTipoDiabete = document.querySelector ("#idTipoDiabete");
    const btnCalcular = document.querySelector ("#btnCalcular");
    const resultado = document.querySelector ("#resultado");
    const btnGuardar = document.querySelector ("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");

//inputs
    idPesoCorporal.oninput = ()=>{
        estadoAplicacion.pesoCorporal = Number(idPesoCorporal.value);
        console.log(estadoAplicacion);

    };

    idNivelGlucosa.oninput = ()=>{
        estadoAplicacion.nivelGlucosa = Number(idNivelGlucosa.value);
        console.log(estadoAplicacion);
    };
    
    idTipoDiabete.oninput = ()=>{

        estadoAplicacion.idTipoDiabete = Number(idTipoDiabete.value);
        console.log(estadoAplicacion.idTipoDiabete);
    };
//onclick
    btnCalcular.onclick =()=>{
        let calculo =fnInsulinaRecomendad ( estadoAplicacion.idTipoDiabete,estadoAplicacion.pesoCorporal,estadoAplicacion.nivelGlucosa);
    
        resultado.textContent = `La dosis de insulina ${calculo}`;

    };
//boton guardar recuperar
    btnGuardar.onclick = ()=>{
        
        let datosJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoAplicacion);
        localStorage.setItem("misDatos", datosJSON);
    }    

    btnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem("misDatos");
        if(datosJSON)
        {
            console.log(datosJSON);
            let objeto = JSON.parse(datosJSON);
            console.log(objeto);
            idPesoCorporal.value = objeto.pesoCorporal;
            idNivelGlucosa.value = objeto.nivelGlucosa;
            idTipoDiabete.value = objeto.idTipoDiabete ;           
         }

    };




    


};