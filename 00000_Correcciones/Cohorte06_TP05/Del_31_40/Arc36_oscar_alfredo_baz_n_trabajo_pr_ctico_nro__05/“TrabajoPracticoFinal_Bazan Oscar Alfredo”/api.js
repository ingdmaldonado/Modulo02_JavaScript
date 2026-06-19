/*Hacer una cionsulta a la app, eso significa la funcion fnRequestAPI. El objetivo es conectarme a una endPoint de una API

API => Conjunto de todos los endPoints que expone una empresa, organizacion, la web.

Tiene un conjunto de:
 endPoint => para su propia empresa
 endPoint => para terceros o entidades externas.

api.js se encarga de hacer request al BackEnd de cualquier EndPoint


*/


export const fnRequestAPI = async (URL) => {

    let request = "";
    let datos = "";

    try {
        // 1)Hago request y recibo el response//

        request = await fetch(URL);

       //* console.log(request);//


       //Si algo sale mal//
        if (!request.ok)
     {
        throw new Error ("Se produjo un error en el intento de recuperar datos");

        }

        //2) Aqui convierto el response en formato JSON//
        datos = await request.json();


        //Si todo salio bien hago un return datos//
        return datos;



    } catch (error) {
        throw new Error (`Error en Api.js - se produjo un error ${error.message}`);
    }
}