
/* función asíncrona que permite obtener las provincias de Argentina */

/* 
  API REST => JSON => ABIERTA

    ABIERTA: no necesitas registrarte previamente en una página
    para que te de un token y en función de eso poder acceder
    a la api. es la mas simple de todas y puedo pegar el link
    en el navegador y ver

    SEGURIDAD: registrar, te dan un TOKEN y con eso recién
    podes acceder a la API.

*/


export const fnObtenerProvincias = async () => {
  try { 
    /*  aqui pongo el bloque de codigos de cosas que quiero
    que se ejecuten en bloque y si falla algo, salir por el catch
    */

    const URL = `https://apis.datos.gob.ar/georef/api/provincias`;
    const respuesta = await fetch(URL);   // 1) request a esa api => respuesta (formato propio del request)
    const data = await respuesta.json(); // 2) convertir el resultado del fetch => JSON
    return data;
  } catch (error) 
  {
    /* El catch es el bloque que se dispara cuando algo del try falla. */
    console.error('se produjo un error: ', error);
    throw error;
  }
};


/* función asíncrona que permite obtener los departamentos de una provincia de Argentina */

export const fnObtenerDepartamentos = async (idProvincia) => {
  try {
    const URL = `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${idProvincia}&max=5000`;
    const respuesta = await fetch(URL);  
    const data = await respuesta.json();
    return data;
  } catch (error) 
  {
    console.error('Error al obtener Departamentos', error);
    throw error;
  }
};

/* función asíncrona que permite obtener las Universidades del Mundo */

export const fnObtenerUniversidades = async () => 
{
    try {
      const URL = 'http://universities.hipolabs.com/search?country=Argentina'
      const respuesta = await fetch(URL);
      const data = await respuesta.json();
      return data;         
    } 
    catch (error)
    {
      console.error('se produjo un error: ', error);
      throw error;
    }
}

/* función asíncrona que permite obtener el pronóstico del tiempo de Argentina */

export async function fnObtenerPronosticoTiempo() 
{       
    try {
        const URL = 'https://ws.smn.gob.ar/map_items/weather';
        const respuesta = await fetch(URL);
        const data = await respuesta.json();  
        return data;
    } catch (error) 
    {
        console.error('se produjo un error: ', error);
        throw error;
    }
}

/* función asíncrona para obtener las capitales y paises del mundo */
export async function obtenerPaisesYCapitales() 
{
    const URL = 'https://restcountries.com/v3.1/all';

    try {
        const respuesta = await fetch(URL);
        const data = await respuesta.json();     
        return data;
    } catch (error) {
        console.error('se produjo un error: ', error);
        throw error;
    }
}

