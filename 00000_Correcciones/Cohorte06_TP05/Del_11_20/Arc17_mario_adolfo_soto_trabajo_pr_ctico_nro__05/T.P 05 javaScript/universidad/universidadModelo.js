import {fnRequestAPI} from "../api.js";

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`; 
const URLBrasil = `http://universities.hipolabs.com/search?country=Brazil`; 

export const fnRecuperarUniversidades = async(pais)=>{

    let datos = "";
    switch(pais)
    {
        case 1 :
            { datos = await fnRequestAPI (URLArgentina);
            break;
            }
        case 2 :
            {
              datos = await fnRequestAPI (URLBrasil);
             
        break;
        }
        default :
    }
    return datos;


};
