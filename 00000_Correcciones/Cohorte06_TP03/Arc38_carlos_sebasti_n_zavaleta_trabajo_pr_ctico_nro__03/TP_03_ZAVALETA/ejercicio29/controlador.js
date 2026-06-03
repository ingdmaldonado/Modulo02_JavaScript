import { fnContarEses } from "./modelo.js";

const estadoAplicacion = {
    resultado : ""
}

window.onload = () => {
    const texto = document.querySelector("#idTexto");
    const botoncalcular = document.querySelector("#idBtnCalcular");
    const resultado = document.querySelector("#idResultado");
    const botonGuardar = document.querySelector("#idBtnGuardar");
    const botonRecuperar = document.querySelector("#idBtnRecuperar");
    


    

    botoncalcular.onclick = () => {
        estadoAplicacion.resultado = texto.value;
        console.log(`Guardo en estado Aplicacion: ${texto.value}`);
        if (fnContarEses(texto.value) === true){
            resultado.textContent = "Tiene 2 o más Eses";
        }
        if (fnContarEses(texto.value) === false){
            resultado.textContent = "Tiene una Ese o ninguna";
        }
    }


    
    const fnGuardarDatos = () => {
        localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
        console.log(`Guardando datos: ${JSON.stringify(estadoAplicacion)}`);
    }
    const fnRecuperarDatos = () => {
        let datos;
        let recuperar = localStorage.getItem("estadoApp");
        if (recuperar){
            datos= JSON.parse(recuperar);
            texto.value = datos.resultado;
            console.log(`Datos recuperados: ${datos.resultado}`);
        }


    }
    botonGuardar.onclick = () => {
        fnGuardarDatos();
    }
    botonRecuperar.onclick = () => {
        fnRecuperarDatos();
    }





}