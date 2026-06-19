export const fnRequestApi = async (URL) => {

    let Request = "";
    let datos = "";

    try {

        Request = await fetch(URL);
        
        if (!Request.ok) 
        {

            throw new error("Se produjo un error en el intento de recuperar datos");
        
        }

        datos = await Request.json();

        return datos;
        
    } catch (error) {

        throw new Error ('Error en api.js - se produjoo un error ${error.message}')
        
    }

}