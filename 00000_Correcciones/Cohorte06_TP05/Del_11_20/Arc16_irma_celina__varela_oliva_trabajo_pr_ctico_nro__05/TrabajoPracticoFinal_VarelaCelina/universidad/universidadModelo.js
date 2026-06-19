import {fnRequestAPI} from "../api.js";

/*

es decir, el modelo se encarga de utilizar la funcion de api.js para conectarse al BackEnd y recuperar los datos, "procesados". tratarlo y devolverselos al controlador en el formato que necesite. seguramente el controlador se lo pasara a la vista.js que sera la encargada de mostar y visualizar los datos en el DOM => Dom dinamico

*/

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;

const URLBrazil = `http://universities.hipolabs.com/search?country=Brazil`;

export const fnRecuperarUniversidades = async (pais)=>{

    let datos = "";

    switch(pais){

        case 1:{ // Argentina
            datos = await fnRequestAPI(URLArgentina);

            break;
        
        }
        case 2: { // Brazil
            datos = await fnRequestAPI(URLBrazil);

            break;
        
        }

        default:{
            break;
        }

    }

    return datos;

};