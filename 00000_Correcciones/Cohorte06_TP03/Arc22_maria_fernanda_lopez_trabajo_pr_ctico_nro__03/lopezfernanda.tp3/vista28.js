/* Ejercicio Nro. 28:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número */

import {fncontarConsonantes} from "./modelo28.js";

window.onload= ()=>
{
    console.log (`Aplicacion corriendo`);

    const estadoAplicacion = { 
        cadenaDeTexto: "",
        contarConsonantes: 0,
    };

    const IdTexto = document.querySelector ("#IdTexto");
    const IdBtnCalcular = document.querySelector ("#IdBtnCalcular");
    const IdResultado = document.querySelector ("#IdResultado");
    const IdBtnGuardar = document.querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector ("#IdBtnRecuperar");

    IdTexto.oninput = () => {
        estadoAplicacion.cadenaDeTexto = IdTexto.value;
    };

    IdBtnCalcular.onclick = () => {
        const contarConsonantes = fncontarConsonantes (estadoAplicacion.cadenaDeTexto);

        estadoAplicacion.contarConsonantes = contarConsonantes;

        IdResultado.textContent = (`Cantidad de consonantes: ${estadoAplicacion.contarConsonantes}`);

        console.log (`La cantidad de consonantes de la cadena es de ${contarConsonantes}`);
    };

    IdBtnGuardar.onclick = () => {
        console.log (estadoAplicacion);
        let estadoJSON = JSON.stringify (estadoAplicacion);
        console.log (estadoJSON);
        localStorage.setItem ("estadoApp", estadoJSON);
    };

    IdBtnRecuperar.onclick = ()=> {
        let estadoGuardado = localStorage.getItem ("estadoApp");

        if (estadoGuardado)
        {
            let estadoObjeto = JSON.parse (estadoGuardado);

            estadoAplicacion.cadenaDeTexto = estadoObjeto.cadenaDeTexto;
            estadoAplicacion.contarConsonantes = estadoObjeto.contarConsonantes;
            IdTexto.value = estadoAplicacion.cadenaDeTexto;

            IdResultado.textContent =(`Cantidad de consonantes: ${estadoAplicacion.contarConsonantes}`);

            console.log ("Cadena de texto recuperada", estadoAplicacion.cadenaDeTexto);

            console.log (" Cantidad de Consonantes", estadoAplicacion.contarConsonantes);
        };
    };


    
};

