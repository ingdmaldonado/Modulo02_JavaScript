import { fnImporteBase } from "./modelo.js";

const estadoAplicacion = {
    importe : 0
}

window.onload = () => {;
    const importe = document.querySelector("#idImporteBase");
    const botonCalcular = document.querySelector("#idBtnCalcular");
    const resultado = document.querySelector("#idResultado");
    const botonGuardar = document.querySelector("#idBtnGuardar");
    const botonRecuperar = document.querySelector("#idBtnRecuperar");

    
    botonCalcular.onclick = () => {
        resultado.textContent = fnImporteBase(importe.value);
        estadoAplicacion.importe = Number(resultado.textContent);
        console.log(importe.value);
        console.log(estadoAplicacion.importe);
    }

    const fnGuardar = () => {
        localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
    }
    const fnRecuperar = () => {
        let datos;
        let recupera = localStorage.getItem("estadoApp");
        if (recupera){
            datos = JSON.parse(recupera);
            importe.value = datos.importe;
        }
    }
    botonGuardar.onclick = () => {
        fnGuardar();
    }
    botonRecuperar.onclick = () => {
        fnRecuperar();
    }

    }