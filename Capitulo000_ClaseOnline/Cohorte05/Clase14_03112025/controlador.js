
import {cuadrado} from "./modulo.js";

/* Delegación de Eventos.

que cuando la pagina se cargó. habrá
una arrow function que se encargará
de manejar todo lo que suceda
cuando la pagina se cargue */

window.onload = ()=>{

    /* 1ra.Parte) Es acceder a los
    elementos HTML que quiero controlar */

    const idNumero = document.querySelector("#idNumero");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    console.log(idNumero,idBtnCalcular,idResultado);

    /* Cuando alguien hace click en el boton
    lo que haremos es "delegar" en una función
    (flecha) el comportamiento del evento 
    */
    
    idBtnCalcular.onclick = ()=>{

        // aqui saque el numero ingresado del input //
        let numeroIngresado = Number(idNumero.value);

        // aqui calcule el cuadrado pasandole el numero ingresado //
        let resultado = cuadrado(numeroIngresado);

        // aqui muestro el numero ingresado
        console.log(numeroIngresado);

        // aqui voy a mostrar por consola el cuadrado //

        console.log(resultado);

        //alert("aqui tengo que calcular el cuadrado");

        idResultado.textContent = `El Cuadrado de ${numeroIngresado} es ${resultado}`;


    };


    console.log("running");

    /* Diferentes formas de Invocación */

    let resultado1 = cuadrado(9);
    console.log(resultado1);



};

