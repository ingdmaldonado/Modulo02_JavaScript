import {fnBuscarLetraS} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        palabra:""
    };

    /* captura de elementos */

    const idPalabra = document.querySelector("#idPalabra");

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");

    /* input palabra */

    idPalabra.oninput = ()=>{

        estadoAplicacion.palabra = idPalabra.value;

        console.log(estadoAplicacion);

    };

    /* boton verificar */

    idBtnCalcular.onclick = ()=>{

        let resultado = fnBuscarLetraS(
            estadoAplicacion.palabra
        );

        console.log(resultado);

        idResultado.textContent = `Resultado ${resultado}`;

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

            idPalabra.value = estadoObjeto.palabra;

            estadoAplicacion.palabra = estadoObjeto.palabra;
        }

    };

};