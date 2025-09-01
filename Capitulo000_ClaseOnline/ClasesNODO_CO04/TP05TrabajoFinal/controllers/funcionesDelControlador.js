import {fnFetchApiPaises,getDatoSeguro,} from "../models/funcionesDelModelo.js";





export const fnClickRecuperarPaises = async (endPoint) => {

  let resultado = await fnFetchApiPaises(endPoint);

  //console.log(resultado);

  let paises = resultado.data;

  paises.forEach(pais =>{

      console.log(`Objeto - name.common (nombre común del país): ${getDatoSeguro(pais.name.common)}`);
      console.log(`Objeto - name.official (nombre oficial del país): ${getDatoSeguro(pais.name.official)}`);
      console.log(`Array - capital (capital o capitales del país): ${getDatoSeguro(pais.capital)}`);

      /*
      console.log(`Valor simple - region (continente al que pertenece): ${getDatoSeguro(pais.region)}`);
      console.log(`Valor simple - subregion (subregión dentro del continente): ${getDatoSeguro(pais.subregion)}`);
      console.log(`Valor simple - population (población total): ${getDatoSeguro(pais.population)}`);
      console.log(`Valor simple - area (superficie en km²): ${getDatoSeguro(pais.area)}`);
      console.log(`Objeto - demonyms.spa.m (gentilicio masculino en español): ${getDatoSeguro(pais.demonyms.spa.m)}`);
      console.log(`Objeto - demonyms.spa.f (gentilicio femenino en español): ${getDatoSeguro(pais.demonyms.spa.f)}`);
      console.log(`Objeto - languages (idiomas oficiales): ${getDatoSeguro(pais.languages)}`);
      console.log(`Valor simple - flag (bandera en emoji): ${getDatoSeguro(pais.flag)}`);
      */

      console.log(`Objeto - flags.png (URL de imagen PNG de la bandera): ${getDatoSeguro(pais.flags.png)}`);

      /*
      console.log(`Objeto - maps.googleMaps (enlace a Google Maps): ${getDatoSeguro(pais.maps.googleMaps)}`);
      console.log(`Valor simple - fifa (código FIFA del país): ${getDatoSeguro(pais.fifa)}`);
      console.log(`Array - timezones (zonas horarias): ${getDatoSeguro(pais.timezones)}`);
      console.log(`Array - continents (continente o continentes): ${getDatoSeguro(pais.continents)}`);
      */
      console.log("--------------------------------------------------");


  });




  return resultado;
};
