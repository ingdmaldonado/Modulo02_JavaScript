
export async function obtenerImagenGato() {

    const url = 'https://api.thecatapi.com/v1/images/search';

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Mostrar imagen de gato
        console.log(`URL de la imagen: ${data[0].url}`);

        return data;

    } catch (error) {
        console.error('Error al obtener imagen de gato:', error);

        return null;

    }
}
