import {fnContadorConsonantes} from "./modelo28.js";

const inputTexto = document.getElementById("idTexto");

const boton = document.getElementById("idBotonCalcular");

const resultado = document.getElementById("resultado");

const recuperar = document.getElementById("recuperar");


const estadoAplicacion = {

    texto : ""
};

inputTexto.oninput = () => {

    estadoAplicacion.texto = inputTexto.value;

    localStorage.setItem("estadoARecuperar", JSON.stringify(estadoAplicacion));

    console.log(`Aqui se esta tomando el texto que ingresa el usuario: ${inputTexto.value}`);
}

boton.onclick = () => { 

    const texto = inputTexto.value;

    const cantidadConsonantes= fnContadorConsonantes(texto);

    resultado.textContent = `La cantidad de consonantes en el texto ingresado es la siguiente: ${cantidadConsonantes}`;
}

recuperar.onclick = () => {

    const datoARecuperar = localStorage.getItem("estadoARecuperar");

    if (datoARecuperar){

        const estadoARecuperar = JSON.parse(datoARecuperar);

        inputTexto.value = estadoARecuperar.texto;

    }
}