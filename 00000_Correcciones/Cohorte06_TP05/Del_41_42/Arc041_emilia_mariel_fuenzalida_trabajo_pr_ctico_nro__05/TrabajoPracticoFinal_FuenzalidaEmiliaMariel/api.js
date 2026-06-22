export const fnrequestAPI = async (URL) => {

    let request = "";
    let datos = "";

    try {

        /**consulta asincrona al servidor */
        request = await fetch(URL);

        //si algo salio mal
        if (!request.ok) {

            throw new Error("Se produjo un error en el intento de recuperar datos");
        }

        //si salio bien convierto el reponse en JSON
        datos = await request.json();

        return datos;

    } catch (error) {

        throw new Error (`Error en api.js - Se produjo un error en ${error.message}`);
    }
}