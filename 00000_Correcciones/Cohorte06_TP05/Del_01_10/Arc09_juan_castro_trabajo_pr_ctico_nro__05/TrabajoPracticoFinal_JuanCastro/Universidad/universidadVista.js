export const fnUniversidadToView = (universidad) =>{

    /*destructuring en el cuerpo */
    const {country:paisUniversidad, name:nombreUniversidad, "state-province":provinciaUniversidad, web_pages:paginasUniversidad} = universidad;

    /*destructuring del vector que tine los links */
    const [paginaOficial,...resto] = paginasUniversidad;

    /*Constantes con datos */
    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);

    console.log(paginaOficial);

    /*Fila de tabla con elementos para ser consumidos por otros procesos */

    const filaDeTabla = document.createElement("tr");

    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;

    const celda2 = document.createElement("td");
    celda2.textContent = nombreUniversidad;

    const celda3 = document.createElement("td");
    celda3.textContent = provinciaUniversidad;

    const celda4 = document.createElement("td");
    const linkUniversidad = document.createElement("a");
    linkUniversidad.href = paginaOficial;
    linkUniversidad.target = "_blank";
    linkUniversidad.textContent = paginaOficial;
    celda4.appendChild(linkUniversidad);

    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;  
};


/*Esta funcion convierte un vector de universidades en filas */
export const fnUniversidadesToView = (universidades) => {

    const views = universidades.map(universidad => fnUniversidadToView(universidad));

    return views;

};

/*Esta funcion toma todas las vistas para inyectarlas al DOM */
export const fnRender = (vistas, contenedor) =>{

    contenedor.innerHTML = "";
    vistas.forEach(vista => contenedor.appendChild(vista));

};