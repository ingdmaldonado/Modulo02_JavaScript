import {fnPromedioDeNotas} from "./modelo20.js"



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
        idNota1.value = Number(estadoOBJETO.nota1);
        idNota2.value = Number(estadoOBJETO.nota2);
        idNota3.value = Number(estadoOBJETO.nota3);

        //actualizo el estado aplicación
        estadoAplicacion.nota1 = Number(estadoOBJETO.nota1);
        estadoAplicacion.nota2 = Number(estadoOBJETO.nota2);
        estadoAplicacion.nota3 = Number(estadoOBJETO.nota3);

    }
};


window.onload = ()=>{
    
    console.log(`aplicacíon corriendo`);
    
    const estadoAplicacion = {
        nota1:0,
        nota2:0,
        nota3:0,
     };


    const idNota1 = document.querySelector("#idNota1");  
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // corroborar que funciona
    //console.log(idNota1,idNota2,idNota3,idBtnCalcular,idResultado,idBtnGuardar,idBtnRecuperar);

    // recupero los datos automaticamente, sin necesidad de darle al boton recuperar
    fnRecuperarEstado(estadoAplicacion);


    idNota1.oninput = ()=>{
        estadoAplicacion.nota1 = Number(idNota1.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };

    idNota2.oninput = ()=>{
        estadoAplicacion.nota2 = Number(idNota2.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };

    idNota3.oninput = ()=>{
        estadoAplicacion.nota3 = Number(idNota3.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };


    idBtnCalcular.onclick = ()=>{

        // aqui realizo el calculo pasandole los valores capturados en los inputs
        let resultado = fnPromedioDeNotas(estadoAplicacion.nota1,estadoAplicacion.nota2,estadoAplicacion.nota3);

        // aqui muestro el resultado por consola y tambien por DOM
        //console.log(resultado.toFixed(2));

        // aqui muestro en el DOM en cualquier etiqueta que me permita mostrar texto
        idResultado.textContent = `Primer Nota: ${estadoAplicacion.nota1}, Segunda Nota: ${estadoAplicacion.nota2}, Tercer Nota: ${estadoAplicacion.nota3} - Promedio de las Notas: ${resultado}`;

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
