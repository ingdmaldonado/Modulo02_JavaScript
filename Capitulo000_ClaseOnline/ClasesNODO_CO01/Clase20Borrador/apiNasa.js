
export async function obtenerImagenAstronomia() {
    try {
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      const data = await response.json();
      
      /*
      console.log(`Título: ${data.title}`);
      console.log(`Descripción: ${data.explanation}`);
      console.log(`URL de la imagen: ${data.url}`);
      */

      return data;

    } catch (error) {
      console.error('Error al obtener la imagen astronómica:', error);
      return null;
    }
  }
  

  