import {fnCalcularInsulina} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        glucosa:0,
        peso:0,
        tipoDiabetes:1
    };

    /* captura de elementos */

    const idGlucosa = document.querySelector("#idGlucosa");
    const idPeso = document.querySelector("#idPeso");
    const idTipoDiabetes = document.querySelector("#idTipoDiabetes");

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");

    /* input glucosa */

    idGlucosa.oninput = ()=>{

        estadoAplicacion.glucosa = Number(idGlucosa.value);

        console.log(estadoAplicacion);

    };

    /* input peso */

    idPeso.oninput = ()=>{

        estadoAplicacion.peso = Number(idPeso.value);

        console.log(estadoAplicacion);

    };

    /* select tipo diabetes */

    idTipoDiabetes.onchange = ()=>{

        estadoAplicacion.tipoDiabetes = Number(idTipoDiabetes.value);

        console.log(estadoAplicacion);

    };

    /* boton calcular */

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularInsulina(
            estadoAplicacion.glucosa,
            estadoAplicacion.peso,
            estadoAplicacion.tipoDiabetes
        );

        console.log(resultado);

        idResultado.textContent = `La dosis recomendada es ${resultado}`;

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

            idGlucosa.value = estadoObjeto.glucosa;
            idPeso.value = estadoObjeto.peso;
            idTipoDiabetes.value = estadoObjeto.tipoDiabetes;

            estadoAplicacion.glucosa = estadoObjeto.glucosa;
            estadoAplicacion.peso = estadoObjeto.peso;
            estadoAplicacion.tipoDiabetes = estadoObjeto.tipoDiabetes;
        }

    };

};