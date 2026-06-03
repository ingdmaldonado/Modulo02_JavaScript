import { devolverTasaEnre } from "./modelo.js";

const estadoAplicacion = {
    importe : 0
}

window.onload = () => {
    const importeBase = document.querySelector("#idImporteBase");
    const calcular = document.querySelector("#idBtnCalcular");
    const resultado = document.querySelector("#idResultado");
    const botonGuardar = document.querySelector("#idBtnGuardar");
    const botonRecuperar = document.querySelector("#idBtnRecuperar");

const fnGuardarDatos = () => {
    localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
}
const fnRecuperarDatos = () => {
    let datos;
    let recupera = localStorage.getItem("estadoApp");
    if (recupera){
        datos = JSON.parse(recupera);
        importeBase.value = datos.importe; 
    }
}

calcular.onclick = () => {
    resultado.textContent = devolverTasaEnre(importeBase.value);
    estadoAplicacion.importe = importeBase.value;
}

botonGuardar.onclick = () => {
    fnGuardarDatos();
}
botonRecuperar.onclick = () => {
    fnRecuperarDatos();
}

}