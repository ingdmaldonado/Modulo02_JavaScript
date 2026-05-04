import {fnComprobarDigitosNumericos} from "./modelo31.js"



const fnGuardarEstado = (estadoAplicacion)=>{

    // convierte el estado a JSON   
    let estadoApp = JSON.stringify(estadoAplicacion);

    // persiste en el navegador en el localStorage
    localStorage.setItem(`estadoApp`,estadoApp);

};

const fnRecuperarEstado = (estadoAplicacion)=>{

    // aqui recupero
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado)
    {
        let estadoOBJETO = JSON.parse(datoRecuperado);

        console.log(datoRecuperado);

        console.log(estadoOBJETO);

        // aqui actualizo los datos en el input 
        idCadenaTexto.value = estadoOBJETO.cadenaTexto;

        //actualizo el estado aplicación
        estadoAplicacion.cadenaTexto = estadoOBJETO.cadenaTexto;

    }
};


window.onload = ()=>{
    
    console.log(`aplicacíon corriendo`);
    
    const estadoAplicacion = {
        cadenaTexto:"",
     };


    const idCadenaTexto = document.querySelector("#idCadenaTexto");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // corroborar que funciona
    //console.log(idCadenaTexto,idBtnCalcular,idResultado,idBtnGuardar,idBtnRecuperar);

    // recupero los datos automaticamente, sin necesidad de darle al boton recuperar
    fnRecuperarEstado(estadoAplicacion);


    idCadenaTexto.oninput = ()=>{
        estadoAplicacion.cadenaTexto = idCadenaTexto.value;
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };


    idBtnCalcular.onclick = ()=>{

        // aqui realizo el calculo pasandole los valores capturados en los inputs
        let resultado = fnComprobarDigitosNumericos(estadoAplicacion.cadenaTexto);

        // aqui muestro en el DOM en cualquier etiqueta que me permita mostrar texto
        let br = `<br>`;
        idResultado.innerHTML = `Cadena de texto ingresada: "${estadoAplicacion.cadenaTexto}"<br> 
        True(cadena limpia de dígitos numéricos)<br> 
        False(contiene dígitos numéricos)<br>
        Resultado: ${resultado}`;

    };


    // click del boton guardar
    idBtnGuardar.onclick = ()=>{

        // 1_ aqui muestro el estado de la aplicación
        console.log(estadoAplicacion);

        // 2_ Convertir a JSON 
        let estadoJSON = JSON.stringify(estadoAplicacion);

        console.log(estadoJSON);

        // aqui persisto los datos
        localStorage.setItem("estadoApp",estadoJSON);

    };


    // click del boton recuperar
    idBtnRecuperar.onclick = ()=>{

       fnRecuperarEstado(estadoAplicacion);

    };
    
};
