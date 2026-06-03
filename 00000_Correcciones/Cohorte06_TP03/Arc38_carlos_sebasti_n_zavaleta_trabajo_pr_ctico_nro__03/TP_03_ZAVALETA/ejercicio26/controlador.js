import { calculoDosisRecomendada } from "./modelo.js";
console.log(`Dosis recomendada: ${calculoDosisRecomendada(182,80,1)} mg`); // 131 es la respuesta
const estadoAplicacion = {
    nivelGlucosa: 0,
    pesoCorporal: 0,
    tipoDiabetes: 1 //asigno 1 por defecto

}

window.onload = () => {
    const nivelGlucosa = document.querySelector("#idNIvelGlucosa");
    const pesoCorporal = document.querySelector("#idPesoCorporal");
    const tipoDiabetes = document.querySelector("#idTipoDiabetes");
    const respuesta = document.querySelector("#idRespuesta");
    const botonCalcular = document.querySelector("#idBtnCalcular");
    const GuardarDatos  = document.querySelector("#idBtnGuardarDatos");
    const RecuperarDatos = document.querySelector("#idBtnRecuperarDatos");

    nivelGlucosa.oninput = () => {
        estadoAplicacion.nivelGlucosa = Number(nivelGlucosa.value);
        console.log(nivelGlucosa.value);
        console.log(estadoAplicacion.nivelGlucosa,estadoAplicacion.pesoCorporal,estadoAplicacion.tipoDiabetes);
    }
    pesoCorporal.oninput = () =>{
        estadoAplicacion.pesoCorporal = Number(pesoCorporal.value);
    }
    tipoDiabetes.onchange = () => {
        estadoAplicacion.tipoDiabetes = Number(tipoDiabetes.value);
    }

    botonCalcular.onclick = () => {
       
        respuesta.textContent = `El resultado es: ${calculoDosisRecomendada(estadoAplicacion.nivelGlucosa,estadoAplicacion.pesoCorporal,estadoAplicacion.tipoDiabetes)}`;
    }

    const fnGuardarEstado = () => {
        localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
        console.log(`Guardo estado Aplicacion: ${estadoAplicacion}`);
    }

    const fnRecuperarEstado = () => {        
        let datos;
        let recuperar = localStorage.getItem("estadoApp");
        if (recuperar){
            datos = JSON.parse(recuperar);
            nivelGlucosa.value = datos.nivelGlucosa;
            pesoCorporal.value = datos.pesoCorporal;
            tipoDiabetes.value = datos.tipoDiabetes;            
        }
    }

    GuardarDatos.onclick = () => {
        fnGuardarEstado();
    }
    RecuperarDatos.onclick = () => {
        fnRecuperarEstado();
    }




}