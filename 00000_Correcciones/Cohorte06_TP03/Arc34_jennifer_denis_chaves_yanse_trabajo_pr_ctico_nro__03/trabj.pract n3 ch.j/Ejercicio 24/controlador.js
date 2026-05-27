import {fnCalcularTasaSubsuelo} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        importeBase:0
    };

    /* captura de elementos */

    const idImporteBase = document.querySelector("#idImporteBase");

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");

    /* input importe base */

    idImporteBase.oninput = ()=>{

        estadoAplicacion.importeBase = Number(idImporteBase.value);

        console.log(estadoAplicacion);

    };

    /* boton calcular */

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularTasaSubsuelo(
            estadoAplicacion.importeBase
        );

        console.log(resultado);

        idResultado.textContent = `La tasa de subsuelo es ${resultado}`;

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

            idImporteBase.value = estadoObjeto.importeBase;

            estadoAplicacion.importeBase = estadoObjeto.importeBase;
        }

    };

};