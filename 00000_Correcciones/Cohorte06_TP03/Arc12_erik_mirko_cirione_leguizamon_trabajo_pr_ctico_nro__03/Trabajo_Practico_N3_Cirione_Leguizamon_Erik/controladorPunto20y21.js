
import { promedio } from './modelos.js';
import { evaluacion } from './modelos.js';
import { validacionNotas } from './modelos.js';


window.onload = () => {

    const estadoAplicacion = {
        datos: {
            nota1: 0,
            nota2: 0,
            nota3: 0
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

    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');
    const nota3 = document.getElementById('nota3');

    const btnCalcular = document.getElementById('btnCalcular');
    const resultado = document.getElementById('resultado');
    const txtResultado = document.getElementById ('txtResultado');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');
    const btnEvaluarResultado = document.getElementById ('btnEvaluarResultado');

    nota1.oninput = () => {
        estadoAplicacion.datos.nota1 = Number(nota1.value);
        console.log (estadoAplicacion.datos);
    };

    nota2.oninput = () => {
        estadoAplicacion.datos.nota2 = Number(nota2.value);
        console.log (estadoAplicacion.datos);
    };

    nota3.oninput = () => {
        estadoAplicacion.datos.nota3 = Number(nota3.value);
        console.log (estadoAplicacion.datos);
    };

    btnCalcular.onclick = () => {                   /*parte especifica del punto 20*/
        txtResultado.textContent = "";

        /*la funcion validacionNotas esta en la seccion de funciones extras del archivo modelos.js*/
        if (validacionNotas(estadoAplicacion.datos.nota1) && validacionNotas(estadoAplicacion.datos.nota2) && validacionNotas(estadoAplicacion.datos.nota3)){

            let promedioNota = promedio(estadoAplicacion.datos.nota1, estadoAplicacion.datos.nota2, estadoAplicacion.datos.nota3);

            resultado.textContent = promedioNota.toFixed(2);

        }else{
            alert (`Notas Invalidas (Las notas no pueden ser menores que 0 y tampoco mayores a 10)`);
        }

    };

    btnEvaluarResultado.onclick = ()=> {           /*esta parte es especialmente del punto 21*/

        let resultadoEvaluar = Number (resultado.textContent);

        let menssajeCondicion = evaluacion (resultadoEvaluar);

        txtResultado.textContent = menssajeCondicion;

    }

    btnGuardar.onclick = () => {
        estadoAplicacion.guardar();
    };

    btnRecuperar.onclick = () => {

        estadoAplicacion.recuperar();

        nota1.value = estadoAplicacion.datos.nota1;
        nota2.value = estadoAplicacion.datos.nota2;
        nota3.value = estadoAplicacion.datos.nota3;
    };






}










