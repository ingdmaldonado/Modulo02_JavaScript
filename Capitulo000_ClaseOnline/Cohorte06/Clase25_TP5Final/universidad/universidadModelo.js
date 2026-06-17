import {fnRequestAPI} from "../api.js";


/* Es decir, el modelo se encargara de
utilizar la función de api.js para conectarse
al BackEnd y recuperar los datos, "procesarlos".
tratarlos y devolverselos al controlador en el formato
que necesite. Seguramente el controlador se lo pasara
a la vista.js que será la encargada de mostrar y visualizar
los datos en el DOM => Dom dinamico */

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrazil = `http://universities.hipolabs.com/search?country=Brazil`;

export const fnRecuperarUniversidades = async (pais)=>{

    let datos = "";
    switch(pais)
    {
        case 1: // ARGENTINA
            {
                datos = await fnRequestAPI(URLArgentina);
                break;
            }
           
        case 2: // BRASIL 
            {
                datos = await fnRequestAPI(URLBrazil);
                break;
            }

        default:

    }

    return datos;




};

