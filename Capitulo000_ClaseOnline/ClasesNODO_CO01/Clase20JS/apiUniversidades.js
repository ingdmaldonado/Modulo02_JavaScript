
export async function obtenerUniversidades() 
{
    try {
      const response = await fetch('http://universities.hipolabs.com/search?country=Argentina');
      const data = await response.json();

      return data;
         
    } 
    catch (error)
    {
      console.error('Error al obtener las universidades:', error);
      return null;
    }
}
  