import { contarVocales } from "./modelo.js";

const estadoAplicacion = {

    texto: ""
};

// Elementos HTML
const idTexto = document.querySelector("#idTexto");
const idBtnContar = document.querySelector("#idBtnContar");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idResultado = document.querySelector("#idResultado");

// Capturar texto
idTexto.oninput = () => {

    estadoAplicacion.texto = idTexto.value;
};

// Contar vocales
idBtnContar.onclick = () => {

    let cantidad = contarVocales(

        idTexto.value
    );

    idResultado.textContent =
        "Cantidad de vocales: " + cantidad;
};

// Guardar en LocalStorage
idBtnGuardar.onclick = () => {

    let datosJSON = JSON.stringify(estadoAplicacion);

    localStorage.setItem("datosAPP", datosJSON);

};

// Recuperar datos
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