
export async function obtenerPokemones() 
{
    try 
    {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        return data;
    }
    catch (error) 
    {
      console.error('Error al obtener los Pokémon:', error);
      return null;
    }
}
  


  