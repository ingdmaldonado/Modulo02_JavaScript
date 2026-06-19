

/* ahora comenzamos a trabajar con las funciones de la vista 

    similar a generar un componente con React
*/

export const fnUniversidadToView = (universidad) => {

    // aqui tengo que devolver una fila de una tabla


    // 1) hago destructuring en el cuerpo

    const {country: paisUniversidad, name: nombreUniversidad, "state-province": provinciaUniversidad, web_pages: paginasUniversidad} = universidad;

    // 2) estoy haciendo destructuring del vector que tiene los links a las paginas de esa universidad

    const [paginaOficial,...resto] = paginasUniversidad;

    // 3) muestro las constantes donde ya tegno listos los datos
    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);
    console.log(paginaOficial);

    // 4) vamos a crear una fila de una tabla, con sus elementos. y devolverlos para que otro proceso los utilice

    /*
    
    <tr>
        <td>Argentina</td>
        <td>Univerdidad Nacional de Catamarca</td>
        <td>Catamarca</td>
        <td><a href="http://www.unca.edu.ar"        target="_blank" >UNCA</a></td>
    </tr>
    
    */


    const filaDeTabla = document.createElement ("tr");

    const celda1 = document.createElement ("td");
    celda1.textContent = paisUniversidad;

    const celda2 = document.createElement ("td");
    celda2.textContent = nombreUniversidad;

    const celda3 = document.createElement ("td");
    celda3.textContent = provinciaUniversidad;

    const celda4 = document.createElement ("td");
    const linkUniversidad = document.createElement ("a");
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

/* el objetivo de esta funcion es tomar todas las universidades de un vector y convertirlas en filas. cuando tengo una coleccion de elementos. convertir todos ellos en una coleccion de componentes */

export const fnuniversidadesToViews =(Universidades)=>{

    const Views = Universidades.map(Universidad => fnUniversidadToView (Universidad));

    return Views;

};

/* el objetivo de esta funcion, es tomar todas las vistas e inyectarlas al DOM */

export const fnRender = (Views, contenedor)=>{

    contenedor.innerHTML = "";
    Views.forEach(view => contenedor.appendChild(view));

};