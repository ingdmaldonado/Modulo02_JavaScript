import { fnTieneAlMenosDosS } from "./modelo";

window.onload = () => {
    
    const estado = { palabra: "" };

    // Elementos del DOM
    const inputTexto = document.getElementById("inputTexto");
    const btnAceptar = document.getElementById("idBtnAceptar");
    const btnGuardar = document.getElementById("idBtnGuardar");
    const btnRecuperar = document.getElementById("idBtnRecuperar");
    const resultado = document.getElementById("idResultado");

    function analizarPalabra() {
        const palabra = estado.palabra.trim();
    

        const tieneDosS = fnTieneAlMenosDosS(palabra);

        if (tieneDosS) {
            resultado.innerHTML = `La palabra <sueños>"${palabra}"</sueños> tiene al menos dos "s"`;
        } else {
            resultado.innerHTML = ` La palabra <uva>"${palabra}"</uva> NO tiene dos "s"`;
        }
    }

    inputTexto.oninput = () => {
        estado.palabra = inputTexto.value;
    };

    btnAceptar.onclick = analizarPalabra;

    btnGuardar.onclick = () => {
        if (estado.palabra.trim() === "") {
            alert("saludos");
            return;
        }
        localStorage.setItem("gauardados", JSON.stringify(estado));
        alert("Datos guardados correctamente");
    };

    btnRecuperar.onclick = () => {
        const datos = localStorage.getItem("guardados");
        if (!datos) {
            alert("No hay datos guardados");
            return;
        }
        const datosParseados = JSON.parse(datos);
        estado.palabra = datosParseados.palabra || "Saludosss";
        inputTexto.value = estado.palabra;
        analizarPalabra();
    };

    // Cargar datos guardados al abrir la página//
    const datosGuardados = localStorage.getItem("datosEjercicio29");
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        estado.palabra = datos.palabra || "guardadosss";
        inputTexto.value = estado.palabra;
        analizarPalabra();
    }
};