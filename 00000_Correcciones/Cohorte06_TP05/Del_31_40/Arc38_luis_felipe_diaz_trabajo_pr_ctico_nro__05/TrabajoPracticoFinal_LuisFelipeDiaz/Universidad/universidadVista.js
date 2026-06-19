export const renderizarTabla = (universidades) => {
    const contenedor = document.getElementById('contenedor-universidades');
    
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Nombre de la Universidad</th>
                    <th>Provincia / Estado</th>
                    <th>País</th>
                    <th>Sitio Web</th>
                </tr>
            </thead>
            <tbody>
    `;

    universidades.forEach(uni => {
        const nombre = uni.name;
        const provincia = uni['state-province'] ? uni['state-province'] : 'No especificada';
        const pais = uni.country;
        const web = uni.web_pages && uni.web_pages.length > 0 ? uni.web_pages[0] : '#';

        html += `
            <tr>
                <td>${nombre}</td>
                <td>${provincia}</td>
                <td>${pais}</td>
                <td><a href="${web}" target="_blank">Visitar Sitio</a></td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    contenedor.innerHTML = html;
};