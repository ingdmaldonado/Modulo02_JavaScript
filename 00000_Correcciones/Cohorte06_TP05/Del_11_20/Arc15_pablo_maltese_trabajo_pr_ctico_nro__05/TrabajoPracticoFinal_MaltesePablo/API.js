
/* 
    El objetivo de esta función es conectarse a un endPoint de una API
*/
export const fnRequestAPI = async (URL)=>{
    let request = "";
    let datos = "";
    
    try {

        //1) Hago un request y recibo el response
        request = await fetch(URL);
        
        //Si algo slio mal
        if(!request.ok){
            throw new Error('Se produjo un error en el intento de recuperar datos');
        }
        
        //2) Aqui convierto el response en formato JSON
        datos = await request.json();

        //3) si todo salio bien hago unreturn datos
        return datos;

    } catch (error) {
       throw new Error(`Error en Api.js - se produjo un error: ${error.message}`);
    }
};