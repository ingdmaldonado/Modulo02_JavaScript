
/* Ejercicio Nro. 24 */

import { calcularTasaSubsuelo } from "./modelo.js";


window.onload = () => {
    console.log(`la aplicación corriendo`);
    const estadoAplicacion = {
        idimporteBase: 0,
    };
    const idimporteBase = document.querySelector("#idimporteBase");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    
    idimporteBase.oninput = () => {
        estadoAplicacion.idimporteBase = Number(idimporteBase.value);
        console.log(estadoAplicacion);
    };
    
    idBtnCalcular.onclick = () => {
        let importeFinal = calcularTasaSubsuelo(estadoAplicacion.idimporteBase);
        idResultado.textContent = `La Tasa de Subsuelo es: $${importeFinal.toFixed(2)}`;
        console.log(importeFinal);
    };

        /* delegando el evento click del boton en una arrow function y convirtiendo el estado a JSON */

    idBtnGuardar.onclick = () => {
        let importeBaseaGuardar = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datoListo", importeBaseaGuardar);
        console.log(importeBaseaGuardar);
    };

    idBtnRecuperar.onclick = () => {
        let importeBaseaGuardar = localStorage.getItem("datoListo");
        console.log(importeBaseaGuardar);
        
        /* convertir a objeto el valor recuperado del localStorage */
        let importeBaseRecuperados = JSON.parse(importeBaseaGuardar);
        console.log(importeBaseRecuperados);
        
        /* Acá restauro los valores en el estado de la aplicación y en el input para que se vea reflejado lo recuperado del localStorage */
         idimporteBase.value = importeBaseRecuperados.idimporteBase;
            idResultado.textContent = `La Tasa de Subsuelo es: $${calcularTasaSubsuelo(importeBaseRecuperados.idimporteBase).toFixed(2)}`;
    };

};

