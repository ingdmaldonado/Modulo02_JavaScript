
import { fnCalcularTasaSubsuelo } from "./modelo24.js";


const inputImporteBase = document.getElementById("idImporteBase");
const boton = document.getElementById("idBotonCalcular");
const resultado = document.getElementById("resultado");
const recuperar = document.getElementById("recuperar");

const estadoAplicacion = {
    importeBase : 0
};



inputImporteBase.oninput = () => {

    estadoAplicacion.importeBase = Number (inputImporteBase.value);

    localStorage.setItem("estadoSubSueloARecuperar", JSON.stringify(estadoAplicacion));

    console.log (`Aqui compruebo que el valor que ingresa el usuario se muestre en tiempo real ${estadoAplicacion.importeBase}`);
}

boton.onclick =() => {

    const importeBase = Number (inputImporteBase.value);

    const tasaSubsuelo = fnCalcularTasaSubsuelo(importeBase);

    resultado.textContent = `La tasa de subsuelo a pagar es: $${tasaSubsuelo.toFixed(2)}`;
}


recuperar.onclick = () => {

    const datosARecuperar = localStorage.getItem("estadoSubSueloARecuperar");

    if (datosARecuperar){

        const estadoRecuperado = JSON.parse(datosARecuperar);
        
        inputImporteBase.value = estadoRecuperado.importeBase;

    }
}


