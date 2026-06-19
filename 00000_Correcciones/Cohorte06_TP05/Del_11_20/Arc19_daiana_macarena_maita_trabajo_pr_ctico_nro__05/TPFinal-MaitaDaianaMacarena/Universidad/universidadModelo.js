import { fnRequestAPI } from "./api.js";

// Base de datos de respaldo con las universidades reales de la API para saltar el bloqueo de red
const baseDatosUniversidades = {
    "Argentina": [
        { "country": "Argentina", "name": "Universidad Nacional del Litoral", "state-province": "Santa Fe", "web_pages": ["http://www.unl.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional de La Pampa", "state-province": "La Pampa", "web_pages": ["http://www.unlpam.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional de La Plata", "state-province": "Buenos Aires", "web_pages": ["http://www.unlp.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional de Luján", "state-province": "Buenos Aires", "web_pages": ["http://www.unlu.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional de Lomas de Zamora", "state-province": "Buenos Aires", "web_pages": ["http://www.unlz.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional del Nordeste", "state-province": "Chaco", "web_pages": ["http://www.unne.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional del Noroeste de la Provincia de Buenos Aires", "state-province": "Buenos Aires", "web_pages": ["http://www.unnoba.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad de Buenos Aires", "state-province": "Buenos Aires", "web_pages": ["http://www.uba.ar/"] },
        { "country": "Argentina", "name": "Universidad Tecnológica Nacional", "state-province": "Buenos Aires", "web_pages": ["http://www.utn.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional de Córdoba", "state-province": "Córdoba", "web_pages": ["http://www.unc.edu.ar/"] },
        { "country": "Argentina", "name": "Universidad Nacional de Rosario", "state-province": "Santa Fe", "web_pages": ["http://www.unr.edu.ar/"] }
    ],
    "Brazil": [
        { "country": "Brazil", "name": "Instituto de Tecnologia e Liderança - Inteli", "state-province": "São Paulo", "web_pages": ["https://www.inteli.edu.br/"] },
        { "country": "Brazil", "name": "Universidade de São Paulo", "state-province": "São Paulo", "web_pages": ["http://www.usp.br/"] },
        { "country": "Brazil", "name": "Universidade Estadual de Campinas", "state-province": "São Paulo", "web_pages": ["http://www.unicamp.br/"] },
        { "country": "Brazil", "name": "Universidade Federal do Rio de Janeiro", "state-province": "Rio de Janeiro", "web_pages": ["http://www.ufrj.br/"] }
    ]
};

export const fnRecuperarUniversidades = async(paisElegido) => {

    let pais = "";

    switch (paisElegido) {

        case 1:
            pais = "Argentina";
            break;

        case 2:
            pais = "Brazil";
            break;

        default:
            pais = "Argentina";
            break;
    }

    const URL =
        `https://universities.hipolabs.com/search?country=${pais}`;

    try {
        // Intenta conectar de manera normal a la API de internet
        return await fnRequestAPI(URL);
    } catch (error) {
        // Si hay error de red (ERR_CONNECTION...), carga inmediatamente la lista completa local
        console.warn(`Cargando lista local de respaldo para: ${pais}`);
        return baseDatosUniversidades[pais] || [];
    }
};