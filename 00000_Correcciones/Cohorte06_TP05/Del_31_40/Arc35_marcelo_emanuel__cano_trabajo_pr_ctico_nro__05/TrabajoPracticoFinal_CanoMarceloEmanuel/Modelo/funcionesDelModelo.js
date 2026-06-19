import {fnRequestAPI} from "../api.js";


export const fnRecuperarPaises = async (region) =>{

    const Url =  `https://api.restcountries.com/countries/v5?region=${region}&pretty=1`;

    let datos ="";  
    
    datos = await fnRequestAPI(Url);   

    return datos;
    
};