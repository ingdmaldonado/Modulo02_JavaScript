// universidad/funcionesDeLaVista.js

export const fnRenderizarUniversidades = (listaUniversidades) => {
    const tablaCuerpo = document.querySelector("#idCuerpoDeTabla");
    if (!tablaCuerpo) return;

    tablaCuerpo.innerHTML = ""; 
    
    // Recorremos las universidades reales e inyectamos los nuevos datos (Punto 04)
    listaUniversidades.forEach(uni => {
        // Desestructuramos las propiedades nativas del JSON
        const { name: nombre, country: pais, domains = ["-"], web_pages = ["-"], "state-province": provincia } = uni;
        const [primerDominio] = domains;
        const [primeraWeb] = web_pages;

        // Validamos si no viene provincia asignada en el JSON
        const estadoProvincia = provincia ? provincia : "No especifica";

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><b>${nombre}</b></td>
            <td>${estadoProvincia}</td>
            <td><code>${primerDominio}</code></td>
            <td><a href="${primeraWeb}" target="_blank">${primeraWeb}</a></td>
        `;
        tablaCuerpo.appendChild(fila);
    });
};