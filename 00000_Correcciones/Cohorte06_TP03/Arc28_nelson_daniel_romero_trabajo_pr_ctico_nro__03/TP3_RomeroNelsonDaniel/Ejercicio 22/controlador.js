import {evaluarTasa} from "./modelo.js";

const estadoAplicacion = {
    importe : 0,
    categoria : 0
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion")
    if (datosJSON) {
        let datosMemoria = JSON.parse(datosJSON);
        importe.value = datosMemoria.importe;
        switch (datosMemoria.categoria) {
            case 1:
                aguaPlastico.checked = true;
                break;
            case 2:
                aguaRetornable.checked = true;
                break;
            case 3:
                gaseosaPlastico.checked = true;
                break;
            case 4:
                gaseosaRetornable.checked = true;
                break;
            case 5:
                bebidaEnergetica.checked = true;
                break;
            case 6:
                bebidaSinClasificar.checked = true;
                break;
        }
        estadoAplicacion.importe = datosMemoria.importe;
        estadoAplicacion.categoria = datosMemoria.categoria;
    }
}

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const importe = document.querySelector("#importe");
    const botonCalcular = document.querySelector("#botonCalcular");
    const aguaPlastico = document.querySelector("#aguaPlastico");
    const aguaRetornable = document.querySelector("#aguaRetornable");
    const gaseosaPlastico = document.querySelector("#gaseosaPlastico");
    const gaseosaRetornable = document.querySelector("#gaseosaRetornable");
    const bebidaEnergetica = document.querySelector("#bebidaEnergetica");
    const bebidaSinClasificar = document.querySelector("#bebidaSinClasificar");
    const resultado = document.querySelector("#resultado");

    recuperarEstado();

    importe.oninput = () => {
        if(Number(importe.value) >= 0)
        {
            estadoAplicacion.importe = Number(importe.value);
            guardarEstado();
            resultado.textContent = "";
        }
        else
        {
            resultado.textContent = "El importe debe ser mayor de cero";
        }
    }

    botonCalcular.onclick = () => {
        if (Number(importe.value) > 0) {
            resultado.textContent = `El importe de la tasa es ${evaluarTasa(estadoAplicacion.importe, estadoAplicacion.categoria).toFixed(2)}. Precio final ${(estadoAplicacion.importe + evaluarTasa(estadoAplicacion.importe, estadoAplicacion.categoria)).toFixed(2)}`;
        }
        else
        {
            resultado.textContent = "No es posible realizar el cálculo de la tasa"
        }
    }

    aguaPlastico.onchange = () => {
        estadoAplicacion.categoria = Number(aguaPlastico.value);
        guardarEstado();
    }
    aguaRetornable.onchange = () => {
        estadoAplicacion.categoria = Number(aguaRetornable.value);
        guardarEstado();
    }
    gaseosaPlastico.onchange = () => {
        estadoAplicacion.categoria = Number(gaseosaPlastico.value);
        guardarEstado();
    }
    gaseosaRetornable.onchange = () => {
        estadoAplicacion.categoria = Number(gaseosaRetornable.value);
        guardarEstado();
    }
    bebidaEnergetica.onchange = () => {
        estadoAplicacion.categoria = Number(bebidaEnergetica.value);
        guardarEstado();
    }
    bebidaSinClasificar.onchange = () => {
        estadoAplicacion.categoria = Number(bebidaSinClasificar.value);
        guardarEstado();
    }

    window.onkeydown = (tecla) => {
        if(tecla.key === "Enter"){
            botonCalcular.onclick();
        }
    }
}