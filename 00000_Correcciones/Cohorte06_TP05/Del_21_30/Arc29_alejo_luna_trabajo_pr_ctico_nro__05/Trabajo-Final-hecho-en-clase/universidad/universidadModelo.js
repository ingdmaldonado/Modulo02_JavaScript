import{fnRequestAPI} from "../api.js";

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrazil = `http://universities.hipolabs.com/search?country=Brazil`;

export const fnRecuperarUniversidades = async (pais)=>{

    let datos;

    switch(pais)
    {
        case 1: //argentina
            {
                datos = await fnRequestAPI (URLArgentina);
                break;
            }
        case 2: //brasil 
            {
                 datos = await fnRequestAPI (URLBrazil);
                 break;
            }
    default:
    }
    return datos;
};