
export const fnRequestAPI = async (URL) => {
    let request ="";
    let datos ="";
    try {
        request = await fetch(URL);//promesa

        //si algo esta mal
        if(!request.ok)
        {
            throw new Error(`se preodujo un error en el intento de recuperar datos: ${request.status}`);
        }
        //convierto a json
        datos = await request.json();//promesa

        //recupero datos si todo salio bien
        return datos;

    } catch (error) {
        throw new Error(`Error en la función Api.js: ${error.message}`);
    }

};