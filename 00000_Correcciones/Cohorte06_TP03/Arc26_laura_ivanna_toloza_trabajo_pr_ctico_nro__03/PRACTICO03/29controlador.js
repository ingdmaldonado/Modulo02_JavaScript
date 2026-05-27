/* Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” (mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false). */


import {verificarLetrasS} from "./29modelo.js";

window.onload = ()=>{ 

    const estadoAplicacion = {
        palabra:"",
        resultado:false,
    };

    const idPalabra = document.querySelector("#idPalabra");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    idPalabra.oninput = ()=>{
        estadoAplicacion.palabra = idPalabra.value;
    };

    idBtnCalcular.onclick = ()=>{
        const resultado = verificarLetrasS(estadoAplicacion.palabra);
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
        estadoAplicacion.palabra = datosObjeto.palabra;
        estadoAplicacion.resultado = datosObjeto.resultado;

        idPalabra.value = estadoAplicacion.palabra;
        idResultado.textContent = `Resultado: ${estadoAplicacion.resultado}`;
    };
};

