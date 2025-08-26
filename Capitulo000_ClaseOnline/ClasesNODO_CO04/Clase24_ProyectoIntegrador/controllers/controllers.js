import { obtenerPaisesAmerica } from "../models/paises.js";

export const fnRecuperarPaises = async () => 
  {
  
    let resultado = await obtenerPaisesAmerica();

    return resultado;


};
