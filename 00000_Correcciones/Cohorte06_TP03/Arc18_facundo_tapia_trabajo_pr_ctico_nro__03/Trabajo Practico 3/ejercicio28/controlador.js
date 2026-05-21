




import { contarConsonantes } from "./modelo.js";


// estado de la aplicación
const estadoAplicacion = {

    texto: ""
};



const idTexto = document.querySelector("#idTexto");
const idBtnContar = document.querySelector("#idBtnContar");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const  idResultado = document.querySelector("#idResultado");


idTexto.oninput = () => {

    estadoAplicacion.texto = idTexto.value;
};



idBtnContar.onclick = () => {

    let cantidad = contarConsonantes(

        idTexto.value
    );

    idResultado.textContent =
    "Cantidad de consonantes: " + cantidad;
};

// Guardar en LocalStorage
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
