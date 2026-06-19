

export const fnUniversidadToView = (universidad) => {
    
    //aqui tengo quie devovler una fila de una tabla

    // 1pri) hago destructuring en el cuerpo
    const {country:paisUniversidad, name:nombreUniversidad, "state-province":provinciaUniversidad, web_pages:paginasUniversidad} = universidad;

    /* 2do) estoy haciendo destructuring del vector 
    que tiene los links de las paginas de esa universidad */
    const [paginaOficial,...resto] = paginasUniversidad;

    /* 3ro) muestro las constantes donde ya tengo listos los datos */
    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);

    console.log(paginaOficial);

    /* 4to) vamos a crea una fila de una tabla, con sus elementos.
    y devolverlos para que otro proceso los utilice. */

    /*
        <tr>
            <td>ARGENTINA</td>
            <td>UNIVERSISDAD NACIONAL DE CATAMARCA</td>
            <td>CATAMARCA</td>
            <td><a href="https://www.unca.edu.ar" target="_blank">www.unca.edu.ar</a></td>
        </tr>
    */

    const filaDeTabla = document.createElement("tr");

    // le agrego clases de tailwind a la fila
    filaDeTabla.className = "border-b border-slate-200 hover:bg-blue-100 transition-colors duration-200 cursor-pointer";

    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;
    // le agrego clases a la celda 1
    celda1.className = "px-6 py-4 font-medium text-slate-900";

    const celda2 = document.createElement("td");
    celda2.textContent = nombreUniversidad;
    // le agrego clases a la celda 2
    celda2.className = "px-6 py-4 text-slate-700 whitespace-normal min-w-[200px] max-w-[300px] leading-relaxed";

    const celda3 = document.createElement("td");
    celda3.textContent = provinciaUniversidad;
    // le agrego clases a la celda 3
    celda3.className = "px-6 py-4 text-slate-700";

    const celda4 = document.createElement("td");
    // le agrego padding para el enlace de la celda 4
    celda4.className = "px-6 py-4";

    const linkUniversidad = document.createElement("a");
    linkUniversidad.href = paginaOficial;
    linkUniversidad.target = "_blank";
    linkUniversidad.textContent = paginaOficial;
    // le agrego color azul y un efecto al enlace para cuando le haga focus
    linkUniversidad.className = "text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors";
    celda4.appendChild(linkUniversidad);

    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;

};

/* El objetivo de esta funcion es tomar todas las 
universidades de un vector y converturlas en filas 
cuando tengo una coleccion de elementos, convertir
todos ellos en una coleccion de componentes */

export const fnUniversidadesToViews = (Universidades) => {

    const Views = Universidades.map(Universidad => fnUniversidadToView(Universidad));

    return Views;

};


/* El objetivo de esta funcion, es tomar todas
todas vistas e inyectarlas al DOM */

export const fnRender = (Views, contenedor) => {
    
    // limpio la tabla para que no se pisen los datos
    contenedor.innerHTML = "";

    Views.forEach(view => contenedor.appendChild(view));
};