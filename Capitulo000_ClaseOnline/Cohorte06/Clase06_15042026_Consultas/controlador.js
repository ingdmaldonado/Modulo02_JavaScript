import {fnCuadrado} from "./modelo.js";

window.onload = ()=>{

    /* Esto sería como el programa principal */

    // aqui creo un objeto literal
    const estadoAplicacion = {
        numeroIngresado:0,
    }


    // aqui controlo los input con constantes //
    const idNumero = document.querySelector("#idNumero");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    console.log(idNumero,idBtnCalcular,idResultado);

    // delegación de evento on input del idNumero //
    idNumero.oninput = ()=>{

        estadoAplicacion.numeroIngresado = Number(idNumero.value);

        console.log(estadoAplicacion);

    };

    // delegación del evento click //
    idBtnCalcular.onclick = ()=>{

        // aqui capture el valor el ingresado en el input
        //let numeroIngresado = Number(idNumero.value);

        let numeroIngresado = estadoAplicacion.numeroIngresado;

        // aqui le pase a la función para que resuelva el cuadrado
        let resultado = fnCuadrado(numeroIngresado);

        // aqui estoy mostrando el resultado por consola
        console.log(resultado);

    };

    // delegación del boton guardar //
    idBtnGuardar.onclick = ()=>{

        // 1ro) primero muestro el estado //
        console.log(estadoAplicacion);

        /* 2do) a los objetos literales. para
        enviarlos al BackEnd y para guardarlos
        y persistirlos en el navegador, los
        tengo convertir a formato JSON */

        let datosJSON = JSON.stringify(estadoAplicacion);
        console.log(datosJSON);

        /* 3er) Guardar estos datos en la memoria
        del Navegador

            sessionStorage => memoria que dura mientras la pagina esta abierta

            localStorage => cuando quiero almacenar de forma permanente en el navegador

                - alguien lo borre desde javasCript
                - alguien borre el historial

            www.clarin.com.ar => clarin.com.ar
                   
        */

        localStorage.setItem("misDatos",datosJSON);


    };

    // Delegación del evento onclick del boton recuperar //
    idBtnRecuperar.onclick = ()=>{

        // recupero los datos almacenados cuyo rotulo sea misDatos //
        let datosJSON = localStorage.getItem("misDatos"); 

        // aqui me estoy fijando si recupere algo ?.
        if(datosJSON)
        {
            // aqui estoy mostrando los datos recuperadosx //
            console.log(datosJSON);

            // aqui estoy convirtiendo de JSON => OBJETO //
            let objeto = JSON.parse(datosJSON);

            // aqui lo estoy mostrando al objeto //
            console.log(objeto);

            // voy a volver a dejar cada cosa en su lugar //
            idNumero.value = objeto.numeroIngresado;

        }

    };

    /* a modo de prueba voy a ver como invoco 
    la función y veo los resultados */

    /*
    let resultado1 = fnCuadrado(7);
    console.log(resultado1);

    let x = 5;
    let resultado2 = fnCuadrado(x);
    console.log(resultado2);

    let resultado3 = fnCuadrado(3+3+3);
    console.log(resultado3);

    let resultado4 = fnCuadrado(fnCuadrado(2) + fnCuadrado(3));
    console.log(resultado4);
    */

};