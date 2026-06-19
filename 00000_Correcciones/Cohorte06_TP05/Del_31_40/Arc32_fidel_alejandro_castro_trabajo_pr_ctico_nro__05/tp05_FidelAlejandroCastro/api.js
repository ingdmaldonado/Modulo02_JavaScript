

export const fnRequestAPI = async (URL) =>{
    let request=""; //deberia ser response
    let datos="";
    try {
        // Hago el request y recibo el response //
        request = await fetch(URL);
        // si algo salio mal
        if(!request.ok){
            throw new Error("Se produjo un error en el sistema de recuperar datos")
        }
        // 2). Convertimos el respoonse en json
        datos = await request.json();
        // 3). Si todo salio bien devolvemos los datos
        return datos;

    } catch (error) {
        throw new Error (`Error en Api.js - se produjo un error ${error.message}`);
    }
}