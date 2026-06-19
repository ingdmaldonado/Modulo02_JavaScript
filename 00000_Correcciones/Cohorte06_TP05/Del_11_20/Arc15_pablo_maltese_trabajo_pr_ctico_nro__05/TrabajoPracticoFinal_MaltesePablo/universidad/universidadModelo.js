import {fnRequestAPI} from '../API.js';

/*  El modelo se encargará de invocar las funcion de API.js, para 
    conectarse a l BackEnd y recuperar los datos, 'Procesarlos',
    tratarlos y devolverselos al controlador en el formato en el que
    necesite. Seguramente el controlador se lo pasara a la vista.js 
    que será la encargada de mostrar y visualizar los datos en el 
    DOM => Dom dinámico
*/

const URLArgentina = 'http://universities.hipolabs.com/search?country=Argentina';
const URLBrazil = 'http://universities.hipolabs.com/search?country=Brazil';

export const fnRecuperarUniversidades = async (pais)=>{

    let datos = '';

    switch(pais){
        case 1:
            { //ARGENTINA   
                datos = await fnRequestAPI(URLArgentina);
                break;
            }
        case 2:
            { //BRAZIL
                datos = await fnRequestAPI(URLBrazil);
                break;
            }
        default:

    }

    return datos;
};