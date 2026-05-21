import { calcularDosisInsulina } from "./Modelo.js";

/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {Peso:0,Glucosa:0,Tipo:"",dosis:0};

    const NivelGlucosa = document.querySelector("#nivelGlucosa");
    const PesoCorporal = document.querySelector("#pesoCorporal");
    const TipoDiabete1 = document.querySelector("#tipo1");
    const TipoDiabete2 = document.querySelector("#tipo2");

    const btnCalcularInsulina = document.querySelector("#calcularInsulina");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(NivelGlucosa);
    console.log(PesoCorporal);
    console.log(TipoDiabete1);
    console.log(TipoDiabete2);
    console.log(btnCalcularInsulina);    
    console.log(resultado);
    console.log(btnLimpiar);

    /* 4 - Asignar comportamiento a los elementos capturados */
  btnCalcularInsulina.onclick = () => {

        let glucosa = Number(NivelGlucosa.value);
        let peso = Number(PesoCorporal.value);
        let tipo = TipoDiabete1.checked ? "Tipo1" : "Tipo2";

        estadoAplicacion.dosis = calcularDosisInsulina(glucosa,peso,tipo);        
        console.log(estadoAplicacion);
        resultado.innerHTML = `La dosis de insulina recomendada es: ${calcularDosisInsulina(glucosa,peso,tipo)} unidades`;

    }

   

NivelGlucosa.oninput = () => {

        estadoAplicacion.Glucosa = Number(NivelGlucosa.value);        
        console.log(estadoAplicacion);       
    }

PesoCorporal.oninput = () => {

        estadoAplicacion.Peso = Number(PesoCorporal.value);        
        console.log(estadoAplicacion);       
    }

TipoDiabete1.onchange = () => {

        estadoAplicacion.Tipo = TipoDiabete1.checked ? "Tipo1" : "Tipo2";        
        console.log(estadoAplicacion);       
    }

TipoDiabete2.onchange = () => {

        estadoAplicacion.Tipo = TipoDiabete2.checked ? "Tipo2" : "Tipo1";        
        console.log(estadoAplicacion);       
    }

    btnLimpiar.onclick = () => {

        estadoAplicacion.dosis = 0;
        estadoAplicacion.Glucosa = 0;
        estadoAplicacion.Peso = 0;
        estadoAplicacion.Tipo = "";
        console.log(estadoAplicacion);
        resultado.innerHTML = "";
    }

}