/* Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el ciclo mediante la instrucción break 
y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false). */

import {verificarEspacios} from "./30modelo.js";


window.onload = ()=>{

    const estadoAplicacion = {
        texto:"",
        resultado:false,
    };

    const idTexto = document.querySelector("#idTexto");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    idTexto.oninput = ()=>{
        estadoAplicacion.texto = idTexto.value;
    };

    idBtnCalcular.onclick = ()=>{
        const resultado = verificarEspacios(estadoAplicacion.texto);
        estadoAplicacion.resultado = resultado;
        idResultado.textContent = `Resultado: ${resultado}`;
    };

    idBtnGuardar.onclick = ()=>{
        let datosJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datosAPP",datosJSON);
    };

    idBtnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem("datosAPP");
        let datosObjeto = JSON.parse(datosJSON);
        estadoAplicacion.texto = datosObjeto.texto;
        estadoAplicacion.resultado = datosObjeto.resultado;

        idTexto.value = estadoAplicacion.texto;
        idResultado.textContent = `Resultado: ${estadoAplicacion.resultado}`;
    };
};