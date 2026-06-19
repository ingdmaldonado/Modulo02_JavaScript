export const fnRequestAPI = async (URL) =>{

    let request = "";
    let datos = "";

    try{
        request = await fetch(URL);

        if(!request.ok)
        {
            throw new Error ("se produjo un error en el intento de recuperar datos");
        }

        datos = await request.json();

        return datos;

    }catch(error){
        throw new Error(`Error en Api.js - se produjo un error ${error.message}`);

    }

}