/* Ejercicio Nro. 29:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana 
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false).
 */

import {fnDosLetrasS } from "./modelo29.js";

window.onload = () =>
{
    console.log("Aplicacion corriendo");

    const estadoAplicacion = {
        palabra: "",
        resultado: false, 
    };

    const IdPalabra = document.querySelector("#IdPalabra");
    const IdBtnVerificar = document.querySelector("#IdBtnVerificar");
    const IdResultado = document.querySelector("#IdResultado");
    const IdBtnGuardar = document.querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector("#IdBtnRecuperar");

    IdPalabra.oninput = () => {
    
        estadoAplicacion.palabra = IdPalabra.value;
    };

    IdBtnVerificar.onclick = () => {
        const resultado = fnDosLetrasS(estadoAplicacion.palabra);

        estadoAplicacion.resultado = resultado;

        IdResultado.textContent =(`Resultado: ${resultado}`);

        console.log(`La palabra contiene dos letras S: ${resultado}`);
    };

      IdBtnGuardar.onclick = () => {
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        
        localStorage.setItem("estadoApp",estadoJSON);
        
    };

    IdBtnRecuperar.onclick = () => {
        let estadoGuardado =
        localStorage.getItem("estadoApp");

        if (estadoGuardado)
        {
        let estadoObjeto =JSON.parse(estadoGuardado)
        
        estadoAplicacion.palabra = estadoObjeto.palabra
        estadoAplicacion.resultado = estadoObjeto.resultado;
        
        IdPalabra.value = estadoAplicacion.palabra;
        
        IdResultado.textContent =`Resultado: ${estadoAplicacion.resultado}`;
        
        console.log("Palabra recuperada:",estadoAplicacion.palabra);
        
        console.log("Resultado recuperado:",estadoAplicacion.resultado);
        };
    };
};
