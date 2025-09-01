
import {fnRecuperarDatosDeApi} from "../modelo/funcionesdelmodelo.js";

export const fnClickEnBotonRecuperarPaises = async (endPoint)=>
    {
        console.log(`aqui tendría que recuperar los paises`);

        /* aqui la estoy "INVOCANDO" a la función
        y le voy a pasar como parametro la ruta
        al endPoint */

       let datos = await fnRecuperarDatosDeApi("https://restcountries.com/v3.1/region/europe");

       /* si una función definida. a dentro
       tiene procesos asíncronos que 
       deben esperar por su resolución.
       lo que quiere decir por propiedad transitiva
       es que toda la función debe esperar con await 
       */

    //   console.log(datos);

       return (datos);

    }