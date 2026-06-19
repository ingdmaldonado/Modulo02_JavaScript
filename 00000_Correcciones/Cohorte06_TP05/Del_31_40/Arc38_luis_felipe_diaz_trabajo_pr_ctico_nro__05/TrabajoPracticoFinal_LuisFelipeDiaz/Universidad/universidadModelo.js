import { peticionFetch } from '../api.js';

export const obtenerUniversidades = async (pais) => {
    const url = `http://universities.hipolabs.com/search?country=${pais}`;
    const datos = await peticionFetch(url);
    return datos;
};