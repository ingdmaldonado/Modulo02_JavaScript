


// controlador31.js

import { noTieneNumeros } from "./modelo.js";


const estadoAplicacion = {

    texto: ""
};



const idTexto = document.querySelector("#idTexto");
const idBtnVerificar = document.querySelector("#idBtnVerificar");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");



idTexto.oniput = () => {

    estadoAplicacion.texto = idTexto.value;
};



idBtnVerificar.onclick = () => {

    let respuesta = noTieneNumeros(idTexto.value);

    idResultado.textContent =
    "Resultado: " + respuesta;
};


idBtnGuardar.onclick = () => {

    let datosJSON = JSON.stringify(estadoAplicacion);

    localStorage.setItem("datosAPP", datosJSON);

};


idBtnRecuperar.onclick = () => {

    let datosJSON = localStorage.getItem("datosAPP");

    if (datosJSON !== null) {

        let datosObjeto = JSON.parse(datosJSON);

        idTexto.value = datosObjeto.texto;

        estadoAplicacion.texto = datosObjeto.texto;

        console.log(datosJSON);
        console.log(datosObjeto);

        

    }
};