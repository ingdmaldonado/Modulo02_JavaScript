import {fnRequestAPI} from "../api.js"

/* el modelo se encargara de utilizar la funcion de api.js para conectarse al backend y recuperar los datos, "procesarlos", tratarlos y devolverlos al controlador en el formato que necesite. seguramente el controlador se lo pasara a la vista.js que sera la encarcargada de mostrar y visualizar los datos el DOM => dom dinamico
*/

/*
    en este archivo estoy guardando funciones que se encargan de utilizar api.js para recuperar las universidades y pasarlas al universidad.js

    universidad.js => controlador de universidad.html
*/

const URLArgentina = "http://universities.hipolabs.com/search?country=Argentina"
const URLBrazil = "http://universities.hipolabs.com/search?country=Brazil"

export const fnRecuperarUniversidades = async (pais)=>{

    let datos = ""
    switch(pais)
    {
        case 1:
        {
            datos = await fnRequestAPI(URLArgentina)
            break;
        }
        case 2:
        {
            datos = await fnRequestAPI(URLBrazil)
            break;
        }
        default:
        {

        }
    }

    return datos

}

