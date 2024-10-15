

export async function obtenerPronosticoTiempo() 
{
    const url = 'https://ws.smn.gob.ar/map_items/weather';

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Aquí puedes manipular los resultados, por ejemplo, mostrando los pronósticos
        data.forEach(pronostico => {
           // console.log(`Ciudad: ${pronostico.name}`);

            if(pronostico.province.toUpperCase().includes("CATAMARCA"))
            {
                console.log(pronostico.province.toUpperCase());
                console.log(`Ciudad: ${pronostico.name}`);
                console.log(`Temperatura: ${pronostico.weather.tempDesc}`);
                console.log(`Estado: ${pronostico.weather.description}`);
                console.log('---------------------------------');
            }
        });

        return data;

    } catch (error) 
    {
        console.error('Error al obtener el pronóstico del tiempo:', error);
        return null;
    }

}