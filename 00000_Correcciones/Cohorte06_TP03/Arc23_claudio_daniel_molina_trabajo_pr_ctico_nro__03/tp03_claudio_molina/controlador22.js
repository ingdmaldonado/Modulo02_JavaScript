
/* Acá importo la función calcularImpuesto desde el modelo.js */

import {calcularImpuesto} from "./modelo.js";

window.onload = () => {
    console.log(`la aplicación corriendo`);

    const estadoAplicacion = {   
        
        idtipoBebida:0,
        idimporteBase:0,
    };

    const idimporteBase = document.querySelector("#idimporteBase");
    const idtipoBebida = document.querySelector("#idtipoBebida");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    
    idtipoBebida.oninput = () => {
        estadoAplicacion.idtipoBebida = Number(idtipoBebida.value);
        console.log(estadoAplicacion);
    };


    idimporteBase.oninput = () => {
        estadoAplicacion.idimporteBase = Number(idimporteBase.value);
        console.log(estadoAplicacion);
    };
    

    idBtnCalcular.onclick = () => {
        let impuesto = calcularImpuesto(estadoAplicacion.idimporteBase, estadoAplicacion.idtipoBebida);
        idResultado.textContent = `Sobre Tasa: ${impuesto} %`;
        console.log(impuesto);

    };

    /* delegando el evento click del boton en una arrow function y convirtiendo el estado a JSON */

    idBtnGuardar.onclick = () => {
        let tasaAguardar = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datoListo", tasaAguardar);
        console.log(tasaAguardar);
    }

    idBtnRecuperar.onclick = () => {
        let tasaAguardar = localStorage.getItem("datoListo");
        console.log(tasaAguardar);

    /* convertir a objeto el valor recuperado del localStorage */
        let tasaRecuperada = JSON.parse(tasaAguardar);
        console.log(tasaRecuperada);

         /* Acá restauro los valores en el estado de la aplicación y en el input para que se vea reflejado lo recuperado del localStorage */
        idtipoBebida.value = tasaRecuperada.idtipoBebida;
        idimporteBase.value = tasaRecuperada.idimporteBase;
    };
};

