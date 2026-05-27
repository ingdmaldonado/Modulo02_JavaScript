import {evaluar, validar} from "./modelo.js"

const estadoAplicacion = {
    nota : 0
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    if (datosJSON){
        let datosMemoria = JSON.parse(datosJSON);
        nota.value = datosMemoria.nota;
        estadoAplicacion.nota = datosMemoria.nota;
    }
}

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const nota = document.querySelector("#nota");
    const botonCalcular = document.querySelector("#botonCalcular");
    const resultado = document.querySelector("#resultado");

    recuperarEstado();

    nota.oninput = () => {
        if(validar(Number(nota.value))){
            estadoAplicacion.nota = Number(nota.value);
            guardarEstado();
            resultado.textContent = "";
        }
        else
        {
            resultado.textContent = "El valor de la nota debe estar comprendido entre 0 y 10";
        }
    }

    botonCalcular.onclick = () => {
        if(validar(Number(nota.value))){
            resultado.textContent = evaluar(estadoAplicacion.nota);
        }
        else
        {
            resultado.textContent = "No es posible realizar la evaluación";
        }
    }

    window.onkeydown = (tecla) => {
        if(tecla.key === "Enter"){
            botonCalcular.onclick();
        }
    }
}