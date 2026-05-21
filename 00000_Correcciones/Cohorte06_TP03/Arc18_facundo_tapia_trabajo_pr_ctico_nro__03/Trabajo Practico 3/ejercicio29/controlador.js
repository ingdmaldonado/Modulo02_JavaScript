


import { tieneDosS } from "./modelo.js";


// estado de la aplicación
const estadoAplicacion = {

    palabra: ""
};


// variables
const idPalabra = document.querySelector("#idPalabra");
const idBtnVerificar = document.querySelector("#idBtnVerificar");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");


idPalabra.onclick = () => {

    estadoAplicacion.idPalabra = idPalabra.value;
};


idBtnVerificar.onclick = () => {

    let respuesta = tieneDosS(idPalabra.value);

    idResultado.textContent = "Resultado: " + respuesta;
}



idBtnGuardar.onclick = () => {

    let datosJSON = JSON.stringify(estadoAplicacion);

    localStorage.setItem("datosAPP", datosJSON);

};


idBtnRecuperar.onclick = () => {

    let datosJSON = localStorage.getItem("datosAPP");

    if (datosJSON !== null) {

        let datosObjeto = JSON.parse(datosJSON);

        
        idPalabra.value = datosObjeto.palabra;

    
        estadoAplicacion.palabra = datosObjeto.palabra;


        console.log(datosJSON);
        console.log(datosObjeto);
    }
}