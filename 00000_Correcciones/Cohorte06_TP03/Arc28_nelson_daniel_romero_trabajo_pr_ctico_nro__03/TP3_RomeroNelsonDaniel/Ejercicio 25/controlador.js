import {calcularTasaFiscalizacion} from "./modelo.js"

const estadoAplicacion = {
    importeBase : 0
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    if(datosJSON){
        let datosMemoria = JSON.parse(datosJSON);
        importeBase.value = datosMemoria.importeBase;
        estadoAplicacion.importeBase = datosMemoria.importeBase;
    }
}

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const importeBase = document.querySelector("#importeBase");
    const botonCalcular = document.querySelector("#botonCalcular");
    const resultado = document.querySelector("#resultado");

    recuperarEstado();

    importeBase.oninput = () => {
        if(Number(importeBase.value) >= 0){
            estadoAplicacion.importeBase = Number(importeBase.value);
            guardarEstado();
        }
        else
        {
            resultado.textContent = "El importe base debe ser mayor a cero";
        }
    }

    botonCalcular.onclick = () => {
        if(Number(importeBase.value) > 0){
            resultado.textContent = `La tasa de fiscalización ENRE es de ${calcularTasaFiscalizacion(estadoAplicacion.importeBase).toFixed(2)}`;
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