


/* ahora comenzamos a trabajar con las funciones de la vista 
similar a generar un componente con React
*/

export const fnUniversidadToView = (universidad) =>{

    // aqui tengo que devolver una fila de una tabla //  

    /* (1ro) hago destructuring en el cuerpo */
    const {country:paisUniversidad,name:nombreUniversidad,"state-province":provinciaUniversidad,web_pages:paginasUniversidad} = universidad;

    /* (2do) Estoy haciendo destructuring del Vector que tiene 
    los links a las paginas de esa universidad */

    const [paginaOficial,...resto] = paginasUniversidad; 

    /* (3ro) Muestro las constantes donde ya tengo listos los datos */
    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);
    console.log(paginaOficial);

    /* (4to) Vamos a crear una fila de una tabla, con sus elementos.
    y devolverlos para que otro proceso los utilice */

     /* 
        <tr>
                 <td>ARGENTINA</td>
                <td>UNIVERSIDAD NACIONAL DE CATAMARCA</td>
                <td>CATAMARCA</td>
                <td><a href="http://www.unca.edu.ar" target="_blank">www.unca.edu.ar</a></td>

        </tr>       
        
    */

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

/* El objetivo de esta función es. tomar todas 
las universidades de un vector y convertirlas 
en filas. cuando tengo una coleccion de elementos.
convertir todos ellos en una colección de componentes */

export const fnUniversidadesToViews = (Universidades)=>{

    const Views = Universidades.map(Universidad=>fnUniversidadToView(Universidad));

    return Views;
};

/* El objetivo de esta función, es tomar todas las vistas
e inyectarlas al DOM. */

export const fnRender = (Views,contenedor) =>{
    contenedor.innerHTML = "";
    Views.forEach(view => contenedor.appendChild(view));
};