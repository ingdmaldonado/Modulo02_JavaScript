export const fnUniversidadToView = (universidad) =>{


    const {country:paisUniversidad,name: nombreUniversidad,"state-province":provinciaUniversidad, web_pages:paginasUniversidad} = universidad;

    const[paginaOficial,...resto] = paginasUniversidad;
    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);
    console.log(paginaOficial);

    const filaDeTabla = document.createElement("tr");

    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;

    const celda2 = document.createElement("td");
    celda2.textContent = provinciaUniversidad;

    const celda3 = document.createElement("td");
    celda3.textContent = nombreUniversidad;

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
    
}
//utilizo esta función para tomar todas las universidades de un vector y convertirlos en filas
export const fnUniversidadesToViews = (Universidades)=>{

    const Views = Universidades.map(universidad => fnUniversidadToView(universidad));
    return Views;
};

//esta función toma todas las vistas e inyectarlas al DOM

export const fnRender = (Views,contenedor) =>{
    contenedor.innerHTML ="";
    Views.forEach(view =>contenedor.appendChild(view));

};