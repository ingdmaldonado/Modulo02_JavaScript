import {fnCalcularImporteAgua} from "./modelo23.js"



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
        idTotalMetrosCubicos.value = Number(estadoOBJETO.totalMetrosCubicos);

        //actualizo el estado aplicación
        estadoAplicacion.totalMetrosCubicos = Number(estadoOBJETO.totalMetrosCubicos);

    }
};


window.onload = ()=>{
    
    console.log(`aplicacíon corriendo`);
    
    const estadoAplicacion = {
        totalMetrosCubicos:0,
     };


    const idTotalMetrosCubicos = document.querySelector("#idTotalMetrosCubicos");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // corroborar que funciona
    //console.log(idTotalMetrosCubicos,idBtnCalcular,idResultado,idBtnGuardar,idBtnRecuperar);

    // recupero los datos automaticamente, sin necesidad de darle al boton recuperar
    fnRecuperarEstado(estadoAplicacion);


    idTotalMetrosCubicos.oninput = ()=>{
        estadoAplicacion.totalMetrosCubicos = Number(idTotalMetrosCubicos.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };


    idBtnCalcular.onclick = ()=>{

        // aqui realizo el calculo pasandole los valores capturados en los inputs
        let resultado = fnCalcularImporteAgua(estadoAplicacion.totalMetrosCubicos);

        // aqui muestro en el DOM en cualquier etiqueta que me permita mostrar texto
        idResultado.textContent = `Total de metros cúbicos leídos: ${estadoAplicacion.totalMetrosCubicos} - Importe Base a Pagar: $${resultado}`;

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
