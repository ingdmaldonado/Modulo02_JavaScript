import { calcularImporteAgua } from "./modulo.js";

const estadoAplicacion = {
    metrosCubicos : 0
}

window.onload = () => {
    const ingresoMetrosCubicos = document.querySelector("#idIngresoMetrosCubicos");
    const botonCalcular = document.querySelector("#idBtnCalcular");
    const respuesta = document.querySelector("#idRespuesta");
    const botonGuardar = document.querySelector("#idBtnGuardar");
    const botonRecuperar = document.querySelector("#idBtnRecuperar");


botonCalcular.onclick = () => {
    respuesta.textContent = calcularImporteAgua(ingresoMetrosCubicos.value);
    estadoAplicacion.metrosCubicos = ingresoMetrosCubicos.value;
}

botonGuardar.onclick = () => {
    fnGuardarEstado();
}
botonRecuperar.onclick = () => {
    fnRecuperarEstado();
}

const fnGuardarEstado = () => {
    localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion))
}
const fnRecuperarEstado = () => {
    let datos;
    let recupera = localStorage.getItem("estadoApp");
    if (recupera) {
        datos = JSON.parse(recupera);
        console.log(recupera);
        console.log(datos.metrosCubicos);

        ingresoMetrosCubicos.value = datos.metrosCubicos;
    }
}



}