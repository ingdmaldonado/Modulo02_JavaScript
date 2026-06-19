export const fnRequestAPI = async (URL) =>{
    let request = "";
    let datos = "";

    try{
        // hago el request y revibo el response //
        request = await fetch(URL); //promensa
        // si algo salio mal:
        if(!request.ok)
        {
            throw new Error("Se produjo un error en el intento de recuperar datos")

        }
        // convierto el response en formato json
        datos= await request.json();
        //  si todo salio bien hago un return datos
        return datos
    } catch (error) {
        throw new Error (`error en api.js - se produjo un error ${error.message}`);
    }
}