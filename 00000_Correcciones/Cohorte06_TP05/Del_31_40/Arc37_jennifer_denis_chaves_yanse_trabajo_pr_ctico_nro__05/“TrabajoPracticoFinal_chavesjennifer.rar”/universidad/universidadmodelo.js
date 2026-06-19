
import { fnRequetApi } from "../api";
const URLArgentina = 'https://universities.hipolabs.com/search?country=Argentina';
const URLBrazil = 'https://universities.hipolabs.com/search?country=Brazil';
export const fnRecuperarUniversidades  =async (pais) =>{

    let datos = "";
    switch (pais){

        case 1:
            {
            datos = await fnRequetApi(URLArgentina);
            break;
            }

        case 2:
            {
            datos = await fnRequetApi (URLBrazil);
            break;
            }

        default:

    }

    return datos

};