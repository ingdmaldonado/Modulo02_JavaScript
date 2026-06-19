
import { fnRequestAPI } from "../api.js";

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrasil = `http://universities.hipolabs.com/search?country=Brazil`;

export const fnRecuperarUniversidades = async (pais) => {
    let datos = "";
    switch (pais) {
        case 1: // Argentina
            datos = await fnRequestAPI(URLArgentina);
            break;

        case 2: // Brasil
            datos = await fnRequestAPI(URLBrasil);
            break;

        default:
            datos = null;
    }
    return datos;
};

/* api.js => se encarga de hacer request al BackEnd de cualquie EndPoint 
asi como eso tambien productos donde es inviables si tiene muchos productos 
universidadModelo.js => en este archivo estoy guardando funciones que se encargan
de utilizar api.js para recuperar las Universidades que corresponden a las pasarelas del universidad.js 
api => universidadModelos.js => universidad.js 
universidad.js 
 */