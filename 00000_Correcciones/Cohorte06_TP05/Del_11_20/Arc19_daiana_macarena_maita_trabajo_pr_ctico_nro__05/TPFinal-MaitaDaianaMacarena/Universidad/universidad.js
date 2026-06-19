/* universidad.js - El Controlador */
import { fnRecuperarUniversidades } from "./universidadModelo.js";
import { fnUniversidadesToViews, fnRender } from "./universidadVista.js";

// 1. Capturar los elementos del DOM necesarios
const selectorPais = document.getElementById("idSelectorPais");
const botonRecuperar = document.getElementById("idBtRecuperar");
const cuerpoTabla = document.getElementById("idCuerpoDelatabla");

// 2. Crear la función manejadora del evento
const manejarRecuperacion = async() => {
    // Obtenemos el valor del select y lo pasamos a entero (1 o 2) para el switch del modelo
    const paisSeleccionado = parseInt(selectorPais.value);

    try {
        // Mostramos un mensaje temporal de carga en la tabla
        cuerpoTabla.innerHTML = `<tr><td colspan="4" style="text-align: center;">Cargando universidades...</td></tr>`;

        // Lógica: Pedir datos al Modelo
        const datosUniversidades = await fnRecuperarUniversidades(paisSeleccionado);

        // Lógica: Convertir datos a elementos de Vista
        const vistasFilas = fnUniversidadesToViews(datosUniversidades);

        // Lógica: Renderizar en el DOM
        fnRender(vistasFilas, cuerpoTabla);

    } catch (error) {
        console.error(error);
        cuerpoTabla.innerHTML = `<tr><td colspan="4" style="text-align: center; color: red;">Error al cargar los datos.</td></tr>`;
    }
};

// 3. Asignar el evento al botón
botonRecuperar.addEventListener("click", manejarRecuperacion);