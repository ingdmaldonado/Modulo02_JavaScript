import { fnRequestAPI } from "../api.js";
//  el modelo usara la funcion de api.js para conectarse al backend y recuperar los datos, procesarlos, tratarlos y devolverlos al controlador con el formato que necesite. seguramente el controlador se lo pasara a la vista js que sera la encargada de mostrar y visualizar los datos en el dom => dom dinamico

const URLArgentina = "http://universities.hipolabs.com/search?country=Argentina"
const URLBrazil = "http://universities.hipolabs.com/search?country=Brazil"
const URLChile = "http://universities.hipolabs.com/search?country=Chile"
const URLUruguay = "http://universities.hipolabs.com/search?country=Uruguay"
const URLColombia = "http://universities.hipolabs.com/search?country=Colombia"
const URLMexico = "http://universities.hipolabs.com/search?country=Mexico"
const URLPeru = "http://universities.hipolabs.com/search?country=Peru"
const URLEspana = "http://universities.hipolabs.com/search?country=Spain"

export  const fnRecuperarUniversidades = async (pais)=>{
    let datos="";
    switch(pais)
    {
        case 1:
            datos = await fnRequestAPI(URLArgentina);
            break;
        
        case 2:
            datos = await fnRequestAPI(URLBrazil);
            break;

        case 3:
            datos = await fnRequestAPI(URLChile);
            break;

        case 4:
            datos = await fnRequestAPI(URLUruguay);
            break;

        case 5:
            datos = await fnRequestAPI(URLColombia);
            break;

        case 6:
            datos = await fnRequestAPI(URLMexico);
            break;

        case 7:
            datos = await fnRequestAPI(URLPeru);
            break;

        case 8:
            datos = await fnRequestAPI(URLEspana);
            break;

        default:
    }
    return datos

}