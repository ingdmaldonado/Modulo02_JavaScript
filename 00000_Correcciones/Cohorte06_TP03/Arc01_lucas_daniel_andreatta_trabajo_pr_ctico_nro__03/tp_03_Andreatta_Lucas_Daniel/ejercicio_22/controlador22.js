import {fnCalcularSobretasa} from "./modelo22.js"



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
        idTipoBebida.value = Number(estadoOBJETO.tipoBebida);
        idImporteBase.value = Number(estadoOBJETO.importeBase);

        //actualizo el estado aplicación
        estadoAplicacion.tipoBebida = Number(estadoOBJETO.tipoBebida);
        estadoAplicacion.importeBase = Number(estadoOBJETO.importeBase);

    }
};


window.onload = ()=>{
    
    console.log(`aplicacíon corriendo`);
    
    const estadoAplicacion = {
        tipoBebida:0,
        importeBase:0,
     };


    const idTipoBebida = document.querySelector("#idTipoBebida");
    const idImporteBase = document.querySelector("#idImporteBase");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // corroborar que funciona
    //console.log(idTipoBebida,idImporteBase,idBtnCalcular,idResultado,idBtnGuardar,idBtnRecuperar);

    // recupero los datos automaticamente, sin necesidad de darle al boton recuperar
    fnRecuperarEstado(estadoAplicacion);


    idTipoBebida.onchange = ()=>{
        estadoAplicacion.tipoBebida = Number(idTipoBebida.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
    };

    idImporteBase.oninput = ()=>{
        estadoAplicacion.importeBase = Number(idImporteBase.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };


    idBtnCalcular.onclick = ()=>{

        // aqui realizo el calculo pasandole los valores capturados en los inputs
        let resultado = fnCalcularSobretasa(estadoAplicacion.tipoBebida, estadoAplicacion.importeBase);

        // aqui muestro en el DOM en cualquier etiqueta que me permita mostrar texto
        idResultado.textContent = `Importe Base de la bebida: ${estadoAplicacion.importeBase} - Impuesto SobreTasa: "${resultado}"`;

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
