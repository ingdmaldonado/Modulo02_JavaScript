////////////////funciones para crear tablas

export const crearFila = (universidad) => {
    let {
        country: paisUniversidad, 
        name : nombreUniversidad, 
        "state-province" : provinciaUniversidad, 
        web_pages : paginasUniversidad} = universidad;

    const [paginaOficial, ...resto] = paginasUniversidad;
    
    //Otorga el valor "Desconocida" cuando provinciaUnivesidad es null
    provinciaUniversidad = !provinciaUniversidad ? "Desconocida" : provinciaUniversidad;

    const filaTabla = document.createElement("tr");
    
    const celdaPais = document.createElement("td");
    celdaPais.textContent = paisUniversidad;
    
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombreUniversidad;
    
    const celdaProvincia = document.createElement("td");
    celdaProvincia.textContent = provinciaUniversidad;
    
    const celdaPagina = document.createElement("td");
    
    const linkPagina = document.createElement("a");
    linkPagina.href = paginaOficial;
    linkPagina.textContent = paginaOficial;
    linkPagina.target = "_blank";
    
    celdaPagina.appendChild(linkPagina);

    filaTabla.appendChild(celdaPais);
    filaTabla.appendChild(celdaNombre);
    filaTabla.appendChild(celdaProvincia);
    filaTabla.appendChild(celdaPagina);

    return filaTabla;
}

export const crearFilasTabla = (universidades) => {
    const filas = universidades.map(universidad => crearFila(universidad));
    return filas;
}

export const renderizarTabla = (filas, contenedor) => {
    contenedor.innerHTML = "";
    filas.forEach(fila => contenedor.appendChild(fila));
}


////////////////////funciones para crear selectores

export const crearMultiplesOpciones = (paises) => {
    const opciones = paises.map(pais => crearOption(pais));
    return opciones;
}

export const crearOption = (pais) => {
    const option = document.createElement("option");

    if(!pais){
        pais = "país inválido";
        option.disabled = true;
    }

    option.textContent = pais;
    option.value = pais;
    return option;
}

export const renderizarSelector = (opciones, contenedor) => {
    opciones.forEach(option => contenedor.appendChild(option));
}