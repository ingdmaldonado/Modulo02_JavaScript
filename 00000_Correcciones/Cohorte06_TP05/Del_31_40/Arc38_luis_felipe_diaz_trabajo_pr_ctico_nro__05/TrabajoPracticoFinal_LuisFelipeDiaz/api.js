export const peticionFetch = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al conectar con la API');
        return await response.json();
    } catch (error) {
        console.error("Hubo un error de red:", error);
        return [];
    }
};