import {fnCalcularTasaSubsuelo, fnCalcularTasaFiscalizacion} from "./modelo25.js"



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
        idImporteBase.value = Number(estadoOBJETO.importeBase);

        //actualizo el estado aplicación
        estadoAplicacion.importeBase = Number(estadoOBJETO.importeBase);

    }
};


window.onload = ()=>{
    
    console.log(`aplicacíon corriendo`);
    
    const estadoAplicacion = {
        importeBase:0,
     };


    const idImporteBase = document.querySelector("#idImporteBase");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // corroborar que funciona
    //console.log(idImporteBase,idBtnCalcular,idResultado,idBtnGuardar,idBtnRecuperar);

    // recupero los datos automaticamente, sin necesidad de darle al boton recuperar
    fnRecuperarEstado(estadoAplicacion);

    idImporteBase.oninput = ()=>{
        estadoAplicacion.importeBase = Number(idImporteBase.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };


    idBtnCalcular.onclick = ()=>{

        // aqui realizo el calculo pasandole los valores capturados en los inputs
        let resultadoTasaSubsuelo = fnCalcularTasaSubsuelo(estadoAplicacion.importeBase);
        let resultadoTasaFiscalizacion = fnCalcularTasaFiscalizacion(estadoAplicacion.importeBase);

        // aqui muestro en el DOM en cualquier etiqueta que me permita mostrar texto
        idResultado.textContent = `Importe Base de la Factura: $${estadoAplicacion.importeBase} - Tasa de Subsuelo: $${resultadoTasaSubsuelo} - Tasa de Fiscalización: $${resultadoTasaFiscalizacion}`;

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
