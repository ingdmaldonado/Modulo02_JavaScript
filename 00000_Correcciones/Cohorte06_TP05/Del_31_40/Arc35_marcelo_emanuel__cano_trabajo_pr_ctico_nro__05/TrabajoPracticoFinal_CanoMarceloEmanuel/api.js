export const fnRequestAPI = async (Url) => {

    let request = "";
    let datos = "";

    console.log("Dentro de fnRequestAPI - API.js",Url);

    try{
        request = await fetch(Url,{ headers: { 'Authorization': 'Bearer rc_live_f1ac23b7824e479388abe19ba19ef86b'} }); // realizo el request y recibo el response

        if(!request.ok){ // consulte el condigo de respuesta

            throw new Error("Se produjo el error al recuperar datos"); // Genero un error
        }
        
        datos = await request.json(); // convierto el response en formato JSON
        return datos

    }catch(error){
        
        throw new Error(`Error en API.js - se produjo un error ${error.message}`);
    }

};


