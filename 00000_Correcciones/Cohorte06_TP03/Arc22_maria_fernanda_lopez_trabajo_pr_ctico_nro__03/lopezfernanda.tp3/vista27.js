/* Ejercicio Nro. 27:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número. */

import { fnCantidadDeVocales } from "./modelo27.js";

window.onload = () =>
{
    console.log(`Aplicacion corriendo`);
    
    const estadoAplicacion = {

        cadenaDeTexto: "",
        cantidadVocales: 0,
    };

    const IdTexto = document.querySelector("#IdTexto");

    const IdBtnCalcular = document.querySelector("#IdBtnCalcular");
    const IdBtnGuardar = document.querySelector("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector("#IdBtnRecuperar");

    const IdResultado = document.querySelector("#IdResultado");

    IdTexto.oninput = () => {

        estadoAplicacion.cadenaDeTexto = IdTexto.value;
    };

    IdBtnCalcular.onclick = () => {

        const cantidadVocales =
            fnCantidadDeVocales(estadoAplicacion.cadenaDeTexto);

        estadoAplicacion.cantidadVocales = cantidadVocales;

        console.log(`La cantidad de vocales es: ${cantidadVocales}`);

        IdResultado.textContent =(`Cantidad de Vocales: ${cantidadVocales}`);
    };

    IdBtnGuardar.onclick = () => {

        console.log(estadoAplicacion);

        let estadoJSON = JSON.stringify(estadoAplicacion);

        console.log(estadoJSON);

        localStorage.setItem("estadoApp", estadoJSON);
    };

    IdBtnRecuperar.onclick = () => {

        let estadoGuardado = localStorage.getItem("estadoApp");

        if (estadoGuardado)
        {
            let estadoObjeto = JSON.parse(estadoGuardado);

            estadoAplicacion.cadenaDeTexto =
                estadoObjeto.cadenaDeTexto;

            estadoAplicacion.cantidadVocales =
                estadoObjeto.cantidadVocales;

            IdTexto.value =
                estadoAplicacion.cadenaDeTexto;

            IdResultado.textContent =(`Cantidad de Vocales: ${estadoAplicacion.cantidadVocales}`);

            console.log("Recuperado:", estadoObjeto);
        }
    };
};