import { tieneDosS } from "./modelos.js";


window.onload = () => {

    const estadoAplicacion = {
        datos: {
            inputPalabra: ""

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

    const inputPalabra = document.getElementById("inputPalabra");
    const resultado = document.getElementById('resultado');

    const btnCalcular = document.getElementById('btnCalcular');

    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');

    inputPalabra.oninput = () => {
        estadoAplicacion.datos.inputPalabra = inputPalabra.value;
        console.log(estadoAplicacion.datos.inputPalabra);
    }

    btnCalcular.onclick = () => {
        resultado.textContent = "";

        let resultadoLocal = tieneDosS(estadoAplicacion.datos.inputPalabra);

        resultado.textContent = resultadoLocal;
    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    };

    btnRecuperar.onclick = () => {
        resultado.textContent = "";

        if (estadoAplicacion.recuperar()) {
            inputPalabra.value = estadoAplicacion.datos.inputPalabra || "";
            btnCalcular.onclick();

        } else {
            console.log("No hay datos guardados en el localStorage.");
        }
    };



}










