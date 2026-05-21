import { fnVerificarEspBlanco} from "./modelo30.js";

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

    const verificarEspBlanco = fnVerificarEspBlanco(texto);

    resultado.textContent = `El texto ingresado tiene al menos tres(03) espacios en blanco?: ${verificarEspBlanco}`;
}

recuperar.onclick = () => {

    const datoARecuperar = localStorage.getItem("estadoARecuperar");

    if (datoARecuperar){

        const estadoARecuperar = JSON.parse(datoARecuperar);

        inputTexto.value = estadoARecuperar.texto;
    }
}