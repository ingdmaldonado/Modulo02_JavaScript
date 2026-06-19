import {fnRequestAPI} from "./api.js";

//el modelo se enargara de usar la funcion api.js para conectarse al backend
//y recuperar los datos y procesarlos, tratarlos y devolverlos en el formato
//que se necesite y vista.js cargara y visualizara losd atos en el DOM

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrasil = `http://universities.hipolabs.com/search?country=Brazil`;
const URLChile = `http://universities.hipolabs.com/search?country=Chile`;

export const fnRecuperarUniversidades = async (pais)=>{
    let datos = "";
    switch (pais) {
        case 1:{
            datos = await fnRequestAPI(URLArgentina);
            break;
        }
        case 2:{
            datos = await fnRequestAPI(URLBrasil);
            break;
        }
        case 3:{
            datos = await fnRequestAPI(URLChile);
            break;
        }
        default:{
            break;
        }
    }
    return datos;
}