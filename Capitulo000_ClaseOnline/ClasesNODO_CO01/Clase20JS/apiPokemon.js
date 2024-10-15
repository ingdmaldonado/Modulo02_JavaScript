
export async function obtenerPokemones()
{
    try {

         /* hacer la solicitud al end point o el request */
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');

        /* si la primera parte funciono bien. convierto el response en formato json */
        const data = await response.json();

        /* si todo sale bien retornamos los datos en formato json */
        return data;
        
    } catch (error) 
    {
        console.log(error.message);

        return null;
        
    }
}