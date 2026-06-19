 import { fnRequestApi } from "./api.js";

const URLArgentina = "http://universities.hipolabs.com/search?country=Argentina";

const URLBrazil = "http://universities.hipolabs.com/search?country=Brazil";

 export const fnRecuperarUniversidades = async (pais) => {


    let datos = "";
    switch (pais)
    {
        case 1:
            {
            datos = await fnRequestApi(URLArgentina);
            break;
            }

        case 2:
        {
        datos = await fnRequestApi(URLBrazil);
        break;
        }
        
        default:
    }
    return datos;



 }