// universidad/utilidadesSpread.js
// IMPORTANTE: Cambiamos el nombre de la función importada al nuevo contexto
import { fnObtenerUniversidadesPorPais } from "./funcionesDelModelo.js";

export const practicarSpreadOperator = async (universidadesArg) => {
    console.log("--- PUNTO 03: SPREAD OPERATOR ---");
    try {
        // Buscamos el endpoint de Chile para hacer la combinación
        const urlChile = "http://universities.hipolabs.com/search?country=Chile";
        const universidadesChile = await fnObtenerUniversidadesPorPais(urlChile);
        
        // INCISO E: Combinar ambos vectores usando Spread Operator
        const todasLasUniversidades = [...universidadesArg, ...universidadesChile];
        console.log(`Inciso E -> Total combinadas (Arg + Chile): ${todasLasUniversidades.length}`);

        // INCISO F: Crear un objeto simplificado usando .map()
        const universidadesSimplificadas = universidadesArg.map(uni => {
            const { name, domains = ["-"], web_pages = ["-"] } = uni;
            return {
                nombre: name,
                dominio: domains[0],
                web: web_pages[0]
            };
        });

        console.log("Inciso F -> Ejemplo de universidad simplificada:", universidadesSimplificadas[0]);
        
        // Guardamos en el LocalStorage para el Punto 5
        localStorage.setItem("universidadesSimplificadas", JSON.stringify(universidadesSimplificadas));

    } catch (error) {
        console.error("Error en utilidadesSpread.js:", error.message);
    }
};