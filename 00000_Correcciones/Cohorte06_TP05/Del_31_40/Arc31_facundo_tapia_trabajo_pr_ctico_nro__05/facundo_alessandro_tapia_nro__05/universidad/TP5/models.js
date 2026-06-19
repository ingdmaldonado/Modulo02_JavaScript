import { finRequestAPI } from "../API.js";

/* 

    Las reglas

    modelo.js     → habla con el servidor
    vista.js      → habla con el DOM
    controlador.js → habla con el modelo y con la vista, nunca directamente con el servidor ni con el DOM

es decir el modelo se encarga de utilizar la funcion de api.js para conectarse al backend y recuperar los datos ,"procesarlos "tratarlos y devolverselos al controlador 
en un formato que necesite .seguramente el control se lo pasara a la vista.js que sera la encargada de mostrar y visualizar los datos en el => DOM dinamico 
*/

const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrazil = `http://universities.hipolabs.com/search?country=Brazil`;
const URLPeru = `http://universities.hipolabs.com/search?country=Peru`;

export const fnRecuperarUniversidades = async (pais) => {
  let datos = []; // Es mejor inicializarlo como un array vacío

    switch (pais) {
    case 1:
      datos = await finRequestAPI(URLArgentina); // Sin 'const', directo a la variable de arriba
    break;

    case 2:
    datos = await finRequestAPI(URLBrazil);
    break;

    case 3:
    datos = await finRequestAPI(URLPeru);
    break;

    default:
      datos = []; // Por seguridad si mandan otro número
}

  return datos; // Ahora sí viaja con la información de la API
};
