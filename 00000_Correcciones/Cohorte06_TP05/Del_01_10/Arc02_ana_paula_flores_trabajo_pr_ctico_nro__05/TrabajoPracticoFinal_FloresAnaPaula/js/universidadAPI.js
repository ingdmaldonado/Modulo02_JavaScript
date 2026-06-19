export const fnRequestAPI = async (URL)=>{

    try {

        // aqui hago el request //
        const request = await fetch(URL);

        // si la respuesta fue correcta //
        if(request.ok)
        {
            const datos = await request.json();

            return datos;
        }

    } catch (error) {

        console.log(error);

    }

};