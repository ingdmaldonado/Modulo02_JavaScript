// universidad/funcionesDelModelo.js
import { fnRequestApi } from "../api.js";

export const fnObtenerUniversidadesPorPais = async (urlEndpoint) => {
    try {
        // Llama a api.js de manera directa como estaba pensado originalmente
        const datos = await fnRequestApi(urlEndpoint);
        return datos; 
    } catch (error) {
        console.error("Error en funcionesDelModelo.js:", error.message);
        throw error;
    }
};