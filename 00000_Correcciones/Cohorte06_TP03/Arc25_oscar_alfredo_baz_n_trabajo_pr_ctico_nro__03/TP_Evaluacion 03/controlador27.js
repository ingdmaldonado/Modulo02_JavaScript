import { fnContadorVocales } from "./modelo27.js";


const inputTexto = document.getElementById("idTexto");

const boton = document.getElementById("idBotonCalcular");

const resultado = document.getElementById("resultado");

const recuperar = document.getElementById("recuperar");

const estadoAplicacion = {

    texto : ""
}


inputTexto.oninput = ()=> {

    estadoAplicacion.texto = inputTexto.value;

    localStorage.setItem("estadoARecuperar", JSON.stringify(estadoAplicacion));

    console.log(`Aqui se esta tomando el texto que ingresa el usuario: ${inputTexto.value}`);
}

boton.onclick = ()=> {

    const texto = inputTexto.value;

    const cantidadV = fnContadorVocales(texto);

    resultado.textContent = `La cantidad de vocales que hay en el texto ingresado es: ${cantidadV}`;
}



recuperar.onclick = ()=> {

    const datosARecuperar = localStorage.getItem("estadoARecuperar");

    if (datosARecuperar){

        const estadoARecuperar = JSON.parse(datosARecuperar);

        inputTexto.value = estadoARecuperar.texto;
    }

}