import { fnHayNumeros} from "./modelo31.js";

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
    const hayNumeros = fnHayNumeros(texto);

    resultado.textContent = `El texto ingresado tiene numero de entre 0 y 9?: ${hayNumeros}`;
}

recuperar.onclick = () => {

    const datoARecuperar = localStorage.getItem("estadoARecuperar");

    if (datoARecuperar){

        const estadoARecuperar = JSON.parse(datoARecuperar);
        inputTexto.value = estadoARecuperar.texto;
}
}
