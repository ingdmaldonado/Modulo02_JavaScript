
// paises.modelo.js

//const URL = "https://restcountries.com/v3.1/all";       

const URLAfrica = "https://restcountries.com/v3.1/region/africa";
const URLAmericas = "https://restcountries.com/v3.1/region/americas"; // ← usar "americas"
const URLAsia = "https://restcountries.com/v3.1/region/asia";
const URLEurope = "https://restcountries.com/v3.1/region/europe";
const URLOceania = "https://restcountries.com/v3.1/region/oceania";


export const obtenerPaisesAmerica = async () => {
  try {
    const resp = await fetch(URLAfrica);
   
    const data = await resp.json();

    return {
      resultado:true,
      data,
      mensaje: "Datos recuperados con éxito",
    };

  } catch (error) {
    // Error de red, CORS, conexión, etc.
    return {
      resultado:false,
      data: null,
      mensaje: `Error ${error.message}`,
    };
  }
};
