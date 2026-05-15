
import { precioVenta } from './modelos.js';


window.onload = () => {

    const estadoAplicacion = {

        datos: {
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

    const importeCompra = document.getElementById('ImporteCompra');
    const porcentajeGanacia = document.getElementById('porcentajeGanacia');
    const btnCalcular = document.getElementById('btnCalcular');
    const resultado = document.getElementById('resultado');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');


    importeCompra.oninput = () => {
        estadoAplicacion.datos.importeCompra = Number(importeCompra.value);
    };

    porcentajeGanacia.oninput = () => {
        estadoAplicacion.datos.porcentajeGanacia = Number(porcentajeGanacia.value);
    };

    btnCalcular.onclick = () => {
        let compra = estadoAplicacion.datos.importeCompra;
        let ganancia = estadoAplicacion.datos.porcentajeGanacia;

        let importeVenta = precioVenta(compra, ganancia);

        resultado.textContent = importeVenta;
    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    }

    btnRecuperar.onclick = () => {
        estadoAplicacion.recuperar();
        importeCompra.value = estadoAplicacion.datos.importeCompra;
        porcentajeGanacia.value = estadoAplicacion.datos.porcentajeGanacia;
    }

}