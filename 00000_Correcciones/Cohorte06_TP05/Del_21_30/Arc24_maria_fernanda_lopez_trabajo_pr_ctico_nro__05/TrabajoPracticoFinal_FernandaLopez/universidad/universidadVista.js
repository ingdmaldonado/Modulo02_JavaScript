
export const fnUniversidadToView = (universidad) => {

    //aqui debo devolver una fila de una tabla.-Primero hacemos destructuring en el cuerpo//

    const {country:paisUniversidad,name: nombreUniversidad,"state-province":provinciaUniversidad,web_pages:paginasUniversidad} = universidad;

    const [paginaOficial,...resto] = paginasUniversidad;

    console.log (paisUniversidad);
    console.log (nombreUniversidad);
    console.log (provinciaUniversidad);
    console.log (paginasUniversidad);
    console.log (paginaOficial);

    const filaDeTabla = document.createElement ("tr");

    const celda1 = document.createElement ("td");
    celda1.textContent = paisUniversidad;
    
    const celda2 = document.createElement ("td");
    celda2.textContent =nombreUniversidad;

    const celda3= document.createElement ("td");
    celda3.textContent = provinciaUniversidad;

    const celda4= document.createElement ("td");
    const linkUniversidad = document.createElement ("a");
    linkUniversidad.href = paginaOficial;
    linkUniversidad.target = "_blank";
    linkUniversidad.textContent = paginaOficial;
    celda4.appendChild (linkUniversidad);

    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;


};
  // objetivo de la funcion: tomar todas las universidades de un vector y convertilas en filas. Cuando tengo una coleccion de elemetos, convertilos en una coleccion de componentes//
export const fnUniversidadesToViews = (universidades) =>{

    const views = universidades.map(universidad => fnUniversidadToView (universidad));

    return views;


};

//el objetivo de esta funcion es tomar todas las vistas e inyectarlas al DOM//

export const fnRender = (views,contenedor)=>{
        contenedor.innerHTML= "";

        views.forEach(view => contenedor.appendChild(view));

};
