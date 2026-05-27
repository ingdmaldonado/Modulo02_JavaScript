import { calcularPromedio } from "./modelo.js";

let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
let btnCalcular = document.querySelector("#btnCalcular");
let btnGuardar = document.querySelector("#btnGuardar");
let btnRecuperar = document.querySelector("#btnRecuperar");
let resultado = document.querySelector("#resultado");

/*aquí guardo el estado de la aplicación*/

const estadoAplicacion = {

    nota1: 0,
    nota2: 0,
    nota3: 0

};

/*uso esto para actualizar el estado en tiempo real*/

nota1.oninput = function () {

    estadoAplicacion.nota1 = Number(nota1.value);

};

nota2.oninput = function () {

    estadoAplicacion.nota2 = Number(nota2.value);

};

nota3.oninput = function () {

    estadoAplicacion.nota3 = Number(nota3.value);

};

/*Promedio:*/

btnCalcular.onclick = function () {

    let promedio = calcularPromedio(

        estadoAplicacion.nota1,
        estadoAplicacion.nota2,
        estadoAplicacion.nota3

    );

    resultado.textContent = "El promedio es: " + promedio;

};

btnGuardar.onclick = function () {

    localStorage.setItem(
        "estadoNotas",
        JSON.stringify(estadoAplicacion)
    );

    alert("Estado guardado correctamente");

};

/* uso esto para recuperar datos*/

btnRecuperar.onclick = function () {

    let datosGuardados = JSON.parse(
        localStorage.getItem("estadoNotas")
    );

    if (datosGuardados != null) {

        estadoAplicacion.nota1 = datosGuardados.nota1;
        estadoAplicacion.nota2 = datosGuardados.nota2;
        estadoAplicacion.nota3 = datosGuardados.nota3;

        nota1.value = estadoAplicacion.nota1;
        nota2.value = estadoAplicacion.nota2;
        nota3.value = estadoAplicacion.nota3;

        alert("Datos recuperados correctamente");

    } else {

        alert("No hay datos guardados");

    }

}