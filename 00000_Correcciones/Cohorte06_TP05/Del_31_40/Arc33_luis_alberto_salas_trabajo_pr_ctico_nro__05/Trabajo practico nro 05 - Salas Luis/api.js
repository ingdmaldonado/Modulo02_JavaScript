/* El objetivo de esta funcion es conectarme a un endPoint de una API

API => conjunto de todos los endPoint que expone una empresa, organizacion o web

    endPoint => propia empresa
    endPoint => actividades externas
*/

/*
    api.js => encarga de hacer request al backend de cualquier endpoint
*/
export const fnRequestAPI = async (URL) => {

    let request = "";
    let datos = "";

    try {
        //1) hago el request y recibo el response
        request = await fetch(URL) // promesa

        // si algo salio mal
        if(!request.ok)
        {
            throw new Error("Se produjo un error en el intento de recuperar datos")
        }

        // 2) aqui convierto el response en formato JSON
        datos = await request.json() // es una promesa

        // 3) si todo salio hago un return datos
        return datos
    } 
    catch (error) {
        throw new Error (`Error en Api.js - se produjo un error ${error.message}`)
    }

}
