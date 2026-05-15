
import { calcularSobreTasa } from './modelos.js'



window.onload = ()=>{

    const estadoAplicacion = {
        datos: {
            importeBase : 0,
            tipoBebida:0
            
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

    const importeBase = document.getElementById ('importeBase');
    const tipoBebida = document.getElementById ('tipoBebida');

    const resultado = document.getElementById ('resultado');

    const btnCalcular = document.getElementById ('btnCalcular');

    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');


    importeBase.oninput = ()=> {
        estadoAplicacion.datos.importeBase = Number (importeBase.value);
        console.log (estadoAplicacion.datos);
    } 

    tipoBebida.onchange = ()=> {
        estadoAplicacion.datos.tipoBebida = Number (tipoBebida.value);
        console.log (estadoAplicacion.datos);

    }

    btnCalcular.onclick = ()=> {
        resultado.textContent = "";

        if (estadoAplicacion.datos.importeBase < 0) return alert("El Importe es Invalido (debe ser mayor o igual a 0)");

        let resultadoLocal = calcularSobreTasa (estadoAplicacion.datos.importeBase, estadoAplicacion.datos.tipoBebida);
        resultado.textContent = resultadoLocal;
    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    };

    btnRecuperar.onclick = () => {
        resultado.textContent = "";
        estadoAplicacion.recuperar();
        importeBase.value = estadoAplicacion.datos.importeBase;
        tipoBebida.value = estadoAplicacion.datos.tipoBebida;
    };

}










