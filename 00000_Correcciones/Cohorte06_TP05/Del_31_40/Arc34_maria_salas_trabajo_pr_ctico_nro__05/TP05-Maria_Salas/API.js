export const fnRequestAPI = async (URL) => {

    try {
        const request = await fetch(URL);

        //si algo salio mal
        if(!request.ok)
        {
           throw new Error("se produjo un error al recuperar datos") 
        }

    //se convierte el response a JSON
        const datos = await request.json();

        return datos;

    } catch (error) {
        throw new Error (`error en API.js - se produjo un error ${error.message}`)
    } 
} 