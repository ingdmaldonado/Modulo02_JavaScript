import { noContieneNumeros } from "./modelos.js";

window.onload = () => {

    const estadoAplicacion = {
        datos: {
            cadena: ""

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

    const inputCadena = document.getElementById('inputCadena');

    const resultado = document.getElementById('resultado');

    const btnCalcular = document.getElementById('btnCalcular');

    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');

    inputCadena.oninput = () => {
        estadoAplicacion.datos.cadena = inputCadena.value;
        console.log(estadoAplicacion.datos.cadena);
    }

    btnCalcular.onclick = () => {
        resultado.textContent = "";
        let resultadoLocal = noContieneNumeros(estadoAplicacion.datos.cadena);
        resultado.textContent = resultadoLocal;
    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    };

    btnRecuperar.onclick = () => {
        resultado.textContent = "";

        if (estadoAplicacion.recuperar()) {
            inputCadena.value = estadoAplicacion.datos.cadena || "";
            btnCalcular.onclick();
        } else {
            console.log("No hay datos guardados en el localStorage.");
        }
    };



}










