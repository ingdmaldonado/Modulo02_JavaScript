/* API.js */
export const fnRequestAPI = async(URL) => {

    try {

        const request = await fetch(URL);

        if (!request.ok) {
            throw new Error("Error al recuperar datos");
        }

        const datos = await request.json();

        return datos;

    } catch (error) {

        throw new Error(error.message);

    }

};