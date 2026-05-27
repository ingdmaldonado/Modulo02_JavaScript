


import { fnVerificarSS} from "./modelo29.js";

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

boton.onclick = ()=> {

    const texto = inputTexto.value;

    const verificaSS = fnVerificarSS(texto);

    resultado.textContent =`El texto ingresado tiene al menos dos letras "S"? ${verificaSS}`; ;
}

recuperar.onclick = () => {

    const datoARecuperar = localStorage.getItem("estadoARecuperar");

    if (datoARecuperar){

        const estadoARecuperar = JSON.parse(datoARecuperar);
        inputTexto.value = estadoARecuperar.texto;
    }
}