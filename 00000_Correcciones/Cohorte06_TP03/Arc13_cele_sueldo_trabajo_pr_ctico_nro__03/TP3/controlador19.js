// controlador.js

// importo la función del modelo
import { calcularPrecioVenta } from "./models19.js";


// =====================================================
// ESTADO DE LA APLICACION
// =====================================================

// acá voy guardando los datos del formulario
const estadoAplicacion = {

    importeCompra: "",
    margenGanancia: ""
};


// =====================================================
// VARIABLES DEL DOM
// =====================================================

let txtImporte = document.getElementById("importeCompra");

let txtMargen = document.getElementById("margenGanancia");

let resultado = document.getElementById("resultado");

let btnCalcular = document.getElementById("btnCalcular");

let btnGuardar = document.getElementById("btnGuardar");

let btnRecuperar = document.getElementById("btnRecuperar");


// GUARDAR DATOS EN EL ESTADO


// voy guardando el importe
txtImporte.addEventListener("input", () => {

    estadoAplicacion.importeCompra = txtImporte.value;
});


// voy guardando el margen
txtMargen.addEventListener("input", () => {

    estadoAplicacion.margenGanancia = txtMargen.value;
});



// CALCULAR PRECIO FINAL


btnCalcular.addEventListener("click", () => {

    // convierto a número
    let importe = Number(txtImporte.value);

    let margen = Number(txtMargen.value);

    // llamo a la función
    let precio = calcularPrecioVenta(importe, margen);

    // muestro el resultado
    resultado.textContent = "Precio final: $" + precio;
});



// GUARDAR EN LOCAL STORAGE


const guardarEstado = () => {

    localStorage.setItem(
        "estadoEj19",
        JSON.stringify(estadoAplicacion)
    );

    alert("Datos guardados");
};



// RECUPERAR DATOS


const recuperarEstado = () => {

    let datos = localStorage.getItem("estadoEj19");

    // verifico si existen datos
    if (datos != null) {

        let estado = JSON.parse(datos);

        // recupero los valores
        txtImporte.value = estado.importeCompra;

        txtMargen.value = estado.margenGanancia;

        // actualizo el estado nuevamente
        estadoAplicacion.importeCompra = estado.importeCompra;

        estadoAplicacion.margenGanancia = estado.margenGanancia;

        alert("Datos recuperados");
    }
};



// EVENTOS BOTONES


btnGuardar.addEventListener("click", guardarEstado);

btnRecuperar.addEventListener("click", recuperarEstado);