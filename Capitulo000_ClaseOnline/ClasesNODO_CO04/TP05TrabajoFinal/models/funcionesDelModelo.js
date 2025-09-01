    


export const fnFetchApiPaises = async (endPoint) => {
  try {    

    const resp = await fetch(endPoint);
   
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


// Devuelve el valor si existe, o "Sin dato" si no está definido/null
export const getDatoSeguro = (valor) => {
  return valor ? valor : "Sin dato";
};
