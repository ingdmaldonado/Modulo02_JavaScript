import {fnVerificarNumeros} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        texto:""
    };

    /* captura de elementos */

    const idTexto = document.querySelector("#idTexto");

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");

    /* input texto */

    idTexto.oninput = ()=>{

        estadoAplicacion.texto = idTexto.value;

        console.log(estadoAplicacion);

    };

    /* boton verificar */

    idBtnCalcular.onclick = ()=>{

        let resultado = fnVerificarNumeros(
            estadoAplicacion.texto
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

            idTexto.value = estadoObjeto.texto;

            estadoAplicacion.texto = estadoObjeto.texto;
        }

    };

};