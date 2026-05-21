import { fnVerificarEspaciosEnBlanco } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";

/* 
--------Ejercicio Nro. 30------------ 
Definir una arrow function que reciba 
como parámetro una cadena de texto y determine si la misma 
contiene al menos tres espacios en blanco. 
La función debe recorrer la cadena carácter por carácter
utilizando un ciclo for. 
Durante el recorrido, deberá 
contar la cantidad de espacios que se encuentren. 
En el momento en que se detecte el tercer espacio en blanco,
la función debe interrumpir inmediatamente el 
ciclo mediante la instrucción break y devolver el valor lógico true. 
Si al finalizar el recorrido completo 
no se encontraron tres espacios, la función debe devolver false.


*/

window.onload = () => {

    const estadoAplicacion = {
        cadenaTxt: ""
    };

    const idCadenaTexto = document.querySelector("#idCadenaTexto");
    const idCantidadEspacios = document.querySelector("#idCantidadEspacios");
    const idResultadoEsp = document.querySelector("#idResultadoEsp");


    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio30");

    idCadenaTexto.oninput = () => {

        estadoAplicacion.cadenaTxt = idCadenaTexto.value;
        fnGuardar("ejercicio30", estadoAplicacion);
        console.log(estadoAplicacion);
    }

    idCantidadEspacios.onclick = () => {

        let espacioBlanco = fnVerificarEspaciosEnBlanco(estadoAplicacion.cadenaTxt);

        idResultadoEsp.textContent = `- Son 3? ${espacioBlanco}`;
    };
    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio30", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio30");

        if (datos) {

            estadoAplicacion.cadenaTxt = datos.cadenaTxt;

            idCadenaTexto.value = datos.cadenaTxt;
        }
    };
};

