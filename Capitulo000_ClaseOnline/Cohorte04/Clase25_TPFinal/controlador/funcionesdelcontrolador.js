
import {fnRecuperarDatosDeApi} from "../modelo/funcionesdelmodelo.js";

export const fnClickEnBotonRecuperarPaises = async (endPoint)=>
    {
        console.log(`aqui tendría que recuperar los paises`);

        /* aqui la estoy "INVOCANDO" a la función
        y le voy a pasar como parametro la ruta
        al endPoint */

       let datos = await fnRecuperarDatosDeApi(endPoint);

       //console.log(datos);

       /* si una función definida. a dentro
       tiene procesos asíncronos que 
       deben esperar por su resolución.
       lo que quiere decir por propiedad transitiva
       es que toda la función debe esperar con await 
       */

    //   console.log(datos);

       return (datos);

    }


    /* aqui estará toda la lógica necesaria y suficiente
    para conectarme a dos endPoint diferentes. recuperar
    los datos de dos regiones distintas */

    export const fnClickEnBotonSpreadOperator = async (endPoint1,endPoint2)=>
      {

         let vectorUnificado = [];

         /* consulta al Primer EndPoint */
         const resultado1 = await fnRecuperarDatosDeApi(endPoint1);
        // console.log(resultado1);

         /* consulta al Segundo EndPoint */
         const resultado2 = await fnRecuperarDatosDeApi(endPoint2);
        // console.log(resultado2);

         if((resultado1.resultado) && (resultado2.resultado))
         {
            /* aqui vamos a utilizar spread operator.
            que es el operador de propagacion. */

            vectorUnificado = [...resultado1.datos,...resultado2.datos];

         }
         else
         {
            alert("algo fallo");
         }

         //console.log(vectorUnificado);

         return vectorUnificado; // aqui estoy devolviendo los datos fusionados.

      }