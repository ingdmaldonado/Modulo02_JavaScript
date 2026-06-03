import { fnContarEspacios } from "./modelo.js";

const estadoAplicacion = {
    texto:""
}

window.onload = () =>{
    const entradaTexto = document.querySelector("#idEntradaTexto");
    const botonCalcular = document.querySelector("#idBtnCalcular");
    const resultado = document.querySelector("#idResultado");
    const botonGuardar = document.querySelector("#idBtnGuardar");
    const botonRecuperar = document.querySelector("#idBtnRecuperar");
    

    botonCalcular.onclick = () => {
        console.log(`Resultado: ${fnContarEspacios(entradaTexto.value)}`);
        estadoAplicacion.texto = entradaTexto.value;
        if (fnContarEspacios(entradaTexto.value) === true ){
            resultado.textContent = `El texto contiene tres o más espacios`;
        } else {
            resultado.textContent = `El texto contiene dos o menos espacios`;
        }
        
    }



    botonGuardar.onclick = () => {
        fnGuardarDatos();

    }
    botonRecuperar.onclick = () => {
        fnRecuperarDatos();
        
    }

    const fnGuardarDatos = () => {
        estadoAplicacion.texto = entradaTexto.value;
        console.log(`Guardando ${entradaTexto.value}`);
        console.log(`Estado Aplicacion: ${estadoAplicacion}`);
        localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
    }
    const fnRecuperarDatos = () => {
        let datos;
        let recuperar = localStorage.getItem("estadoApp");
        if (recuperar){
            datos = JSON.parse(recuperar)// debe ir así, recordar;
            entradaTexto.value = datos.texto;
        }

    }

}