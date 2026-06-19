import { 
    PAISES_LATAM,
    getUniversitiesByCountries,
    requestAPI,
    filterMoreThanOneWeb, 
    filterByRegion,
    simplifyUniversities
} from '../Modelo/funcionesDelModelo.js';
import { 
    renderUniversities,
    mostrarCargando,
    mostrarError
} from '../Vista/funcionesDeLaVista.js';


const estado = {
    universidades: [],
    filtradas: []
};

// muestra/oculta
function toggleRegionSelector() {
    const paisSelect = document.getElementById('paisSelect');
    const regionContainer = document.getElementById('regionContainer');
    if (paisSelect.value === 'Argentina') {
        regionContainer.classList.remove('hidden');
    } else {
        regionContainer.classList.add('hidden');
    }
}

function guardarEstado() {
    const simplificadas = simplifyUniversities(estado.universidades);
    localStorage.setItem('uniSimplificadas', JSON.stringify(simplificadas));
    alert('Guardado');
}

function recuperarEstado() {
    const data = localStorage.getItem('uniSimplificadas');
    if (data) {
        const simplificado = JSON.parse(data);
        console.log('Recuperado:', simplificado);
        alert('Recuperado (ver consola)');
    } else {
        alert('Sin datos guardados');
    }
}

//  carga universidades
async function cargarUniversidades() {
    const tbody = document.querySelector('#tbodyUniversities');
    const paisSelect = document.getElementById('paisSelect');
    const pais = paisSelect.value;

    mostrarCargando(tbody);

    try {
        let datos = [];
        if (pais === 'todos') {
            datos = await getUniversitiesByCountries(PAISES_LATAM);
        } else {
            const url = 'http://universities.hipolabs.com/search?country=' + pais;
            const resultado = await requestAPI(url);
            if (resultado && Array.isArray(resultado)) {
                datos = resultado;
            } else {
                datos = [];
            }
        }

        if (!datos || datos.length === 0) {
            alert('No se encontraron universidades para ' + pais);
            estado.universidades = [];
            estado.filtradas = [];
            renderUniversities([], tbody);
            toggleRegionSelector();
            return;
        }

        console.log('Cargadas: ' + datos.length + ' (' + pais + ')');
        estado.universidades = datos;
        estado.filtradas = datos;
        toggleRegionSelector();
        renderUniversities(datos, tbody);
    } catch (error) {
        console.error(error);
        mostrarError(tbody, 'Error: ' + error.message);
        estado.universidades = [];
        estado.filtradas = [];
        toggleRegionSelector();
    }
}

// filtro: mas de web
function filtrarPorWeb() {
    const tbody = document.querySelector('#tbodyUniversities');
    const filtradas = filterMoreThanOneWeb(estado.universidades);
    estado.filtradas = filtradas;
    renderUniversities(filtradas, tbody);
    const simplificadas = simplifyUniversities(filtradas);
    localStorage.setItem('uniFiltradasWeb', JSON.stringify(simplificadas));
    alert('Filtradas: ' + filtradas.length);
}

// filtro: por region
function filtrarPorRegion() {
    const region = document.getElementById('regionSelect').value;
    if (region === 'todas') {
        mostrarTodas();
        return;
    }
    const tbody = document.querySelector('#tbodyUniversities');
    const filtradas = filterByRegion(estado.universidades, region);
    estado.filtradas = filtradas;
    renderUniversities(filtradas, tbody);
    const simplificadas = simplifyUniversities(filtradas);
    localStorage.setItem('uniFiltradasRegion', JSON.stringify(simplificadas));
    alert('Region ' + region + ': ' + filtradas.length);
}

//  todos
function mostrarTodas() {
    const tbody = document.querySelector('#tbodyUniversities');
    renderUniversities(estado.universidades, tbody);
    estado.filtradas = estado.universidades;
}

// ---------- arranque ----------
window.onload = () => {
    document.getElementById('btnCargar').addEventListener('click', cargarUniversidades);
    document.getElementById('btnGuardar').addEventListener('click', guardarEstado);
    document.getElementById('btnRecuperar').addEventListener('click', recuperarEstado);
    document.getElementById('btnFiltrarWeb').addEventListener('click', filtrarPorWeb);
    document.getElementById('btnFiltrarRegion').addEventListener('click', filtrarPorRegion);
    document.getElementById('btnMostrarTodas').addEventListener('click', mostrarTodas);

    // evento para cuando cambia el pais
    document.getElementById('paisSelect').addEventListener('change', () => {
        toggleRegionSelector();
    });

    // carga automatica de todos al inicio
    document.getElementById('paisSelect').value = 'todos';
    toggleRegionSelector();
    cargarUniversidades();
};