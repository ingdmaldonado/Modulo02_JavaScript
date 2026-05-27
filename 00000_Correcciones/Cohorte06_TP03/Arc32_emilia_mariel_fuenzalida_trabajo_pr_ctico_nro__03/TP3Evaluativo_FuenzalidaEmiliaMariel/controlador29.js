import { fnLetraS } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";
/*
---------Ejercicio Nro. 29-----
Definir una arrow function que reciba una palabra y determine 
si contiene al menos dos letras “s” 
(mayúsculas o minúsculas). 
La función debe recorrer la palabra con un ciclo for, 
utilizando un contador o una bandera booleana.

Debe devolver true si se cumplen las dos apariciones 
y false en caso contrario. 
No puede utilizar métodos como includes() o indexOf(). 
Nota: Debe devolver un boolean (true ó false).
*/


window.onload = () => {

    const estadoAplicacion = {
        palabra: ""
    };

    const idPalabra = document.querySelector("#idPalabra");
    const idCantidadS = document.querySelector("#idCantidadS");
    const idResultadoS = document.querySelector("#idResultadoS");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio29");

    idPalabra.oninput = () => {

        estadoAplicacion.palabra = idPalabra.value;
        fnGuardar("ejercicio29", estadoAplicacion);
    };

    idCantidadS.onclick = () => {

        let cantidadS = fnLetraS(estadoAplicacion.palabra);

        console.log(cantidadS);

        idResultadoS.textContent = `S: ${cantidadS}`;
    };
    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio29", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio29");

        if (datos) {

            estadoAplicacion.palabra = datos.palabra;

            idPalabra.value = datos.palabra;
        }
    };
};