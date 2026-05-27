

import { fnSobreTasaBebidas } from "./modelo22.js";

const inputImporte = document.getElementById("idImporte");
const inputTipo = document.getElementById("idTipo");

const boton = document.getElementById("idBotonCalcular");
const resultado = document.getElementById("resultado");

boton.onclick = () => {

    const importe = Number (inputImporte.value);
    const tipo = Number (inputTipo.value);

    const impuesto = fnSobreTasaBebidas(importe, tipo);

    resultado.textContent = `El impuesto a pagar de esta bebida es : $${impuesto}`;
}

