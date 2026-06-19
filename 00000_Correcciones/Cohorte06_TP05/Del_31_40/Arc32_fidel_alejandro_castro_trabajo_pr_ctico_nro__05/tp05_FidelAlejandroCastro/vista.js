/*Ahora comenzamos a trabajar con la vista
similar a generar un componente con React*/
export const fnUniversidadToView = (universidad) => {

    // 1). Primero hago destructuring en el cuerpo (objeto)
    const {country:paisUniversidad, name: nombreUniversidad, "state-province":provinciaUniversidad, web_pages: paginasUniversidad} = universidad;
    
    // 2). Destructuring en el vector que tiene los links de las pág. de las Universidades
    const [paginaOficial,...resto] = paginasUniversidad;

    // 3). Muestro las constantes donde ya tengo listos los datos
    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);
    console.log(paginaOficial);
    // 4). Creamos una fila de una tabla, con sus elementos.
    // y devolverlos para qwue otro proceso los utilice

    /*como algunas universidades no tienen provincia, comparamos la variable
    si esta vacia muestra un guion, sino muestra la provincia */
    const ProvUni = provinciaUniversidad ?? "-";

    const filaDeTabla = document.createElement("tr");
    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;

    const celda2 = document.createElement("td");
    celda2.textContent = ProvUni;

    const celda3 = document.createElement("td");
    celda3.textContent = nombreUniversidad;

    const celda4 = document.createElement("td");
    const linkUniversidad = document.createElement("a");

    linkUniversidad.href = paginaOficial;
    linkUniversidad.target = "_blank";
    linkUniversidad.textContent = paginaOficial
    celda4.appendChild(linkUniversidad);
    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);
    return filaDeTabla;
};

/*El objetivo de esta fn es tomar todas las Universidades de un vector
y convertirlas en filas. map convierte una colección de elemtnos a u una colección de componentes*/
export const fnUniversidadesToViews = (universidades)=>{

    const views = universidades.map(universidad => fnUniversidadToView(universidad));
    
    return views;
};

/*El objetivo de esta función, es tomar todas las vistas e inyectarlas al DOM*/

export const fnRender = (views, contenedor) =>{
    views.forEach (view => contenedor.appendChild(view));
}