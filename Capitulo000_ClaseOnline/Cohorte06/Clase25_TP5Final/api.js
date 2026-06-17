

/* El objetivo de esta función es
conectarme a un endPoint de una 
API 

API => Conjunto de todos los endPoint que expone una empresa, organizacion, la web

    endPoint => propia empresa
    endPoint => entidades externas

*/

export const fnRequestAPI = async (URL) =>{

    let request = "";
    let datos = "";

    try {
        // 1) hago el request y recibo el response //
        request = await fetch(URL); // promesa 

        // si algo salio mal
        if(!request.ok)
        {
            throw new Error("se produjo un error en el intento de recuperar datos");
        }

        // 2) aqui convierto el response en formato JSON //
        datos = await request.json(); // promesa 

        // 3) si todo salio bien hago un return datos
        return datos;       
        
        
    } catch (error) {
       throw new Error (`Error en Api.js - se produjo un error ${error.message}`);
    }
}