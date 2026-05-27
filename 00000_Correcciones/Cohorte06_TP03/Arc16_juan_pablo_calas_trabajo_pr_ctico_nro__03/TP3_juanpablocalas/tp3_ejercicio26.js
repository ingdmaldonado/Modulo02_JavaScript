import {fnCalcularDosis, fnGuardarEstado,fnRecuperarEstado } from "./modelo.js";

window.onload = ()=>{

    console.log(`Arranca`)
    const EstadoAplicacion = {Glucosa:0,Peso:0,Tipo:0};
    const IdNivelGlucosa = document.querySelector("#IdNivelGlucosa");
    const IdPesoCorporal = document.querySelector("#IdPesoCorporal");
    const IdTipoDUno = document.querySelector("#IdTipoDUno");
    const IdTipoDDos = document.querySelector("#IdTipoDDos");

    const IdCargaDatos = document.querySelector("#IdCargaDatos");
    const IdInsulina = document.querySelector("#IdInsulina")
   
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
console.log(`Paso aqui`)

IdNivelGlucosa.oninput=()=>{
        EstadoAplicacion.Glucosa = IdNivelGlucosa.value;
    };

    IdPesoCorporal.oninput=()=>{
        EstadoAplicacion.Peso = IdPesoCorporal.value;
    };    

    IdTipoDUno.onchange = ()=>{
        EstadoAplicacion.Tipo = 1;
    };

    IdTipoDDos.onchange = ()=>{
        EstadoAplicacion.Tipo = 2;
    };

    IdCargaDatos.onclick = ()=>{
        console.log(EstadoAplicacion)
        let DosisInsulina = fnCalcularDosis(EstadoAplicacion.Glucosa,EstadoAplicacion.Peso,EstadoAplicacion.Tipo)
        IdInsulina.textContent = `La Dosis Necesaria es ${DosisInsulina}`
    };

    idBtnGuardar.onclick = ()=>{
        fnGuardarEstado(EstadoAplicacion);
        let estadoJSON = JSON.stringify(EstadoAplicacion);
        console.log(estadoJSON);

        localStorage.setItem("estadoApp",estadoJSON);
    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{
        let DatosRecuperados = fnRecuperarEstado(EstadoAplicacion);   
        console.log(DatosRecuperados);   
   
    };

};