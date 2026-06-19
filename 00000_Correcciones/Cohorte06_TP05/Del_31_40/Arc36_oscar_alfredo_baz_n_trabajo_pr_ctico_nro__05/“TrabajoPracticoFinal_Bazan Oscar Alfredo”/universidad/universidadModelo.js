
//universidadModelo.js  en este archivo estoy guardando funciones que se encargan de utilizar api.js para recuperar las universidades y para pasarselas al controlador.js(universidad.js) 
/*
api => universidadModelo.js => universidad.js => controlador del universidad.html
*/









import  {fnRequestAPI}  from "../api.js";



//El modelo utilizara la funcion de api.js para conectarse al BackEnd y reuperar los datos, "Procesarlos" tratarlos y devolverlos al constrolador en el formato que necesite. Seguramente el controlador se lo pasara a la vista.js que seera la encargada de mostrar y visualizar los datos en el DOM mediante  Dom dinamico//






/* Estos serian Endpoints */
const URLArgentina = "http://universities.hipolabs.com/search?country=Argentina";
const URLBrazil = "http://universities.hipolabs.com/search?country=Brazil";
const URLAfrica = "https://restcountries.com/v3.1/region/africa";
const URLEuropa = " https://restcountries.com/v3.1/region/europe";

export const fnRecuperarUniversidades = async (pais) => {


    let datos = "";
    switch (pais) {

        case 1://Argentina//
            {
                 datos = await fnRequestAPI(URLArgentina);
                break;
            }

        case 2: //Brasil//

            {
                 datos = await fnRequestAPI(URLBrazil);
                break;
            }

        case 3: //Africa//
            {
                datos = await fnRequestAPI(URLAfrica)
                break;
            }
        case 4: //Europa//
            {
                datos = await fnRequestAPI(URLEuropa)
                break;
            }
        default:
    }
    return datos;
}