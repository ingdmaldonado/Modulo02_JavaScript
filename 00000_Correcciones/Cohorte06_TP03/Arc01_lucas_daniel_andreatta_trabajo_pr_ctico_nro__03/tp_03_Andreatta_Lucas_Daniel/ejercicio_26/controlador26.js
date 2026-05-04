import {fnCalcularInsulina} from "./modelo26.js"



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
        idNivelGlucosa.value = Number(estadoOBJETO.nivelGlucosa);
        idPesoCorporal.value = Number(estadoOBJETO.pesoCorporal);
        idTipoDiabete.value = Number(estadoOBJETO.tipoDiabete);

        //actualizo el estado aplicación
        estadoAplicacion.nivelGlucosa = Number(estadoOBJETO.nivelGlucosa);
        estadoAplicacion.pesoCorporal = Number(estadoOBJETO.pesoCorporal);
        estadoAplicacion.tipoDiabete = Number(estadoOBJETO.tipoDiabete);


    }
};


window.onload = ()=>{
    
    console.log(`aplicacíon corriendo`);
    
    const estadoAplicacion = {
        nivelGlucosa:0,
        pesoCorporal:0,
        tipoDiabete:0,
     };


    const idNivelGlucosa = document.querySelector("#idNivelGlucosa");
    const idPesoCorporal = document.querySelector("#idPesoCorporal");
    const idTipoDiabete = document.querySelector("#idTipoDiabete");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // corroborar que funciona
    //console.log(idNivelGlucosa,idPesoCorporal,idTipoDiabete,idBtnCalcular,idResultado,idBtnGuardar,idBtnRecuperar);

    // recupero los datos automaticamente, sin necesidad de darle al boton recuperar
    fnRecuperarEstado(estadoAplicacion);


    idNivelGlucosa.oninput = ()=>{
        estadoAplicacion.nivelGlucosa = Number(idNivelGlucosa.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };

    idPesoCorporal.oninput = ()=>{
        estadoAplicacion.pesoCorporal = Number(idPesoCorporal.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };

    idTipoDiabete.onchange = ()=>{
        estadoAplicacion.tipoDiabete = Number(idTipoDiabete.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
    };

    idBtnCalcular.onclick = ()=>{

        // aqui realizo el calculo pasandole los valores capturados en los inputs
        let resultado = fnCalcularInsulina(estadoAplicacion.nivelGlucosa, estadoAplicacion.pesoCorporal, estadoAplicacion.tipoDiabete);

        // aqui muestro en el DOM en cualquier etiqueta que me permita mostrar texto
        idResultado.textContent = `Nivel de glucosa en sangre: ${estadoAplicacion.nivelGlucosa}, Peso corporal(Kg): ${estadoAplicacion.pesoCorporal}, Tipo Diabete: ${estadoAplicacion.tipoDiabete}  - Insulina recomendada: "${resultado}"`;

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
