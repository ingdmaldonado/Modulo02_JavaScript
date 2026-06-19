export const fnUniversdadToView = (universidad)=> {

    const {country: paisUniversidad, name: nombreUniversidad, "state-province": provinciaUniiversidad, web_pages: paginasUniversidad} = universidad;

    const [paginaOficial, ...resto] = paginasUniversidad;

    console.log (paisUniversidad);
    console.log (nombreUniversidad);
    console.log (provinciaUniiversidad);
    console.log (paginasUniversidad);

    console.log (paginaOficial);



    const filaTabla = document.createElement("tr");
    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;

    const celda2 = document.createElement("td");
    celda2.textContent = nombreUniversidad;


    const celda3 = document.createElement("td");
    celda3.textContent = provinciaUniiversidad;


    const celda4 = document.createElement("td");
    const linkUniiversidad = document.createElement ("a");
    linkUniiversidad.href= paginaOficial;
    linkUniiversidad.target = "_blanck"
    linkUniiversidad.textContent = paginaOficial;
    celda4.appendChild (linkUniiversidad);

    filaTabla.appendChild (celda1);
    filaTabla.appendChild (celda2);
    filaTabla.appendChild (celda3);
    filaTabla.appendChild (celda4);


    return filaTabla;

};

export const fnUnniversiidadesToView = (universidades)=> {

    const views = universidades.map (universida => fnUniversdadToView (universida))
    return views;
};

export const fnRender = (views, contenedor) => {
    contenedor.innerHTML = "";
    views.forEach(view => contenedor.appendChild (view));
};








