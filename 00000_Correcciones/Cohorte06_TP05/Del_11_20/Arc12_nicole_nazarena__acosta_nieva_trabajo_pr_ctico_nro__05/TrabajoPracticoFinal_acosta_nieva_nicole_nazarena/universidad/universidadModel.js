import {requestAPI} from "../api.js"

const URLArgentina = "http://universities.hipolabs.com/search?country=Argentina";
const URLBrazil = "http://universities.hipolabs.com/search?country=Brazil";
const URLChile = "http://universities.hipolabs.com/search?country=Chile";

export const recuperarUniversidades = async (pais)=>{

     let datos= "";
switch(pais){

    case 1:
         {
            datos = await requestAPI(URLArgentina);

    break;
}
    case 2:
        {
            datos = await requestAPI(URLBrazil);

        break;
}
        case 3:
            {
                datos = await requestAPI(URLChile);

            break;
}
default:
    break;
  
};
return datos;
};