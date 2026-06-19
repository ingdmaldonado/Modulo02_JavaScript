
import { fnRequestApi } from "../api.js";

/* es decir el modelo se encarga de utilizar la función api.js para conectarse al backend, y 
recuperar los datos, procesarlos, tratarlos y devolverselos al controlador en formato que necesite.
Seguramente el controlador se lo pasará a la vista.js que será la encargada de mostrarlos en pantalla (DOM => dinamico) */


const URLArgentina = "http://universities.hipolabs.com/search?country=Argentina";
const URLBrasil = "http://universities.hipolabs.com/search?country=Brazil";



export const fnRecuperarUniversidades = async (pais) => {

    let datos = "";

    switch (pais) {
        case 1: //Artentina//
            datos = await fnRequestApi(URLArgentina);
            break;
        case 2: //Brasil//
            datos = await fnRequestApi(URLBrasil);
            break;
        default:
            throw new Error("País no válido");
    }

    return datos;
};

