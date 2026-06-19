/*
    ahora comenzamos a trabajar con las funciones de la vista

    esto en react seria similar a generar un componente
*/

export const fnUniversidadToView = (universidad)=>{

    // aqui tengo que devolver una fila de una tabla

    // 1) hago destructuring en el cuerpo
    const {country:paisUniversidad,name:nombreUniversidad,"state-province":provinciaUniversidad,web_pages:paginasUniversidad} = universidad

    // 2) hago destructuring del vector que tiene los links a las paginas de esa universidad
    const [paginaOficial,...resto] = paginasUniversidad

    // 3) vamos a crear una fila de una tabla con sus elementos y devolverlos para que otros procesos los utilicen

    const filaDeTabla = document.createElement("tr")

    const celda1 = document.createElement("td")
    celda1.textContent = paisUniversidad
    
    const celda2 = document.createElement("td")
    celda2.textContent = nombreUniversidad
    
    const celda3 = document.createElement("td")
    celda3.textContent = provinciaUniversidad
    
    const celda4 = document.createElement("td")
    const linkUniversidad = document.createElement("a")
    linkUniversidad.href = paginaOficial
    linkUniversidad.target = "_blank"
    linkUniversidad.textContent = paginaOficial
    celda4.appendChild(linkUniversidad)

    filaDeTabla.appendChild(celda1)
    filaDeTabla.appendChild(celda2)
    filaDeTabla.appendChild(celda3)
    filaDeTabla.appendChild(celda4)

    return filaDeTabla

}

/* el objetivo de esta funcion es tomar todas las universidades de un vector y convertirlas en filas 
cuando tengo una coleccion de elementos, convertir todos ellos en una coleccion de componentes*/
export const fnUniversidadesToViews = (universidades)=>{

    const views = universidades.map(universidad => fnUniversidadToView(universidad))

    return views
}

/*
    el objetivo de esta funcion es tomar todas las vistas e inyectarlas al DOM
*/
export const fnRender = (views,contenedor)=>{
    contenedor.innerHTML = ""
    views.forEach(view => contenedor.appendChild(view))
}
