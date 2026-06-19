
import { fnRequestAPI } from "../api.js";

/* El modelo se encargara de
utilizar la funcion de api.js para conectarse
al backend y recuperar los datos, "procesarlos",
tratarlos y devolverselos al controlador en el formato
que necesite. Seguramente el controlador se lo pasara
a la vista.js que sera la encargada de mostrar y visualizar
los datos en el DOM => Dom dinamico */

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrasil = "http://universities.hipolabs.com/search?country=Brazil";

export const fnRecuperarUniversidades = async (pais) => {

    let datos = "";

    switch (pais) 
    {
        case 1: // ARGENTINA
            {
                datos = await fnRequestAPI(URLArgentina);
                break;
            }
        case 2: // BRASIL
            {
                datos = await fnRequestAPI(URLBrasil);
                break;
            }
        default:

    }

    return datos;


};

