import {calcularPrecioVenta} from "./model.js";

//declarado globalmente para no pasar como parámetro
const estadoAplicacion = {
    precio: 0,
    porcentaje: 0
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    if (datosJSON){
        let datosMemoria = JSON.parse(datosJSON);
        precio.value = datosMemoria.precio;
        porcentaje.value = datosMemoria.porcentaje;

        //se muestran resultados erróneos si el usuario preciona el botón calcular sin que se sobreescriban los datos de la aplicación
        estadoAplicacion.precio = datosMemoria.precio;
        estadoAplicacion.porcentaje = datosMemoria.porcentaje;
    }
}

const guardaEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const precio = document.querySelector("#precio");
    const porcentaje = document.querySelector("#porcentaje");
    const resultado = document.querySelector("#resultado");
    const botonCalcular = document.querySelector("#botonCalcular");

    recuperarEstado();

    precio.oninput = () => {
        estadoAplicacion.precio = Number(precio.value);
        guardaEstado();
    }

    porcentaje.oninput = () => {
        estadoAplicacion.porcentaje = Number(porcentaje.value);
        guardaEstado();
    }

    botonCalcular.onclick = () => {
        resultado.textContent = `El precio de venta debe ser de: ${calcularPrecioVenta(estadoAplicacion.precio, estadoAplicacion.porcentaje)}`;
    }
}