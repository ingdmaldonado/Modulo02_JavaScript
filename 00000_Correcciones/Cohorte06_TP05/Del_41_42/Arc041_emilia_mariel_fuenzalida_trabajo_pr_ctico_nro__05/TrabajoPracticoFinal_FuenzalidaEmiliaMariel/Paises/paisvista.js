export const fnUniversidadToView = (universidad) => {

    const { name, capital = ["No tiene"], population, flags } = universidad;

    const [paginaOficial, ...resto] = capital;

    const filaTabla = document.createElement("tr");

    const celda1 = document.createElement("td");
    const imgBandera = document.createElement("img");
    imgBandera.src = flags.png;
    imgBandera.width = 40;
    celda1.appendChild(imgBandera);

    const celda2 = document.createElement("td");
    celda2.textContent = name.common;
    
    const celda3 = document.createElement("td");
    celda3.textContent = paginaOficial;
    
    const celda4 = document.createElement("td");
    celda4.textContent = population;

    filaTabla.appendChild(celda1);
    filaTabla.appendChild(celda2);
    filaTabla.appendChild(celda3);
    filaTabla.appendChild(celda4);
    
    return filaTabla;
}

export const fnUniversidadesToView = (universidades) => {

    const views = universidades.map(universidad => fnUniversidadToView(universidad));

    return views;
}

export const fnrender = (views, contenedor) => {

    contenedor.innerHTML = "";
    views.forEach(view => contenedor.appendChild(view));
}