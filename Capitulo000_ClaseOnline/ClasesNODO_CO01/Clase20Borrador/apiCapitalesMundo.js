
export async function obtenerPaisesYCapitales() 
{
    const url = 'https://restcountries.com/v3.1/all';

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Procesar y mostrar países y capitales
        data.forEach(pais => {
            console.log(`País: ${pais.name.common}, Capital: ${pais.capital ? pais.capital[0] : 'N/A'}`);
        });

        return data;

    } catch (error) {
        console.error('Error al obtener países y capitales:', error);

        return null;
    }
}
