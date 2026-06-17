import {fnAnalizarNota} from "./modelo.js";

window.onload = ()=>{

    const estadoAplicacion = {

        nota:0,

    };

    const idNumero = document.querySelector("#idNumero");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");
    
    idNumero.oninput = ()=>{

        estadoAplicacion.nota = Number(idNumero.value);
        console.log(estadoAplicacion);
    };


    idBtnAceptar.onclick = ()=>{

       let resultado = fnAnalizarNota(estadoAplicacion.nota);
       console.log(resultado);

       idResultado.textContent = `Nota Ingresada ${estadoAplicacion.nota} resultado: ${resultado}`;  resultado;

    };

    idBtnGuardar.onclick = ()=>{

        // convertimos a JSON el estado de la aplicación //
        let datosJSON = JSON.stringify(estadoAplicacion);

        // lo mostramos
        console.log(datosJSON);

        // guardar esos datos en el localStorage //
        localStorage.setItem("datosAPP",datosJSON);


    };

    idBtnRecuperar.onclick = ()=>{

        // aqui recupero del localstorage los datos en formato JSON //
        let datosJSON = localStorage.getItem("datosAPP");

       

        // convertimos los datos JSON a objeto JavaScript //.
        let datosObjeto = JSON.parse(datosJSON);

        // aqui lo muestro //
        console.log(datosJSON);
        console.log(datosObjeto);

        // aqui voy a completar los datos del formulario //

        idNumero.value = datosObjeto.nota;

    };

};