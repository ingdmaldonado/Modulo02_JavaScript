export const FnRequestAPI = async (URL) => {

    let request = "" ;
    let datos = "" ;

    try {

        request = await fetch(URL);

        if(!request.ok)

            {
                    throw new Error ("se produjo un error al intentar recuperar datos");
            }
        datos = await request.json();
        
        return datos ;

       console.log (request);
        
    } catch (error) {

        throw new Error(`Error en Api.js - se produjo un error ${error.message}`);
        
        
    }
}