import { calcularImporteAgua } from "./modelos.js";

window.onload = () => {

    const estadoAplicacion = {
        datos: {
            totalMetrosCubicos: 0
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

    /*Punto 23*/
    const totalMetrosCubicosLocal = document.getElementById('totalMetrosCubicosLocal');
    const resultadoImporte = document.getElementById('resultadoImporte');

    const btnCalcularImporteImporte = document.getElementById('btnCalcularImporte');

    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');

    

    totalMetrosCubicosLocal.oninput = () => {
        estadoAplicacion.datos.totalMetrosCubicos = Number(totalMetrosCubicosLocal.value);
        console.log(estadoAplicacion.datos);
    }

    btnCalcularImporte.onclick = () => {

        resultadoImporte.textContent = "";
        if (estadoAplicacion.datos.totalMetrosCubicos < 0) return alert("Consumo Invalido (el consumo debe ser mayor o igual a 0)");
        let resultadoImporteLocal = calcularImporteAgua(estadoAplicacion.datos.totalMetrosCubicos);
        resultadoImporte.textContent = resultadoImporteLocal;
    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    };

    btnRecuperar.onclick = () => {
        resultadoImporte.textContent = "";
        estadoAplicacion.recuperar();
        totalMetrosCubicosLocal.value = estadoAplicacion.datos.totalMetrosCubicos;
    };
}











