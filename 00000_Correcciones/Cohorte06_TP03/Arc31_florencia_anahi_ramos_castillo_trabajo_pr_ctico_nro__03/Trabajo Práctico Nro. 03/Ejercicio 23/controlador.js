import {calcularImporteAgua} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        metrosCubicos:0
    };

    /* captura de elementos */

    const idMetros = document.querySelector("#idMetros");

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");

    /* input metros cubicos */

    idMetros.oninput = ()=>{

        estadoAplicacion.metrosCubicos = Number(idMetros.value);

        console.log(estadoAplicacion);

    };

    /* boton calcular */

    idBtnCalcular.onclick = ()=>{

        let resultado = calcularImporteAgua(
            estadoAplicacion.metrosCubicos
        );

        console.log(resultado);

        idResultado.textContent = `Importe Total ${resultado}`;

    };

    /* boton guardar */

    idBtnGuardar.onclick = ()=>{

        let estadoJSON = JSON.stringify(estadoAplicacion);

        localStorage.setItem("estadoApp",estadoJSON);

        console.log("datos guardados");

    };

    /* boton recuperar */

    idBtnRecuperar.onclick = ()=>{

        let datosRecuperados = localStorage.getItem("estadoApp");

        if(datosRecuperados)
        {
            let estadoObjeto = JSON.parse(datosRecuperados);

            console.log(estadoObjeto);

            idMetros.value = estadoObjeto.metrosCubicos;

            estadoAplicacion.metrosCubicos = estadoObjeto.metrosCubicos;
        }

    };

};