/* El objetivo de esta función es conectarme a un endPoint de una API
API => es el conjunto de todos los endPoint que expone un empresa/organizacion/web
        endPoint => propia empresa
        endPoint => entidades externas
*/    

export const fnRequestAPI = async (URL) =>{
    let request = "";
    let datos = "";

  try {
    //1) hago el request y recibo el response//
        request = await fetch(URL);
        
    //si algo salió mal//
        if(!request.ok)
        {
            throw new Error("se produjo un error en el intento de recuperar datos");
        }
    //2) aquí convierto el respons en formato JSON//  
        datos = await request.json();
        
    //3) si todo salió bien, hago un return datos//   
        return datos;

  } catch (error) {
        throw new Error (`Error en Api.js - se produjo un error ${error.message}`);
  }  

}