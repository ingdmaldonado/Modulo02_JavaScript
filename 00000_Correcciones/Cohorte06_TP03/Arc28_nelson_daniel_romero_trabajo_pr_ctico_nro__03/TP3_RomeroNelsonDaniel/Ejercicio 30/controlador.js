import {verificarEspacios} from "./modelo.js"

const estadoAplicacion = {
    cadena : ""
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    if(datosJSON){
        let datosMemoria = JSON.parse(datosJSON);
        cadena.value = datosMemoria.cadena;
        estadoAplicacion.cadena = datosMemoria.cadena;
    }
}

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    console.log(datosJSON)///////////////////////////////////////
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const cadena = document.querySelector("#cadena");
    const botonCalcular = document.querySelector("#botonCalcular");
    const resultado = document.querySelector("#resultado");

    recuperarEstado();

    cadena.oninput = () => {
        if(cadena.value.length >= 0){
            estadoAplicacion.cadena = cadena.value;
            guardarEstado();
        }
    }

    botonCalcular.onclick = () => {
        if(cadena.value.length > 0){
            resultado.textContent = `El mensaje tiene ${verificarEspacios(estadoAplicacion.cadena.toLowerCase()) ? "tres o más" : "menos de tres"} espacios`;
        }
        else
        {
            resultado.textContent = "No se puede realizar la verificación";
        }
    }

    window.onkeydown = (tecla) => {
        if(tecla.key === "Enter")
        {
            botonCalcular.onclick();
        }
    }
}