import { fnRequestAPI } from "../API.js"; 

const URLArgentina = "http://universities.hipolabs.com/search?country=Argentina"
const URLBrazil = "http://universities.hipolabs.com/search?country=Brazil"

//el modelo se encarga de usar la funcion de API para conectarse 
export const fnRecuperarUniversidades = async (pais) => {

    let datos = "";

    switch(pais)
    {
        case 1:{
            datos = await fnRequestAPI(URLArgentina);
            break
        }
        case 2:{
             datos = await fnRequestAPI(URLBrazil);
            break;
        }
        default:{
            return `error al cargar`
        }
        
    }

    return datos;


}