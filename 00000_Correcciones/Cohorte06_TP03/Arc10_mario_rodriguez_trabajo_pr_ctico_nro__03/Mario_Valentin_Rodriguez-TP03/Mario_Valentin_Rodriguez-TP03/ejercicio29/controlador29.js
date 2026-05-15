import {fnCalcularDosS} from "./modelo29.js";

/*

Ejercicio Nro. 29: 

Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” 
(mayúsculas o minúsculas). 

La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana. 

Debe devolver true si se cumplen las dos apariciones y false en caso contrario. 

No puede utilizar métodos como includes() o indexOf(). 

Nota: Debe devolver un boolean (true ó false). 


*/

window.onload=()=>{

    const estadoAplicacion={

        palabra:"",

    };

    const idPalabra = document.querySelector("#idPalabra");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    idPalabra.oninput =()=>{

        estadoAplicacion.palabra = idPalabra.value;

        console.log(estadoAplicacion);

    };

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularDosS(estadoAplicacion.palabra);

        console.log(resultado);

        idResultado.textContent = `${resultado}`;

    };

};