
export const fnRequestApi = async (URL)=>{

    try {

        // aqui hago el Request //
        const Request = await fetch(URL);

        // Si la respuesta fue ok, convierto a json
        if(Request.ok)
        {
            const datos = await Request.json();

            return datos;
        }        
    } catch (error) {
        throw new Error("Hubo un problema no pudimos conectarnos");
    }



};