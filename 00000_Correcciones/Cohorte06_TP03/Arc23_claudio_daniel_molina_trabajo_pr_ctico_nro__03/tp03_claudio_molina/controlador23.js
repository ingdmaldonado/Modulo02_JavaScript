
/* Ejercicio Nro. 23 */

import { calcularImporteAgua } from "./modelo.js";

window.onload = () => {
    console.log(`la aplicación corriendo`);
    const estadoAplicacion = {
        idmetrosCubicos: 0,
    };
    const idmetrosCubicos = document.querySelector("#idmetrosCubicos");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    
    idmetrosCubicos.oninput = () => {
        estadoAplicacion.idmetrosCubicos = Number(idmetrosCubicos.value);
        console.log(estadoAplicacion);
    };
    
    idBtnCalcular.onclick = () => {
        let importe = calcularImporteAgua(estadoAplicacion.idmetrosCubicos);
        idResultado.textContent = `Importe a pagar: $${importe.toFixed(2)}`;
        console.log(importe);
    };

        /* delegando el evento click del boton en una arrow function y convirtiendo el estado a JSON */

    idBtnGuardar.onclick = () => {
        let metrosCubicosaGuardar = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datoListo", metrosCubicosaGuardar);
        console.log(metrosCubicosaGuardar);
    }

    idBtnRecuperar.onclick = () => {
        let metrosCubicosaGuardar = localStorage.getItem("datoListo");
        console.log(metrosCubicosaGuardar);
    
        /* convertir a objeto el valor recuperado del localStorage */

        let metrosCubicosRecuperados = JSON.parse(metrosCubicosaGuardar);
        console.log(metrosCubicosRecuperados);
       
       /* Acá restauro los valores en el estado de la aplicación y en el input para que se vea reflejado lo recuperado del localStorage */ 
       idmetrosCubicos.value = metrosCubicosRecuperados.idmetrosCubicos; 
       idResultado.textContent = `Importe a pagar: $${calcularImporteAgua(metrosCubicosRecuperados.idmetrosCubicos).toFixed(2)}`; 


    };

};



