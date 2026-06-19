// api.js (En la raíz)
export const fnRequestApi = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('se produjo un error en el intento de recuperar datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error en la Api.js - se produjo un error ' + error.message);
    }
};