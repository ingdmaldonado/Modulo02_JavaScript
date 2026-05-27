/* Ejercicio Nro. 30:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).
 */

import { fnTresEspacios } from "./modelo30.js";

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

        const respuesta = fnTresEspacios(
            estadoAplicacion.cadena
        );

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