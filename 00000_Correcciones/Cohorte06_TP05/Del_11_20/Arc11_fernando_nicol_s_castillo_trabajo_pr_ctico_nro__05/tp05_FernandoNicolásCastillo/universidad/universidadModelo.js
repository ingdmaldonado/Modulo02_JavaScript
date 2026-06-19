
/*El modelo se ecargará de 
útilizar la función api.js para contantarse al BackEnd y 
recuperar los datos "procesarlos", tratarlos y devolverselos al controlador en formato que necesite. 
Seguramente el controlador se lo pasará a la vista.js que será la encargada de mostrar y visualizar los
datos en el DOM => Dinamic Object Model  
*/

import {fnRequestAPI} from "../api.js";


const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrazil = `http://universities.hipolabs.com/search?country=Brazil`;

export const fnRecuperarUniversidades = async (pais)=>{

    let datos = "";
    switch(pais)
    {
        case 1: /*ARGENTINA*/
            {
                datos = await fnRequestAPI(URLArgentina);
                break;
            }
        case 2: /*BRASIL*/
            {
                datos = await fnRequestAPI(URLBrazil);
                break;
            }
        
            default:
    }
    return datos;

};