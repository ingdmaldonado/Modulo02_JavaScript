import {fnRequestAPI} from "../api.js";

const UrlAfrica = `https://restcountries.com/v3.1/region/africa`;
const UrlAmerica = `https://restcountries.com/v3.1/region/americas`;
const UrlAsia = `https://restcountries.com/v3.1/region/asia`;
const UrlEuropa = `https://restcountries.com/v3.1/region/europe`;
const UrlOceania = `https://restcountries.com/v3.1/region/oceania`;

export const fnRecuperarPaises = async (PaisRecibido)=>{
    let PaisesRecuperados = "";
    switch(PaisRecibido)
    {
        case 1:
            PaisesRecuperados = await fnRequestAPI(UrlAfrica);
            break;
        case 2:
            PaisesRecuperados = await fnRequestAPI(UrlAmerica);
            break;
        case 3:
            PaisesRecuperados = await fnRequestAPI(UrlAsia);
            break;
        case 4:
            PaisesRecuperados = await fnRequestAPI(UrlEuropa);
            break;
        case 5:
            PaisesRecuperados = await fnRequestAPI(UrlOceania);
            break;                                                
    }
    return PaisesRecuperados;

};