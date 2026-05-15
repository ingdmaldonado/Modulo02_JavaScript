import { contarVocales, contarConsonantes } from "./modelos.js";

window.onload = () => {

    const estadoAplicacion = {
        datos: {
            textoIngresado: "",
        },

        guardar: function () {
            localStorage.setItem("estadoAplicacion", JSON.stringify(this.datos));
        },

        recuperar: function () {
            let guardado = localStorage.getItem("estadoAplicacion");
            if (guardado) {
                this.datos = JSON.parse(guardado);
                return true;
            }
            return false;
        }
    };

    const inputTexto = document.getElementById('inputTexto');

    // Resultados de pantalla
    const resultadoVocales = document.getElementById('resultadoVocales');
    const resultadoConsonantes = document.getElementById('resultadoConsonantes');

    // Botones 
    const btnCalcularVocales = document.getElementById('btnCalcularVocales');
    const btnCalcularConsonantes = document.getElementById('btnCalcularConsonantes');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');


    inputTexto.oninput = () => {
        estadoAplicacion.datos.textoIngresado = inputTexto.value;
        console.log(estadoAplicacion.datos);
    };

    btnCalcularVocales.onclick = () => {                // punto 27
        resultadoVocales.textContent = "";
        let totalVocales = contarVocales(estadoAplicacion.datos.textoIngresado);
        resultadoVocales.textContent = totalVocales;
    };

    btnCalcularConsonantes.onclick = () => {            // punto 28
        resultadoConsonantes.textContent = "";
        let totalConsonantes = contarConsonantes(estadoAplicacion.datos.textoIngresado);
        resultadoConsonantes.textContent = totalConsonantes;
    };

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
        alert("¡Estado guardado con éxito!");
    };

    btnRecuperar.onclick = () => {
        resultadoVocales.textContent = "";
        resultadoConsonantes.textContent = "";

        if (estadoAplicacion.recuperar()) {
            inputTexto.value = estadoAplicacion.datos.textoIngresado || "";
            btnCalcularConsonantes.onclick();
            btnCalcularVocales.onclick();
        } else {
            console.log("No hay datos guardados en el localStorage.");
        }
    };
};