
/* El objetivo de esta función, es conectar con un endpoint que devuelva un listado de universidades, 
API => es el conjunto de todos los endpoints que expone una empresa


existen endpoints => propios de la empresa
y       endpoints => para entidades externas

*/


export const fnRequestApi = async (url) => {
    
        let request = "";
        let datos = "";


        try {
        
        // 1 - acá realizo el request a la API, y guardo la respuesta en la variable request y recibo el response//
            request = await fetch(url);

        // Si algo salió mal, se lanza un error, y se corta la ejecución del código, y se va al catch//
            if (!request.ok) {

                throw new Error("Se produjo un error al intentar recuperar los datos de la API");
                
            }
            
        // 2 - acá convierto la respuesta a un formato que pueda ser leído por JavaScript, y lo guardo en la variable datos//    
                datos = await request.json();

        // si todo salió bien, se devuelve la variable datos, que contiene el listado de universidades//

                return datos;

        } catch (error) {
            console.error(`error Api.js - se produjo ${error.message}`);
        }


};