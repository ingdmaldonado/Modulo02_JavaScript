import { fnCantidadConsonantes } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";
/*
Ejercicio Nro. 28: 
Realizar una arrow function que reciba como parámetro 
una cadena de texto y devuelva cuántas 
consonantes contiene (mayúsculas o minúsculas). 
Es decir consideramos consonante a todo carácter que NO 
SEA VOCAL. 
Debe recorrer la cadena con un ciclo for, 
analizar cada carácter y determinar si es una letra que no sea vocal. 
No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 


*/


window.onload = () => {

    const estadoAplicacion = {
        cadenaDeTexto: ""
    };

    const idCadenaCons = document.querySelector("#idCadenaCons");
    const idCantCons = document.querySelector("#idCantCons");
    const idResultadoConsonantes = document.querySelector("#idResultadoConsonantes");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");
    let cons = "bcdfghjklmnñpqrstvwxyz";

    let datos = fnRecuperar("ejercicio28");

    idCadenaCons.oninput = () => {

        estadoAplicacion.cadenaDeTexto = idCadenaCons.value;
        fnGuardar("ejercicio28", estadoAplicacion);
    };

    idCantCons.onclick = () => {

        let cantConsonantes = fnCantidadConsonantes(estadoAplicacion.cadenaDeTexto, cons);

        console.log(cantConsonantes);

        idResultadoConsonantes.textContent = `Cantidad de Consonates: ${cantConsonantes}`;
    };
    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio29", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio28");

        if (datos) {

            estadoAplicacion.cadenaDeTexto = datos.cadenaDeTexto;

            idCantCons.value = datos.cadenaDeTexto;
        }
    };
};