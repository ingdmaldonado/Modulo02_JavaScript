import {fnCalcularSobreTasa} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        importe:0,
        tipoBebida:1
    };

    /* captura de elementos */

    const idImporte = document.querySelector("#idImporte");
    const idTipoBebida = document.querySelector("#idTipoBebida");

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");

    /* input importe */

    idImporte.oninput = ()=>{

        estadoAplicacion.importe = Number(idImporte.value);

        console.log(estadoAplicacion);

    };

    /* select tipo bebida */

    idTipoBebida.onchange = ()=>{

        estadoAplicacion.tipoBebida = Number(idTipoBebida.value);

        console.log(estadoAplicacion);

    };

    /* boton calcular */

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularSobreTasa(
            estadoAplicacion.importe,
            estadoAplicacion.tipoBebida
        );

        console.log(resultado);

        idResultado.textContent = `La sobre tasa es ${resultado}`;

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

            idImporte.value = estadoObjeto.importe;
            idTipoBebida.value = estadoObjeto.tipoBebida;

            estadoAplicacion.importe = estadoObjeto.importe;
            estadoAplicacion.tipoBebida = estadoObjeto.tipoBebida;
        }

    };

};