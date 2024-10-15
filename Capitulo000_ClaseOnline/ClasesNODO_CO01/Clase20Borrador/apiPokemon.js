
export async function obtenerPokemones() 
{
    try 
    {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
        const data = await response.json();
        return data;
    }
    catch (error) 
    {
      console.error('Error al obtener los Pokémon:', error);
      return null;
    }
}
  
/*

export async function obtenerPokemones() {
  try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      return data;
  }
  catch (error) {
      console.error('Error al obtener los Pokémon:', error);
      throw error; // Lanzamos el error para capturarlo en la invocación
  }
}

*/


/*

import { obtenerPokemones } from './ruta/del/archivo.js';

async function mostrarPokemones() {
    try {
        const pokemones = await obtenerPokemones();
        console.log(pokemones); // Mostrar los datos obtenidos si no hubo error
    }
    catch (error) {
        console.error("Ocurrió un error al intentar obtener los pokemones:", error);
        // Aquí puedes manejar el error como desees, por ejemplo, mostrar un mensaje en la interfaz
    }
}

mostrarPokemones();

*/

  