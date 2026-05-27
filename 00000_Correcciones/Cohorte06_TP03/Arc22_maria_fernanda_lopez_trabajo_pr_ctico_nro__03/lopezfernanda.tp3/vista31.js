/* Ejercicio Nro. 31:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false) */

import { fnSinNumeros } from "./modelo31.js";

window.onload = () => {

    console.log(`Aplicacion corriendo`);

    const estadoAplicacion = {

        cadena: "",
        resultado: false,
    };

    const IdCadenaDeTexto = document.querySelector("#IdCadenaDeTexto");
    const IdBtnVerificar = document.querySelector("#IdBtnVerificar");
    const IdBtnGuardar = document.querySelector("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector("#IdBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    IdCadenaDeTexto.oninput = () => {

        estadoAplicacion.cadena = IdCadenaDeTexto.value;
    };

    IdBtnVerificar.onclick = () => {

        const respuesta = fnSinNumeros(estadoAplicacion.cadena);

        estadoAplicacion.resultado = respuesta;

        console.log(`Resultado: ${respuesta}`);

        idResultado.textContent = `Resultado: ${respuesta}`;
    };

    IdBtnGuardar.onclick = () => {

        console.log(estadoAplicacion);

        let estadoJSON = JSON.stringify(estadoAplicacion);

        console.log(estadoJSON);

        localStorage.setItem("estadoApp", estadoJSON);
    };

    IdBtnRecuperar.onclick = () => {

        let estadoGuardado = localStorage.getItem("estadoApp");

        if (estadoGuardado) {

            let estadoObjeto = JSON.parse(estadoGuardado);

            estadoAplicacion.cadena = estadoObjeto.cadena;
            estadoAplicacion.resultado = estadoObjeto.resultado;

            IdCadenaDeTexto.value = estadoAplicacion.cadena;

            idResultado.textContent =
                `Resultado: ${estadoAplicacion.resultado}`;

            console.log("Recuperado:", estadoObjeto);
        }
    };
};
