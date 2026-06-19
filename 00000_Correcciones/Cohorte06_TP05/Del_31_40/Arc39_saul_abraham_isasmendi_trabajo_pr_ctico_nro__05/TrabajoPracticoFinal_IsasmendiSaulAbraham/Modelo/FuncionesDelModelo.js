// paises a consultar
export const PAISES_LATAM = [
    'Argentina', 'Brazil', 'Mexico', 'Chile', 'Colombia',
    'Peru', 'Venezuela', 'Ecuador', 'Uruguay', 'Paraguay'
];

// mapeo provincias -> regiones
const regionMap = {
    'Jujuy': 'NOA', 'Salta': 'NOA', 'Tucuman': 'NOA', 'Tucuman': 'NOA',
    'Catamarca': 'NOA', 'La Rioja': 'NOA', 'Santiago del Estero': 'NOA',
    'Formosa': 'NEA', 'Chaco': 'NEA', 'Corrientes': 'NEA', 'Misiones': 'NEA',
    'Mendoza': 'Cuyo', 'San Juan': 'Cuyo', 'San Luis': 'Cuyo',
    'Cordoba': 'Centro', 'Cordoba': 'Centro', 'Santa Fe': 'Centro',
    'Buenos Aires': 'Centro', 'La Pampa': 'Centro', 'Entre Rios': 'Litoral',
    'Entre Rios': 'Litoral',
    'Neuquen': 'Patagonia', 'Neuquen': 'Patagonia', 'Rio Negro': 'Patagonia',
    'Rio Negro': 'Patagonia', 'Chubut': 'Patagonia', 'Santa Cruz': 'Patagonia',
    'Tierra del Fuego': 'Patagonia',
    'Capital Federal': 'Centro', 'Ciudad Autonoma de Buenos Aires': 'Centro'
};

// region segun provincia
export const getRegion = (provincia) => {
    if (!provincia) return 'Desconocida';
    return regionMap[provincia.trim()] || 'Desconocida';
};

// api: request generico
export const requestAPI = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('HTTP error: ' + response.status);
        return await response.json();
    } catch (error) {
        console.error('Error en requestAPI:', error.message);
        throw error;
    }
};

// llamada
export const getUniversitiesByCountries = async (countries) => {
    const promises = countries.map(country => {
        const url = 'http://universities.hipolabs.com/search?country=' + country;
        return requestAPI(url);
    });
    const results = await Promise.all(promises);
    let all = [];
    results.forEach(arr => {
        if (arr && Array.isArray(arr)) {all = [...all, ...arr];
        }
    });
    return all;
};

// filtro
export const filterMoreThanOneWeb = (universities) => {
    return universities.filter(u => u.web_pages && u.web_pages.length > 1);
};

// filtro
export const filterByRegion = (universities, region) => {
    return universities.filter(u => {
        if (u.country !== 'Argentina') return false;
        const provincia = u['state-province'] || '';
        return getRegion(provincia) === region;
    });
};

// destruct
export const simplifyUniversity = (university) => {
    const { country, name, web_pages, 'state-province': stateProvince } = university;
    const [firstWeb] = web_pages || ['Sin web'];
    const region = country === 'Argentina' ? getRegion(stateProvince) : 'No aplica';
    return {
        pais: country,
        nombre: name,
        provincia: stateProvince || 'Sin dato',
        sitioWeb: firstWeb,
        region: region
    };
};

export const simplifyUniversities = (universities) => {
    return universities.map(simplifyUniversity);
};