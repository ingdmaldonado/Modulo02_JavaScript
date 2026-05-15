import { calcularDosisInsulina } from "./modelos.js";



window.onload = () => {

    const estadoAplicacion = {
        datos: {
            glucosaEnSangre: 0,
            peso: 0,
            tipoDiabetes: 0
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


    const inputGlucosa = document.getElementById('glucosa');
    const inputPeso = document.getElementById('peso');
    const selectTipoDiabetes = document.getElementById('tipoDiabetes');

    const resultadoDosis = document.getElementById('resultadoDosis');

    const btnCalcularDosis = document.getElementById('btnCalcularDosis');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');


    inputGlucosa.oninput = () => {
        estadoAplicacion.datos.glucosaEnSangre = Number(inputGlucosa.value);
        console.log(estadoAplicacion.datos);
    }

    inputPeso.oninput = () => {
        estadoAplicacion.datos.peso = Number(inputPeso.value);
        console.log(estadoAplicacion.datos);
    }

    selectTipoDiabetes.oninput = () => {
        estadoAplicacion.datos.tipoDiabetes = Number(selectTipoDiabetes.value);
        console.log(estadoAplicacion.datos);
    }


    btnCalcularDosis.onclick = () => {
        resultadoDosis.textContent = "";

        if (estadoAplicacion.datos.glucosaEnSangre < 0 || estadoAplicacion.datos.peso < 0) return alert("Glucosa en sangre o Peso Invalidos (deben ser mayores o iguales a 0)");

        if (estadoAplicacion.datos.tipoDiabetes === 0) return alert("Tipo de diabetes no seleccionada");

        let dosisLocal = calcularDosisInsulina (estadoAplicacion.datos.glucosaEnSangre, estadoAplicacion.datos.peso, estadoAplicacion.datos.tipoDiabetes);

        resultadoDosis.textContent = dosisLocal;
    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    };

    btnRecuperar.onclick = () => {
        resultadoDosis.textContent = "0";
        estadoAplicacion.recuperar();

        inputGlucosa.value = estadoAplicacion.datos.glucosaEnSangre;
        inputPeso.value = estadoAplicacion.datos.peso;
        selectTipoDiabetes.value = estadoAplicacion.datos.tipoDiabetes;
        
    };


}










