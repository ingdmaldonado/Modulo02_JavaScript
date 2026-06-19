//el modelo se encargara de usar la funcion apis.js para conectarse al backend y recuperar los datos (Universidades), procesarlos, tratarlos y devolverselos al controlador del html(universidad.js) en el formato que necesite. Seguramente el controlador se lo pasara a la vista.js (univerdad.html) que sera la encargada de mostrar y visualizar en el DOM => DOM Dinamico.
import {fnRequestApi} from "../api.js";



const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrazil = `http://universities.hipolabs.com/search?country=Brazil`;


export const fnRecuperarUniversidades = async (pais) =>{

let datos = "";
switch (pais)
{
    case 1://ARGENTINA
        {
        datos = await fnRequestApi(URLArgentina);
        break;
        }

    case 2://BRASIL
        {datos = await fnRequestApi(URLBrazil);
        break;
        };
    
    default:
}

return datos;
};