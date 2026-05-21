import {promedio, validar} from "./modelo.js"

const estadoAplicacion = {
    primerNota: 0,
    segundaNota: 0,
    tercerNota: 0,
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    if(datosJSON){
        let datosMemoria = JSON.parse(datosJSON);
        primerNota.value = datosMemoria.primerNota;
        segundaNota.value = datosMemoria.segundaNota;
        tercerNota.value = datosMemoria.tercerNota;
        estadoAplicacion.primerNota = datosMemoria.primerNota;
        estadoAplicacion.segundaNota = datosMemoria.segundaNota;
        estadoAplicacion.tercerNota = datosMemoria.tercerNota;
    }
}

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const primerNota = document.querySelector("#primerNota");
    const segundaNota = document.querySelector("#segundaNota");
    const tercerNota = document.querySelector("#tercerNota");
    const botonCalcular = document.querySelector("#botonCalcular");
    const resultado = document.querySelector("#resultado");
    
    recuperarEstado();

    primerNota.oninput = () => {
        let nota = Number(primerNota.value);
        if (validar(nota)) {
            estadoAplicacion.primerNota = nota;
            guardarEstado();
            resultado.textContent = "";
        }
        else
        {
            resultado.textContent = "El valor de la nota debe esta comprendido entre 0 y 10";
        }
    }

    segundaNota.oninput = () => {
        let nota = Number(segundaNota.value);
        if (validar(nota)) {
            estadoAplicacion.segundaNota = nota;
            guardarEstado();
            resultado.textContent = "";
        }
        else
        {
            resultado.textContent = "El valor de la nota debe esta comprendido entre 0 y 10";
        }
    }

    tercerNota.oninput = () => {
        let nota = Number(tercerNota.value);
        if (validar(nota)) {
            estadoAplicacion.tercerNota = nota;
            guardarEstado();
            resultado.textContent = "";
        }
        else
        {
            resultado.textContent = "El valor de la nota debe esta comprendido entre 0 y 10";
        }
    }

    botonCalcular.onclick = () => {
        if (validar(Number(primerNota.value)) && validar(Number(segundaNota.value)) && validar(Number(tercerNota.value))){
            resultado.textContent = `La nota promedio es ${promedio(estadoAplicacion.primerNota, estadoAplicacion.segundaNota, estadoAplicacion.tercerNota).toFixed(2)}`;
        }
        else
        {
            resultado.textContent = "No se puede calcular debido al ingreso de valores inválidos";
        }
    }
}