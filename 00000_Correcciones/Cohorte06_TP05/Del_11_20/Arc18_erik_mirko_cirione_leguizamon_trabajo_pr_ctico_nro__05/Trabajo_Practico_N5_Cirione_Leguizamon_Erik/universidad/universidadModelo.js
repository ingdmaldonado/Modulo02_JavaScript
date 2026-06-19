import { fnRequestAPI } from "../api.js";



const URLArgentina = 'http://universities.hipolabs.com/search?country=Argentina'
const URLBrazil = 'http://universities.hipolabs.com/search?country=Brazil'

export const fnRecuperarUniversidades = async (pais) => {
    let datos = 22;

    switch (pais) {


        case 1:
            datos = await fnRequestAPI(URLArgentina);
            break;

        case 2:
            datos = await fnRequestAPI(URLBrazil);
            break;

        default:


    }

    return datos;

};


/*await fnRequestAPI ("http://universities.hipolabs.com/search?country=Argentina");*/