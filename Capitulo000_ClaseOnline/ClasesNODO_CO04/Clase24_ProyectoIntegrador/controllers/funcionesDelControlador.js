import { obtenerPaisesAmerica } from "../models/funcionesDelModelo.js";

const URLAfrica = "https://restcountries.com/v3.1/region/africa";
const URLAmerica = "https://restcountries.com/v3.1/region/americas"; // ← usar "americas"
const URLAsia = "https://restcountries.com/v3.1/region/asia";
const URLEurope = "https://restcountries.com/v3.1/region/europe";
const URLOceania = "https://restcountries.com/v3.1/region/oceania";

export const fnRecuperarPaises = async () => {
  let resultado = await obtenerPaisesAmerica(URLAmerica);

  //console.log(resultado);

  let paises = resultado.data;

  //console.log(paises);

  paises.forEach((pais,index) => 
    {

      console.log(`pais ${index + 1} ---`);

      // muestro el pais completo - objeto completo con toda su estructura //
      //console.log(`pais completo ---`);
      //console.log(pais);

      // muestro de todo el pais completo - el objeto name //
      //console.log(`pais - name ---`);
      //console.log(pais.name);

      // muestro de todo el pais completo - el objeto name - nombre pais //
      //console.log(`pais - name - official ---`);
      console.log(pais.name.official);





    })





  return resultado;
};
