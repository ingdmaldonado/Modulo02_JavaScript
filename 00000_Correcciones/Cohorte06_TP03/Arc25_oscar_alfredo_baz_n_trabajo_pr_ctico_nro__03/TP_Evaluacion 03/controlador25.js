import {fnCalcularPagoAgua, fnCalcularTasaSubsuelo, fnCalcularTasaFiscalizacionENRE
    
} from './modelo25.js';


const inputConsumo = document.getElementById("idConsumoM3");
const boton = document.getElementById("idBotonCalcular");

const resultado = document.getElementById("resultado");

const recuperar = document.getElementById("recuperar");


const estadoAplicacion = {

    consumo: 0
};


inputConsumo.oninput = () => {
    estadoAplicacion.consumo = Number (inputConsumo.value);

    localStorage.setItem("estadoARecuperar", JSON.stringify(estadoAplicacion));

    console.log(`Escribiendo en el input: ${inputConsumo.value}`)
};

boton.onclick = () => {

    const consumoAgua = Number (inputConsumo.value);

    const importeBase = fnCalcularPagoAgua(consumoAgua);

    const tasaSubSuelo = fnCalcularTasaSubsuelo(importeBase);

    const tasaENRE = fnCalcularTasaFiscalizacionENRE(importeBase);

    const montoTotal = importeBase + tasaSubSuelo + tasaENRE;

    resultado.textContent = `El importe Base es: $${importeBase.toFixed(2)}, La tasa de subSuelo es: $${tasaSubSuelo.toFixed(2)}, La tasa de ficalizacion ENRE es: $${tasaENRE.toFixed(2)}`;


};

recuperar.onclick = () => {

    const datosARecuperar = localStorage.getItem("estadoARecuperar");

    if (datosARecuperar){

        const estadoRecuperar = JSON.parse(datosARecuperar);

        inputConsumo.value = estadoRecuperar.consumo;
    }
};
