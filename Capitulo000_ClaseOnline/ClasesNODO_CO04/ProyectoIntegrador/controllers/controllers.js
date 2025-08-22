
import {obtenerPaisesAmerica} from "../models/paises.modelo.js";

export const fnRecuperarPaises = async () => {
  let resultado = await obtenerPaisesAmerica();
 
  return resultado;
};


