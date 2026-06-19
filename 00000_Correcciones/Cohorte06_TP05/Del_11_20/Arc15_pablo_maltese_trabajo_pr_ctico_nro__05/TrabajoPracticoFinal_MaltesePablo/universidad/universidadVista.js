
export const fnUniversidadToView = (universidad)=>{

    //1) Hago destructuring en el cuerpo 
    const {country:paisUniversidad, name:nombreUniversidad, "state-province": provinciaUniversidad, web_pages:paginasUniversidad} = universidad;

    //2) Hacemos destructring al vector de link de paginas web del cuerpo de universidad
    const [paginaOficial, ...resto] = paginasUniversidad;

    //3) Muestro las constantes en donde ya tengo listo los datos
    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);
    console.log(paginaOficial);

    //4) Vamos a crear una fila de una tabla, con sus elementos y 
    //   devolverlos para que otro proceso los utilice
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

/* El objetivo de esta función es tomar todas las
   universidades de un vector y convertirlas en filas. cuando tengo una coleccion de elementos
   y convertirlas en una coleccion de componentes */
export const fnUniversidadesToView = (universidades)=>{

    const Views = universidades.map(universidad=>fnUniversidadToView(universidad));

    return Views;
};

/* El objetivo de esta funcion, es tomar todas las vistas e inyectarlas al DOM */
export const fnRender = (Views, contenedor)=>{

    contenedor.innerHTML = "";
    Views.forEach(view => contenedor.appendChild(view) );

};