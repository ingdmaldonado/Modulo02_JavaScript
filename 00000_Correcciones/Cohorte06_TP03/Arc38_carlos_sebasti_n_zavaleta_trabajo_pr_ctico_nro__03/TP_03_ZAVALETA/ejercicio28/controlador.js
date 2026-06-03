import { fnContarConsonantes } from './modelo.js';

const estadoAplicacion = {
    texto : ""
}

window.onload = () => {
    const ingresoTexto = document.querySelector("#idIngresoTexto");
    const textoResultado = document.querySelector("#idTextoResultado");
    const botonCalcular = document.querySelector("#idBtnCalcular");
    const botonGuardar = document.querySelector("#idBtnGuardar");
    const botonRecuperar = document.querySelector("#idBtnRecuperar");
    


    const fnGuardarDatos = () => {
        localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
        console.log(`Guardando datos: ${estadoAplicacion}`);

    }
    const fnRecuperarDatos = () => {
        let datos;
        let recuperar = localStorage.getItem("estadoApp");
        if (recuperar){
            datos = JSON.parse(recuperar);
            ingresoTexto.value = datos.texto;
            console.log(`Recupero Datos: ${datos.texto}`);
        }
    }


    botonGuardar.onclick = () => {
        fnGuardarDatos();
    }
    botonRecuperar.onclick = () => {
        fnRecuperarDatos();
    }


    const fnguardarEstadoYCalcular = () => {
        estadoAplicacion.texto = ingresoTexto.value;
        textoResultado.textContent = `La cadena de texto tiene ${fnContarConsonantes(ingresoTexto.value)} consonantes`;
    }

    // Tengo éste botón para cuando restaure los datos.
    botonCalcular.onclick = () => {
        fnguardarEstadoYCalcular();
    }

    ingresoTexto.oninput = () => {
        fnguardarEstadoYCalcular();

    }
}