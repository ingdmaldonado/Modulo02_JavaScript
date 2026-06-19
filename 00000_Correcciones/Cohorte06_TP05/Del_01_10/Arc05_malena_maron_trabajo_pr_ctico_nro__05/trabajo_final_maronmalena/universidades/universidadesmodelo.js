import { fnRequestApi } from "../api.js"

const URLargentina=`http://universities.hipolabs.com/search?country=Argentina`;

const URLbrasil=`http://universities.hipolabs.com/search?country=Brazil`

export const fnRecuperarUni = async(pais)=>{
     
    let datos= "";
    switch (pais) {
        case 1:{
            datos= await fnRequestApi(URLargentina)
        }
            
            break;
        case 2:{
            datos=  await fnRequestApi(URLbrasil)
        }    
        break;
    
        default:
           
            
    }
    return datos;
}

