export const fnUniversidadView = (universidad) => {

    const { 
        name: nombreUniversidad, 
        country: pais, 
        "state-province": provincia, 
        web_pages: web 
    } = universidad;
    const [paginaOficial, ...resto] = web;

    
    console.log(`Nombre: ${nombreUniversidad}, País: ${pais}, Provincia: ${provincia || "Sin provincia"}, Web: ${paginaOficial}`);

    
    const filaDeTabla = document.createElement("tr");

    const celda1 = document.createElement("td");
    celda1.textContent = nombreUniversidad;
    const celda2 = document.createElement("td");
    celda2.textContent = pais ? pais : "Sin país";

    const celda3 = document.createElement("td");
    celda3.textContent = provincia ? provincia : "Sin provincia"
    const celda4 = document.createElement("td");
    if (paginaOficial) {
        const enlace = document.createElement("a");
        enlace.href = paginaOficial;
        enlace.textContent = "Acceder";
        enlace.target = "_blank";
        celda4.appendChild(enlace);
    } else {
        celda4.textContent = "Sin sitio web";
    }
    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;
};


export const fnUniversidadViews = (universidades) => {
    const Views = universidades.map(universidad => fnUniversidadView(universidad));
    return Views;
};

export const fnRender = (Views, contenedor) => {
    contenedor.innerHTML = "";
    Views.forEach(View => contenedor.appendChild(View));
};