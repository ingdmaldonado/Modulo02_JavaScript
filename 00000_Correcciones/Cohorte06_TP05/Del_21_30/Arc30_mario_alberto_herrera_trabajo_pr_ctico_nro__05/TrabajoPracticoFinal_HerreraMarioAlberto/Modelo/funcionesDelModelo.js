
export const obtenerDatosDeEndpoint = async (url) => {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error en la conexión");
        
        const datos = await respuesta.json();
        
        console.log("Datos recuperados de la API:", datos);
        
        
        return datos;
    } catch (error) {
        console.error("Falla en el Modelo:", error);
        
        
        const datosRespaldo = [
            { name: { common: "Argentina" }, capital: ["Buenos Aires"], population: 45000000, flags: { png: "https://flagcdn.com/w320/ar.png" } },
            { name: { common: "Brasil" }, capital: ["Brasilia"], population: 214000000, flags: { png: "https://flagcdn.com/w320/br.png" } }
        ];
        
        console.log("Datos recuperados (Respaldo):", datosRespaldo);
        return datosRespaldo;
    }
};