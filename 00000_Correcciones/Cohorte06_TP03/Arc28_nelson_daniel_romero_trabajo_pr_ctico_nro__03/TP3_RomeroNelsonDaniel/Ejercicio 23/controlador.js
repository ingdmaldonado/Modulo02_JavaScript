import {calcularImporteAgua} from "./modelo.js"

const estadoAplicacion = {
    consumo : 0
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    if(datosJSON){
        let datosMemoria = JSON.parse(datosJSON);
        consumo.value = datosMemoria.consumo;
        estadoAplicacion.consumo = datosMemoria.consumo;
    }
}

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const consumo = document.querySelector("#consumo");
    const botonCalcular = document.querySelector("#botonCalcular");
    const resultado = document.querySelector("#resultado");

    recuperarEstado();

    consumo.oninput = () => {
        if(Number(consumo.value) >= 0){
            estadoAplicacion.consumo = Number(consumo.value);
            guardarEstado();
        }
        else
        {
            resultado.textContent = "El consumo debe ser mayor a cero";
        }
    }

    botonCalcular.onclick = () => {
        if(Number(consumo.value) > 0){
            resultado.textContent = `El importe total es de ${calcularImporteAgua(estadoAplicacion.consumo).toFixed(2)}`;
        }
        else
        {
            resultado.textContent = "No se puede realizar el cálculo";
        }
    }

    window.onkeydown = (tecla) => {
        if(tecla.key === "Enter")
        {
            botonCalcular.onclick();
        }
    }
}