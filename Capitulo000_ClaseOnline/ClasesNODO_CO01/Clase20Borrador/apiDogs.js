

export async function obtenerImagenAleatoria() 
{
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      
      return data;
      
    } catch (error)
     {
      console.error('Error al obtener la imagen aleatoria:', error);

      return null;
    }
  }
  
  export async function obtenerRazasDePerros() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
     
      return data;
     
    } catch (error) {
      console.error('Error al obtener las razas:', error);

      return null;
    }
  }
  

  