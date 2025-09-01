
import {fnRecuperarDatosDelClima} from "./modelo.js";

export const fnClickRecuperar = async ()=>
    {
        console.log(`me estan haciendo click`);

        let resultado = await fnRecuperarDatosDelClima();

        resultado.forEach(element => 
            {
                if(element.province.toUpperCase() ==='NEUQUÉN')
                {
                    console.log(element);
                }
            })

        console.log(resultado);

    }