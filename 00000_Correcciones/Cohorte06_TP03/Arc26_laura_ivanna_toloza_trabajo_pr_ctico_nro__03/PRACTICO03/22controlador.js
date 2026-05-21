/* El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, 
la recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número */

import {calcularSobreTasa} from "./22modelo.js";

window.onload = () => {

const idImporte = document.querySelector("#idImporte");
const idTipoBebida = document.querySelector("#idTipoBebida");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idResultado = document.querySelector("#idResultado");

const estadoAplicacion = {
    importeBase: 0,
    tipoBebida: 0,
    sobreTasa: 0,
};


idImporte.oninput = () => {
    estadoAplicacion.importeBase = Number(idImporte.value);
};

idTipoBebida.onchange = () => {
    estadoAplicacion.tipoBebida = Number(idTipoBebida.value);
};

idBtnCalcular.onclick = () => {
    let resultado = calcularSobreTasa(estadoAplicacion.importeBase,estadoAplicacion.tipoBebida);
    estadoAplicacion.sobreTasa = resultado;
    idResultado.textContent = `La sobre tasa es: $ ${resultado.toFixed(2)}`;
};

idBtnGuardar.onclick = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("datosAPP",datosJSON);
};

idBtnRecuperar.onclick = () => {
    let datosJSON = localStorage.getItem("datosAPP");
    let datosObjeto = JSON.parse(datosJSON);
    estadoAplicacion.importeBase = datosObjeto.importeBase;
    estadoAplicacion.tipoBebida = datosObjeto.tipoBebida;
    estadoAplicacion.sobreTasa = datosObjeto.sobreTasa;

};
};