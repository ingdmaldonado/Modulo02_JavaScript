
//apis.js => se encarga de hacer request al BackEnd de cualquier EndPoint//
export const fnRequestApi = async (URL) =>{

    let request = "";
    let datos = "";

    try 
    {
        //1- Hago el request y recibo el response//
        request = await fetch (URL);  //promesa//

        //si algo salio mal//
        if (!request.ok)
        {
            throw new Error ("se produjo un error en el intento de recuperar datos");
        }
        //2- Aqui convierto el response en formato JSON//
        datos = await request.json(); //promesa//

        //3- Si todo salio bien hago return datos//
        return datos;


    } catch (error) {

        throw new Error (`Error en Api.js - se produjo un error ${error.message}`);
        
    } 
};