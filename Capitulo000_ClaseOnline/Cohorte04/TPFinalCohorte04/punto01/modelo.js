
 
/*
const URLAfrica = "https://restcountries.com/v3.1/region/africa";
const URLAmericas = "https://restcountries.com/v3.1/region/americas"; // ← usar "americas"
const URLAsia = "https://restcountries.com/v3.1/region/asia";
const URLEurope = "https://restcountries.com/v3.1/region/europe";
const URLOceania = "https://restcountries.com/v3.1/region/oceania";
*/



export const fnObtenerPaises = async URL => {
  try {
    const resp = await fetch(URL);

    if(!resp.ok)
    {
        return {
            resultado:false,
            data:"",
            mensaje:`Error HTTP ${resp.status} - ${resp.text}`,
        };
    }
    
   
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
      data: "",
      mensaje: `Error ${error.message}`,
    };
  }
};