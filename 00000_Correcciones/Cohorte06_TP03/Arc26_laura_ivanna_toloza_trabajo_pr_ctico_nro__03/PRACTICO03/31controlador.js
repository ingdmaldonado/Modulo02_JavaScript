/* Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar cada carácter y comprobar 
si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor lógico false, 
ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false). */




import {verificarSinNumeros} from "./31modelo.js";


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
        estadoAplicacion.texto =
        idTexto.value;
    };

    idBtnCalcular.onclick = ()=>{
        const resultado = verificarSinNumeros(estadoAplicacion.texto);
        estadoAplicacion.resultado = resultado;
        idResultado.textContent = `Resultado: ${resultado}`;
    };

    idBtnGuardar.onclick = ()=>{
        let datosJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datosAPP", datosJSON);
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