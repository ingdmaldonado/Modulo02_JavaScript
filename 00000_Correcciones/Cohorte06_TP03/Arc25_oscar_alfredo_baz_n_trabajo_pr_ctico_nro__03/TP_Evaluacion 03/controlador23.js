import { fnCalcularPagoAgua } from "./modelo23.js";


const inputConsumo = document.getElementById("idConsumoM3");
const boton = document.getElementById("idBotonCalcular");

const resultado = document.getElementById("resultado");

const recuperar = document.getElementById("recuperar");


const estadoAplicacion = {
    consumo : 0
};

inputConsumo.oninput = () => {
    estadoAplicacion.consumo = Number (inputConsumo.value);

    localStorage.setItem("estadoARecuperar", JSON.stringify(estadoAplicacion));

    console.log(`Escribiendo en el input: ${inputConsumo.value}`)

/*console.log("Desde input:", inputConsumo.value); 
 muestra: "12" (texto)

console.log("Desde estado:", estadoAplicacion.consumo); 
 muestra: 12 (número) */



}

boton.onclick = () => {

    const consumo = Number (inputConsumo.value);
    const aPagar= fnCalcularPagoAgua(consumo);

    resultado.textContent = `El importe que debe pagar por el consumo de agua es: $${aPagar.toFixed(2)}`;

}

recuperar.onclick = () => {

    const datosARecuperar = localStorage.getItem("estadoARecuperar");

    if (datosARecuperar){

        const estado= JSON.parse(datosARecuperar);

        inputConsumo.value = estado.consumo;
    }
}