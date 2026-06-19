import { getRegion } from '../Modelo/funcionesDelModelo.js';

// mensaje
export const mostrarCargando = (container) => {
    container.innerHTML = `
        <tr>
            <td colspan="5" class="mensaje-carga">
                Cargando datos...
            </td>
        </tr>
    `;
};

// mensaje
export const mostrarError = (container, mensaje = 'Error al cargar') => {
    container.innerHTML = `
        <tr>
            <td colspan="5" class="mensaje-error">
                ${mensaje}
            </td>
        </tr>
    `;
};

export const mostrarSinDatos = (container, mensaje = 'No hay universidades') => {
    container.innerHTML = `
        <tr>
            <td colspan="5" class="mensaje-vacio">
                ${mensaje}
            </td>
        </tr>
    `;
};

// destruct
export const universityToRow = (university) => {
    const row = document.createElement('tr');
    row.className = 'hover:bg-gray-50';

    // destruct
    const { country, name, web_pages } = university;
    const stateProvince = university['state-province'] || 'Sin dato';
    const [officialPage] = web_pages || ['#'];
    const region = country === 'Argentina' ? getRegion(stateProvince) : 'No aplica';

    const cells = [
        { text: country, className: 'px-4 py-3 font-medium text-gray-900' },
        { text: name, className: 'px-4 py-3' },
        { text: stateProvince, className: 'px-4 py-3' },
        { text: region, className: 'px-4 py-3' },
        { 
            html: '<a href="' + officialPage + '" target="_blank" class="text-blue-600 hover:underline">Web</a>',
            className: 'px-4 py-3'
        }
    ];

    cells.forEach(cell => {
        const td = document.createElement('td');
        td.className = cell.className;
        if (cell.html) td.innerHTML = cell.html;
        else td.textContent = cell.text;
        row.appendChild(td);
    });

    return row;
};

//  renderiza en el DOM
export const renderUniversities = (universities, container) => {
    if (!universities || !Array.isArray(universities) || universities.length === 0) {
        mostrarSinDatos(container);
        return;
    }
    container.innerHTML = '';
    const rows = universities.map(universityToRow);
    rows.forEach(row => container.appendChild(row));
    console.log('Renderizadas: ' + universities.length);
};