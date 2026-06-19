/*ahora comenzamos a trabajar con las funciones de la vistas
 similar a generar un componente con React*/

export const fnUniversidadToView = (universidad) => {



    //aqui tengoque devolver una fila de una tabla //



    /*(1) hago destructuring en el curpo*/
    const {
        country: paisUniversidad,
        name: nombreUiversidad,
        "state-province": provinciaUniversidad, // <- CORREGIDO: "state-province" en lugar de "state-provice "
        web_pages: paginasUniversidad // <- CORREGIDO: web_pages en lugar de web_page
    } = universidad;
    console.log(universidad);

    /*(2)estoy haciendo destructuring del vector que tiene los links a las paginas de esa universidad */

    const [paginaOficial, ...resto] = paginasUniversidad;
    /*(3)muestro las constantes adonde ya tengo listos los datos*/
    console.log(paisUniversidad);
    console.log(nombreUiversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);
    console.log(paginaOficial);


    /*(4)vamos a crear una fila de una tabla ,con sus elemetos. y delverlos para que otros procesos los utilice */
    /*
         
                    <tr>
                        <td>ARGENTINA</td>
                        <td>UNIVERSIDAD NACIONAL DE CATAMARCA</td>
                        <td>CTAMARCA</td>
                    </tr>

                    <td>
                        <a href="href=" http://www.unca.edu.ar " target="_blank ">www.unca.edu.ar"></a>
                    </td>
              
             */

    const filaDeTabla = document.createElement("tr");

    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;
    const celda2 = document.createElement("td");
    celda2.textContent = nombreUiversidad;

    const celda3 = document.createElement("td");
    celda3.textContent = provinciaUniversidad || "Sin dato"; // <- MEJORA: Muestra "Sin dato" si viene vacío de la API

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

    // Manejo de la fila seleccionada (Usa la clase .seleccionada de estilos.css)
    filaDeTabla.addEventListener("click", () => {
        const filaPrevia = document.querySelector(".seleccionada");
        if (filaPrevia) {
            filaPrevia.classList.remove("seleccionada");
        }
        filaDeTabla.classList.add("seleccionada");
    });

    return filaDeTabla;

};

/*el objetivo de esta funcion es  tomar todas las universidades de un vector y convertirlas en filas.
cuando tengo una colleccion de elemntos convertir todos ellos en una coleccion de componrntes*/

export const fnUniversidadesToViews = (Universidades) => {

    const views = Universidades.map(Universidad => fnUniversidadToView(Universidad));
    return views;

};


/*el objetivo de esta  funcion es tomar todas las vistas e inyectarlas al DOM*/

export const fnRender = (views, contenedor) => {
    contenedor.innerHTML = "";

    views.forEach(view => contenedor.appendChild(view));
};