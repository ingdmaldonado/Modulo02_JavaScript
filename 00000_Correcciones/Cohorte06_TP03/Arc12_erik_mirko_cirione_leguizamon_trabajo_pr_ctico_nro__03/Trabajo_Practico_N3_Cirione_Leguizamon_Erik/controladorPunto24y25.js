import { calcularTasaSubsuelo } from "./modelos.js";
import { calcularTasaFiscalizacion } from "./modelos.js";

/*En este archivo estan los puntos 24 y 25 */ /**/


window.onload = () => {

    const estadoAplicacion = {
        datos: {
            importeBase: 0

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


    const importeBase = document.getElementById ("importeBase");
    const resultadoSubsuelo = document.getElementById('resultadoSubsuelo');                     /*24*/
    const resultadoFiscalizacion = document.getElementById('resultadoFiscalizacion');           /*25*/

    const btnCalcular = document.getElementById('btnCalcular');

    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');


    importeBase.oninput =()=>{
        estadoAplicacion.datos.importeBase = Number (importeBase.value);
        console.log (estadoAplicacion.datos);
    }


    btnCalcular.onclick = () => {
        resultadoSubsuelo.textContent = "";
        resultadoFiscalizacion.textContent = "";

        if (estadoAplicacion.datos.importeBase < 0) return alert("Importe Invalido (El importe debe ser mayor o igual a 0)");

        let resultadoLocalSubsuelo = calcularTasaSubsuelo (estadoAplicacion.datos.importeBase);          /*24*/
        let resultadoLocalFiscalizacion = calcularTasaFiscalizacion (estadoAplicacion.datos.importeBase);/*25*/

        resultadoSubsuelo.textContent = resultadoLocalSubsuelo;                     /*24*/
        resultadoFiscalizacion.textContent = resultadoLocalFiscalizacion;           /*25*/
    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    };

    btnRecuperar.onclick = () => {
        resultadoSubsuelo.textContent = "";
        resultadoFiscalizacion.textContent = "";
        estadoAplicacion.recuperar();
        importeBase.value = estadoAplicacion.datos.importeBase;
    };
}










