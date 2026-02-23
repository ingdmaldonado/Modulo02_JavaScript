import {Cuadrado} from "./modelo01.js";

window.onload = function()
{
    console.log("running");

    const idNumero = document.querySelector("#idNumero");
    const idBtnCalcularCuadrado = document.querySelector("#idBtnCalcularCuadrado");
    const idLblResultado = document.querySelector("#idLblResultado");

    console.log(idNumero,idBtnCalcularCuadrado,idLblResultado);

    idBtnCalcularCuadrado.onclick = function()
    {
        let numeroIngresado = Number(idNumero.value);

        let resultadoCuadrado = Cuadrado(numeroIngresado);

        console.log(`El cuadrado del numero es: ${resultadoCuadrado}`);

        idLblResultado.textContent = `Cuadrado: ${resultadoCuadrado}`;
    }


}