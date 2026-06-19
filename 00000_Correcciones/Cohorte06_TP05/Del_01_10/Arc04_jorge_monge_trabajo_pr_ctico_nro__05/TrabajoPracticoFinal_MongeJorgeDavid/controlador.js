// controlador.js (Ubicado en la raíz del proyecto TP05)
import { fnObtenerUniversidadesPorPais } from "./universidad/funcionesDelModelo.js";
import { fnRenderizarUniversidades } from "./universidad/funcionesDeLaVista.js";
import { practicarSpreadOperator } from "./universidad/utilidadesSpread.js";
import { manejarVectoresLocalStorage } from "./universidad/utilidadesVectores.js";

// Función principal que inicia la app y configura el menú
export const fnIniciarApp = async () => {
    const selector = document.querySelector("#selectorPais");
    if (!selector) return;

    // Evento: Cada vez que el usuario cambia de país en el menú
    selector.addEventListener("change", async (event) => {
        const paisSeleccionado = event.target.value;
        await cargarDatosPorPais(paisSeleccionado);
    });

    // Carga inicial por defecto (Argentina) al abrir la página
    await cargarDatosPorPais(selector.value);
};

// Función auxiliar interna para no repetir código
const cargarDatosPorPais = async (pais) => {
    try {
        console.log(`Buscando universidades de: ${pais}...`);
        
        // 1 y 2. Construimos la URL dinámica y el Controlador le pide los datos al Modelo
        const urlDinamica = `http://universities.hipolabs.com/search?country=${pais}`;
        const universidades = await fnObtenerUniversidadesPorPais(urlDinamica);

        // 3. Mostrar el resultado por consola (Punto 1.3)
        console.log("Datos crudos recuperados de la API:", universidades);

        // Punto 02: Ejecutar destructuring pasándole los datos
        practicarDestructuring(universidades);

        // Punto 04: Pasamos los datos a la vista para renderizar la tabla enriquecida
        fnRenderizarUniversidades(universidades);

        // Punto 03 y 05: Utilidades complementarias
        await practicarSpreadOperator(universidades, pais);
        manejarVectoresLocalStorage();

    } catch (error) {
        console.error("Error en el Controlador:", error.message);
    }
};

// Ejecutar automáticamente al cargar la ventana
window.onload = () => {
    fnIniciarApp();
};

// --- PUNTO 02: DESTRUCTURING (UNIVERSIDADES) ---
export const practicarDestructuring = (universidades) => {
    console.log("--- PUNTO 02: DESTRUCTURING ---");

    // INCISO A: Destructuring básico
    console.log("👉 Inciso A:");
    universidades.slice(0, 3).forEach(uni => {
        const { name: nombre, country: pais, domains: dominios, web_pages: paginas } = uni;
        console.log(`Nombre: ${nombre} | País: ${pais} | Dom: ${dominios[0]} | Web: ${paginas[0]}`);
    });

    // INCISO B: Destructuring usando alias
    console.log("👉 Inciso B:");
    universidades.slice(0, 3).forEach(uni => {
        const { name: nombreUni, country: paisOrigen, "state-province": provincia } = uni;
        console.log(`Uni: ${nombreUni} | Región: ${provincia || "No especifica"}`);
    });

    // INCISO C: Destructuring directamente en los parámetros del callback
    console.log("👉 Inciso C:");
    universidades.slice(0, 3).forEach(({ name, country }) => {
        console.log(`N: ${name} | P: ${country}`);
    });

    // INCISO D: Destructuring de Arrays aplicado a 'domains' con valor por defecto
    console.log("👉 Inciso D:");
    universidades.slice(0, 3).forEach(uni => {
        const { name, domains = ["No tiene"] } = uni;
        const [primerDominio] = domains; 
        console.log(`Uni: ${name} | TLD: ${primerDominio}`);
    });
};