export const renderizarTabla = (datos) => {
    const contenedor = document.getElementById("app");
    contenedor.innerHTML = ""; 

    const lista = document.createElement("div");
    lista.style.display = "flex";
    lista.style.flexWrap = "wrap";
    lista.style.gap = "15px";

    datos.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.style.border = "1px solid #333";
        tarjeta.style.padding = "10px";
        tarjeta.style.width = "200px";
        tarjeta.innerHTML = `
            <img src="${p.bandera}" alt="${p.nombre}" style="width:100px;">
            <h3>${p.nombre}</h3>
            <p>Capital: ${p.capital}</p>
            <p>Población: ${p.poblacion.toLocaleString()}</p>
        `;
        lista.appendChild(tarjeta);
    });
    contenedor.appendChild(lista);
};