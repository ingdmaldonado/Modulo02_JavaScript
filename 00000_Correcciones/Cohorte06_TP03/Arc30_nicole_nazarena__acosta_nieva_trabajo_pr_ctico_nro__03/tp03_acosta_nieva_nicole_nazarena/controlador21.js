/*Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto*/


import { fnNotaDelAlumno} from "./modelo21.js";
const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = (idNota) => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idNota.value = estadoObjeto.nota;
    }
};


window.onload = () => {
  
    const estadoAplicacion = {
        nota: 0
    }

    const idNota = document.querySelector("#idNota");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    recuperarEstado();

    idNota.oninput = () => {
        estadoAplicacion.nota = Number(idNota.value);
    }
    idBtnCalcular.onclick = () => {

        let nota = Number(idNota.value);

        let resultado = fnNotaDelAlumno(estadoAplicacion.nota);
   guardarEstado(estadoAplicacion);
        idResultado.textContent = `el resultado promedio es : ${resultado}`;
    }
}